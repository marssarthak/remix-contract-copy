/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IChildToken,
  IChildTokenInterface,
} from "../../../contracts/GFarm2Token.sol/IChildToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IChildToken__factory {
  static readonly abi = _abi;
  static createInterface(): IChildTokenInterface {
    return new utils.Interface(_abi) as IChildTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChildToken {
    return new Contract(address, _abi, signerOrProvider) as IChildToken;
  }
}