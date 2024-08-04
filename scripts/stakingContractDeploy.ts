import { ethers } from "hardhat";

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const [owner, user1] = await ethers.getSigners();

  // Deploy the ERC20 Contract
  const TokenContract = await ethers.getContractFactory("MyToken");
  const tokenContract = await TokenContract.deploy();
  console.log("Token deployed to:", tokenContract.address);

  // Deploy the Staking Contract
  const GNSStakingV6_2 = await ethers.getContractFactory("GNSStakingV6_2");
  const stakingContract = await GNSStakingV6_2.deploy(
    owner.address,
    tokenContract.address,
    "0x06928EC114e292037D670DC074ADe1E23E26D64d",
    [2, 3, 5, 8, 13]
  );
  console.log("Staking deployed to:", stakingContract.address);

  // MINT TOKEN
  const mintTx = await tokenContract.mint(owner.address, ethers.utils.parseEther("100000"));
  await mintTx.wait();
  console.log("Token Minted");

  await sleep();

  // APPROVE TOKEN
  const approveTx = await tokenContract.approve(
    stakingContract.address,
    ethers.utils.parseEther("100000")
  );
  await approveTx.wait();
  console.log("Token Approved");

  await sleep();

  // STAKING TOKEN
  const stakeTx = await stakingContract.stakeTokens(ethers.utils.parseEther("1000"));
  await stakeTx.wait();
  console.log("Token Staked");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
