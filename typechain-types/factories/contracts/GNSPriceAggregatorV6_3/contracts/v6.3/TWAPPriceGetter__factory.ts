/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TWAPPriceGetter,
  TWAPPriceGetterInterface,
} from "../../../../../contracts/GNSPriceAggregatorV6_3/contracts/v6.3/TWAPPriceGetter";

const _abi = [
  {
    inputs: [],
    name: "T",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "newValue",
        type: "uint32",
      },
    ],
    name: "TwapIntervalUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IUniswapV3Pool",
        name: "newValue",
        type: "address",
      },
    ],
    name: "UniV3PoolUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "isGnsToken0InLp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPriceDai",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "twapInterval",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniV3Pool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class TWAPPriceGetter__factory {
  static readonly abi = _abi;
  static createInterface(): TWAPPriceGetterInterface {
    return new utils.Interface(_abi) as TWAPPriceGetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TWAPPriceGetter {
    return new Contract(address, _abi, signerOrProvider) as TWAPPriceGetter;
  }
}
