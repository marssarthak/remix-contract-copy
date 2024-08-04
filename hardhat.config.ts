import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

const TESTNET_RPC_URL = "https://fantom-testnet-rpc.publicnode.com";
const MAINNET_RPC_URL = "https://bsc.blockpi.network/v1/rpc/public";
// const TESTNET_RPC_URL = "https://polygon-amoy-bor-rpc.publicnode.com";
// const MAINNET_RPC_URL = "https://polygon-amoy-bor-rpc.publicnode.com";
const SECRETPHASE = process.env.SECRET_PHRASE;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const accounts = false
  ? {
      mnemonic: SECRETPHASE,
      path: "m/44'/60'/0'/0",
    }
  : ([PRIVATE_KEY] as any);

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    fantomtestnet: {
      url: TESTNET_RPC_URL,
      accounts: accounts,
    },
    fantom: {
      url: MAINNET_RPC_URL,
      accounts: accounts,
    },
    polygontestnet: {
      url: TESTNET_RPC_URL,
      accounts: accounts,
      gasPrice: 20e9,
    },
    polygon: {
      url: MAINNET_RPC_URL,
      accounts: accounts,
    },
  },
};

export default config;
