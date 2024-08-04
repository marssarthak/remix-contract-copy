import { ethers, run } from "hardhat";

// FANTOM TESTNET
const LINKPRICEFEED = "0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5";
const CHAINLINKTOKEN = "0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F";

// POLYGON TESTNET
// const LINKPRICEFEED = "0xc2e2848e28B9fE430Ab44F55a8437a33802a219C";
// const CHAINLINKTOKEN = "0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904";

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const [owner, user1] = await ethers.getSigners();

  // Deploy the Storage Contract
  const IGNSTradingStorage = await ethers.getContractFactory("GFarmTradingStorageV5");
  const storageContract = await IGNSTradingStorage.deploy();
  // const storageContract = IGNSTradingStorage.attach("0x3C890b623d100C2B1F2574d53Bec98087B996B9a");
  console.log("Storage deployed to:", storageContract.address);

  await sleep(3000);

  // Deploy the Pair Info Contract
  const GNSPairInfosV6_1 = await ethers.getContractFactory("GNSPairInfosV6_1");
  const gNSPairInfosV6_1 = await GNSPairInfosV6_1.deploy(storageContract.address);
  // const gNSPairInfosV6_1 = await GNSPairInfosV6_1.attach(
  //   "0x7E1AFFBF91B7BE14BF5f251a336e654434dAec76"
  // );
  console.log("PairInfo deployed to:", gNSPairInfosV6_1.address);

  await sleep(3000);

  // Deploy the GNSTradingV6_1 Contract
  const GNSTradingV6_1 = await ethers.getContractFactory("GNSTradingV6_1");
  const gNSTradingV6_1 = await GNSTradingV6_1.deploy(
    storageContract.address,
    gNSPairInfosV6_1.address
  );
  // const gNSTradingV6_1 = await GNSTradingV6_1.attach("0xd3fEa44Eba2210a5cF554F905826fa41014A7F01");
  console.log("Trading deployed to:", gNSTradingV6_1.address);

  await sleep(3000);

  // Deploy the GFarm2Token Contract
  const GFarm2Token = await ethers.getContractFactory("GFarm2Token");
  const gFarm2Token = await GFarm2Token.deploy(
    "GFARM2 Token",
    "GFARM2",
    18,
    "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
    gNSTradingV6_1.address
  );
  // const gFarm2Token = await GFarm2Token.attach("0xcf305b89e1B836B72E7eE4bEf189A1b7a9773e8f");
  console.log("GFarm2Token deployed to:", gFarm2Token.address);

  await sleep(3000);

  // Deploy the GNSPairsStorageV6 Contract
  const GNSPairsStorageV6 = await ethers.getContractFactory("GNSPairsStorageV6");
  const gNSPairsStorageV6 = await GNSPairsStorageV6.deploy("1", storageContract.address);
  // const gNSPairsStorageV6 = await GNSPairsStorageV6.attach(
  //   "0x6d5Ab0178EFd3182e005EE059e0b4ee05d99081b"
  // );
  console.log("gNSPairsStorageV6 deployed to:", gNSPairsStorageV6.address);

  await sleep(3000);

  // // Deploy the GNSPriceAggregatorV6_3 Contract
  const GNSPriceAggregatorV6_3 = await ethers.getContractFactory("GNSPriceAggregatorV6_3");
  const gNSPriceAggregatorV6_3 = await GNSPriceAggregatorV6_3.deploy(
    CHAINLINKTOKEN,
    storageContract.address,
    gNSPairsStorageV6.address,
    LINKPRICEFEED,
    3,
    ["0xCC79157eb46F5624204f47AB42b3906cAA40eaB7"]
  );
  // const gNSPriceAggregatorV6_3 = await GNSPriceAggregatorV6_3.attach(
  //   "0x66C6D7636aa40385dD16456FD49448F506ccB8F4"
  // );
  console.log("gNSPriceAggregatorV6_3 deployed to:", gNSPriceAggregatorV6_3.address);

  await sleep(3000);

  // UPDATE TRADING CONTRACT
  const setTradingTx = await storageContract.setTrading(gNSTradingV6_1.address);
  await setTradingTx.wait();
  console.log("setTrading UPDATED");

  await sleep(3000);

  const pauseTradingContractTx = await gNSTradingV6_1.pause();
  await pauseTradingContractTx.wait();
  console.log("TRADING CONTRACT PAUSED");

  await sleep(3000);

  // UPDATE TRADING CONTRACT
  const updateTokenTx = await storageContract.updateToken(gFarm2Token.address);
  await updateTokenTx.wait();
  console.log("UpdateToken UPDATED");

  await sleep(2000);

  // UPDATE TRADING CONTRACT
  const addTradingContractTx = await storageContract.addTradingContract(gNSTradingV6_1.address);
  await addTradingContractTx.wait();
  console.log("addTradingContractTx UPDATED");

  await sleep(2000);

  // UNPAUSE
  const unpauseTx = await gNSTradingV6_1.pause();
  await unpauseTx.wait();
  console.log("unpauseTx UPDATED");

  await sleep(2000);

  const setPriceAggregatorTx = await storageContract.setPriceAggregator(
    gNSPriceAggregatorV6_3.address
  );
  await setPriceAggregatorTx.wait();
  console.log("setPriceAggregatorTx UPDATED");

  await sleep(2000);

  const ChainLinkTokenContract = await ethers.getContractFactory("MyToken");
  const chainLinkTokenContract = ChainLinkTokenContract.attach(CHAINLINKTOKEN);
  const tx = await chainLinkTokenContract.transfer(
    gNSPriceAggregatorV6_3.address,
    ethers.utils.parseEther("3")
  );
  await tx.wait();
  console.log("TOKEN TRANSFERRED SUCCESSFULLY");

  //!!! IMPORTANT TRANSFER SOME LINK TOKENS TO PRICE AGGREGATOR
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
