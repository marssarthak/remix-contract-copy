/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CallbacksInterfaceV6_2,
  CallbacksInterfaceV6_2Interface,
} from "../../../../../contracts/GNSPriceAggregatorV6_3/contracts/interfaces/CallbacksInterfaceV6_2";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
        ],
        internalType: "struct CallbacksInterfaceV6_2.AggregatorAnswer",
        name: "",
        type: "tuple",
      },
    ],
    name: "closeTradeMarketCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
        ],
        internalType: "struct CallbacksInterfaceV6_2.AggregatorAnswer",
        name: "",
        type: "tuple",
      },
    ],
    name: "openTradeMarketCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
        ],
        internalType: "struct CallbacksInterfaceV6_2.AggregatorAnswer",
        name: "",
        type: "tuple",
      },
    ],
    name: "updateSlCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class CallbacksInterfaceV6_2__factory {
  static readonly abi = _abi;
  static createInterface(): CallbacksInterfaceV6_2Interface {
    return new utils.Interface(_abi) as CallbacksInterfaceV6_2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallbacksInterfaceV6_2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CallbacksInterfaceV6_2;
  }
}
