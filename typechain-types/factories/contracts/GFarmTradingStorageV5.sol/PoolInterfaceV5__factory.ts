/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  PoolInterfaceV5,
  PoolInterfaceV5Interface,
} from "../../../contracts/GFarmTradingStorageV5.sol/PoolInterfaceV5";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "increaseAccTokensPerLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PoolInterfaceV5__factory {
  static readonly abi = _abi;
  static createInterface(): PoolInterfaceV5Interface {
    return new utils.Interface(_abi) as PoolInterfaceV5Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolInterfaceV5 {
    return new Contract(address, _abi, signerOrProvider) as PoolInterfaceV5;
  }
}
