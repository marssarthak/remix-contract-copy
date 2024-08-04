import { expect } from "chai";
import { ethers } from "hardhat";
import { GNSStakingV6_2, MyToken } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("GNSStakingV6_2 Contract", function () {
  let owner: SignerWithAddress, addr1: SignerWithAddress, addr2: SignerWithAddress;
  let govFund: SignerWithAddress;
  let token: MyToken, dai: MyToken;
  let staking: GNSStakingV6_2;
  let boostsP = [2, 3, 5, 8, 13];

  beforeEach(async function () {
    [owner, addr1, addr2, govFund] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");
    token = await Token.deploy();
    await token.deployed();

    dai = await Token.deploy();
    await dai.deployed();

    const GNSStakingV6_2 = await ethers.getContractFactory("GNSStakingV6_2");
    staking = await GNSStakingV6_2.deploy(
      govFund.address,
      token.address,
      dai.address,
      [2, 3, 5, 8, 13]
    );
    await staking.deployed();
  });

  describe("Initial Deployment", function () {
    it("Should set the correct govFund address", async function () {
      expect(await staking.govFund()).to.equal(govFund.address);
    });

    it("Should set the correct token and dai addresses", async function () {
      expect(await staking.token()).to.equal(token.address);
      expect(await staking.dai()).to.equal(dai.address);
    });

    // it("Should set the correct boostsP array", async function () {
    //   expect(await staking.boostsP(boostsP)).to.deep.equal(boostsP);
    // });
  });

  describe("Staking and Unstaking", function () {
    it("Should allow users to stake tokens", async function () {
      const amount = ethers.utils.parseEther("10");
      await token.mint(addr1.address, amount);
      await token.connect(addr1).approve(staking.address, amount);

      await expect(staking.connect(addr1).stakeTokens(amount))
        .to.emit(staking, "TokensStaked")
        .withArgs(addr1.address, amount);

      const userInfo = await staking.users(addr1.address);
      expect(userInfo.stakedTokens).to.equal(amount);
    });

    it("Should allow users to unstake tokens", async function () {
      const amount = ethers.utils.parseEther("10");
      await token.mint(addr1.address, amount);
      await token.connect(addr1).approve(staking.address, amount);
      await staking.connect(addr1).stakeTokens(amount);

      await expect(staking.connect(addr1).unstakeTokens(amount))
        .to.emit(staking, "TokensUnstaked")
        .withArgs(addr1.address, amount);

      const userInfo = await staking.users(addr1.address);
      expect(userInfo.stakedTokens).to.equal(0);
    });
  });

  describe("Distributing and Harvesting Rewards", function () {
    it("Should distribute rewards correctly", async function () {
      const stakeAmount = ethers.utils.parseEther("10");
      await token.mint(addr1.address, stakeAmount);
      await token.connect(addr1).approve(staking.address, stakeAmount);

      await expect(staking.connect(addr1).stakeTokens(stakeAmount))
        .to.emit(staking, "TokensStaked")
        .withArgs(addr1.address, stakeAmount);

      const amount = ethers.utils.parseEther("100");
      await dai.mint(owner.address, amount);
      await dai.approve(staking.address, amount);

      await expect(staking.distributeRewardDai(amount))
        .to.emit(staking, "DaiDistributed")
        .withArgs(amount);

      expect(await staking.totalRewardsDistributedDai()).to.equal(amount);
    });

    it("Should allow users to harvest rewards", async function () {
      const stakeAmount = ethers.utils.parseEther("10");
      await token.mint(addr1.address, stakeAmount);
      await token.connect(addr1).approve(staking.address, stakeAmount);
      await staking.connect(addr1).stakeTokens(stakeAmount);

      const rewardAmount = ethers.utils.parseEther("100");
      await dai.mint(owner.address, rewardAmount);
      await dai.approve(staking.address, rewardAmount);
      await staking.distributeRewardDai(rewardAmount);

      await expect(staking.connect(addr1).harvest())
        .to.emit(staking, "DaiHarvested")
        .withArgs(addr1.address, rewardAmount);

      const userInfo = await staking.users(addr1.address);
      expect(userInfo.harvestedRewardsDai).to.equal(rewardAmount);
    });
  });

  describe("Managing Governance", function () {
    it("Should update govFund address by only gov", async function () {
      const newGovFund = addr2.address;

      await expect(staking.connect(govFund).setGovFund(newGovFund))
        .to.emit(staking, "GovFundUpdated")
        .withArgs(newGovFund);

      expect(await staking.govFund()).to.equal(newGovFund);
    });

    it("Should not allow non-gov to update govFund address", async function () {
      await expect(staking.connect(addr1).setGovFund(addr2.address)).to.be.revertedWith("GOV_ONLY");
    });
  });
});
