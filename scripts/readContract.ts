import { ethers, run } from "hardhat";

const PRICE_AGGREGATOR = "0xF541191Df1547127e2AF23623E5337A525154bF6";
const LINKPRICEFEED = "0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5";
const CHAINLINKTOKEN = "0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F";

async function main() {
  const [owner, user1] = await ethers.getSigners();

  console.log(await owner.getAddress());

  // Deploy the Storage Contract
  // const GNSPairsStorageV6 = await ethers.getContractFactory("GNSPairsStorageV6");
  // const gNSPairsStorageV6 = GNSPairsStorageV6.attach("0x3E64abDaBDf769E2F03bA391879B7e0C86403Df4");
  // console.log("gNSPairsStorageV6 deployed to:", gNSPairsStorageV6.address);

  // console.log(await gNSPairsStorageV6.pairs("1"));

  const IGNSTradingStorage = await ethers.getContractFactory("GFarmTradingStorageV5");
  // const storageContract = await IGNSTradingStorage.deploy();
  const storageContract = IGNSTradingStorage.attach("0x24c82D1ba6cf6a4b27F479B9aab85Ae50fB72dF8");
  console.log("Storage deployed to:", storageContract.address);

  // const a = await storageContract.openTrades("0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3", 0, 0);

  // console.log(a);

  const GNSTradingV6_1 = await ethers.getContractFactory("GNSTradingV6_1");
  // const gNSTradingV6_1 = await GNSTradingV6_1.deploy(
  //   storageContract.address,
  //   gNSPairInfosV6_1.address
  // );
  const gNSTradingV6_1 = GNSTradingV6_1.attach("0x4D46b8E97D11CAAD5E84f46ceE735d405af8C523");
  console.log("Trading deployed to:", gNSTradingV6_1.address);

  // const tx = await gNSTradingV6_1.executeLimitOrder(
  //   4,
  //   "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
  //   1,
  //   0
  // );

  // await tx.wait();

  console.log("TRADE FINISGHED");

  const count = await storageContract.openLimitOrdersCount(
    "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
    1
  );

  console.log("limit order count: ", count.toString());

  const limitTrades = await Promise.all(
    Array.from({ length: Number(count.toString()) }).map(async (_, i) => {
      return await storageContract.getOpenLimitOrderData(
        "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
        1,
        i
      );
    })
  );

  console.log(limitTrades);

  const martketcount = await storageContract.openTradesCount(
    "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
    1
  );

  console.log("count: ", martketcount.toString());

  const trades = await Promise.all(
    Array.from({ length: Number(martketcount.toString()) }).map(async (_, i) => {
      return await storageContract.openTrades("0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3", 1, i);
    })
  );

  console.log(trades);

  console.log(
    await storageContract.openLimitOrderClosed("0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3", 1, 0)
  );

  // console.log("TRADER ");

  // gNSTradingV6_1.executeOrder(4, 1);

  // await sleep(3000);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
