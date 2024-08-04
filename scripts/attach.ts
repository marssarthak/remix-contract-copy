import { ethers, run } from "hardhat";

const PRICE_AGGREGATOR = "0xF541191Df1547127e2AF23623E5337A525154bF6";
const LINKPRICEFEED = "0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5";
const CHAINLINKTOKEN = "0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F";

const STORAGE_ADDRESS = "0xA3481EA853fc2834cd57d5b71E4FBF808Aa126e8";
const TRADE_ADDRESS = "0x6d1429adb7770fE5a466aC9fa5De306243e23E26";
const DAI_TOKEN = "0xC553069DE43a2baC54eB6Eefe35E17e65B1C8233";

// Amoy NETWORK
// const STORAGE_ADDRESS = "0xAf188d3211729e6C8CFe4e3cd3fa7D5b7C0Dc127";
// const TRADE_ADDRESS = "0x6d1429adb7770fE5a466aC9fa5De306243e23E26";
// const DAI_TOKEN = "0xC553069DE43a2baC54eB6Eefe35E17e65B1C8233";

async function main() {
  const [owner, user1] = await ethers.getSigners();

  const TokenContract = await ethers.getContractFactory("MyToken");
  const tokenContract = TokenContract.attach(DAI_TOKEN);
  console.log("Dai Token deployed to:", tokenContract.address);

  // const approveTx = await tokenContract.approve(STORAGE_ADDRESS, ethers.utils.parseEther("100000"));
  // await approveTx.wait();

  // Deploy the Storage Contract
  const IGNSTradingStorage = await ethers.getContractFactory("GFarmTradingStorageV5");
  // const storageContract = await IGNSTradingStorage.deploy();
  const storageContract = IGNSTradingStorage.attach(STORAGE_ADDRESS);
  console.log("Storage deployed to:", storageContract.address);

  const tx = await storageContract.setMaxPendingMarketOrders("20");
  await tx.wait();

  // Deploy the Pair Info Contract
  const GNSPairInfosV6_1 = await ethers.getContractFactory("GNSPairInfosV6_1");
  // const gNSPairInfosV6_1 = await GNSPairInfosV6_1.deploy(storageContract.address);
  const gNSPairInfosV6_1 = await GNSPairInfosV6_1.attach(
    "0x189D54FE46Aa15b03f9d3F6A674Fa46EC77C99e5"
  );
  console.log("PairInfo deployed to:", gNSPairInfosV6_1.address);

  // Deploy the GNSTradingV6_1 Contract
  const GNSTradingV6_1 = await ethers.getContractFactory("GNSTradingV6_1");
  // const gNSTradingV6_1 = await GNSTradingV6_1.deploy(
  //   storageContract.address,
  //   gNSPairInfosV6_1.address
  // );
  const gNSTradingV6_1 = await GNSTradingV6_1.attach(TRADE_ADDRESS);
  console.log("Trading deployed to:", gNSTradingV6_1.address);

  // // Deploy the GFarm2Token Contract
  // const GFarm2Token = await ethers.getContractFactory("GFarm2Token");
  // const gFarm2Token = await GFarm2Token.deploy(
  //   "GFARM2 Token",
  //   "GFARM2",
  //   18,
  //   "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
  //   gNSTradingV6_1.address
  // );
  // console.log("GFarm2Token deployed to:", gFarm2Token.address);

  // // Deploy the GNSPriceAggregatorV6_3 Contract
  const GNSPriceAggregatorV6_3 = await ethers.getContractFactory("GNSPriceAggregatorV6_3");
  // const gNSPriceAggregatorV6_3 = await GNSPriceAggregatorV6_3.deploy(
  //   CHAINLINKTOKEN,
  //   storageContract.address,
  //   "0x3E64abDaBDf769E2F03bA391879B7e0C86403Df4",
  //   LINKPRICEFEED,
  //   3,
  //   ["0xCC79157eb46F5624204f47AB42b3906cAA40eaB7"]
  // );
  const gNSPriceAggregatorV6_3 = await GNSPriceAggregatorV6_3.attach(
    "0x8B9Da5D25DA039c27D737b643264166234a4854E"
  );
  console.log("gNSPriceAggregatorV6_3 deployed to:", gNSPriceAggregatorV6_3.address);

  // // UPDATE TRADING CONTRACT
  // const setTradingTx = await storageContract.setTrading(gNSTradingV6_1.address);
  // await setTradingTx.wait();
  // console.log("setTrading UPDATED");

  // const pauseTradingContractTx = await gNSTradingV6_1.pause();
  // await pauseTradingContractTx.wait();
  // console.log("Paused UPDATED");

  // // UPDATE TRADING CONTRACT
  // const updateTokenTx = await storageContract.updateToken(gFarm2Token.address);
  // await updateTokenTx.wait();
  // console.log("UpdateToken UPDATED");

  // // UPDATE TRADING CONTRACT
  // const addTradingContractTx = await storageContract.addTradingContract(gNSTradingV6_1.address);
  // await addTradingContractTx.wait();
  // console.log("addTradingContractTx UPDATED");

  // // UNPAUSE
  // const unpauseTx = await gNSTradingV6_1.pause();
  // await unpauseTx.wait();
  // console.log("unpauseTx UPDATED");

  // const setPriceAggregatorTx = await storageContract.setPriceAggregator(
  //   "0x8B9Da5D25DA039c27D737b643264166234a4854E"
  // );
  // await setPriceAggregatorTx.wait();
  // console.log("setPriceAggregatorTx UPDATED");

  // Deploy the GNSPairsStorageV6 Contract
  // const GNSPairsStorageV6 = await ethers.getContractFactory("GNSPairsStorageV6");
  // const gNSPairsStorageV6 = await GNSPairsStorageV6.deploy("1");
  // console.log("gNSPairsStorageV6 deployed to:", gNSPairsStorageV6.address);

  // const setPriceAggregatorTx = await gNSPriceAggregatorV6_3.updatePairsStorage(
  //   gNSPairsStorageV6.address
  // );
  // await setPriceAggregatorTx.wait();
  // console.log("setPriceAggregatorTx UPDATED");

  // const updateStorageTx = await gNSPairsStorageV6.updateStorage(
  //   "0xCEa86BC8D083bF9d862CeFE71AD0EA660f21458F"
  // );
  // await updateStorageTx.wait();
  // console.log("updateStorageTx UPDATED");

  //!!! IMPORTANT TRANSFER SOME TOKENS TO PRICE AGGREGATOR
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
