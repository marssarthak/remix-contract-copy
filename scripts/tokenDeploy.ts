import { ethers } from "hardhat";

async function main() {
  const [owner, user1] = await ethers.getSigners();

  // Deploy the Token Contract
  const TokenContract = await ethers.getContractFactory("MyToken");
  // const tokenContract = TokenContract.attach("0x06928EC114e292037D670DC074ADe1E23E26D64d");
  const tokenContract = await TokenContract.deploy("DaiToken", "DAI");
  console.log("Dai Token deployed to:", tokenContract.address);

  console.log(await tokenContract.owner());
  console.log("MINTING PENDING...");
  const mintTx = await tokenContract.mint(
    "0xe05f949AB280414F4e3279fF3BE1e39774e4B4f3",
    ethers.utils.parseEther("1000000")
  );
  await mintTx.wait();
  console.log("MINTED SUCCESSFULLY");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
