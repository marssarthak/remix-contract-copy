/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  TickMath,
  TickMathInterface,
} from "../../../../../../../contracts/GNSPriceAggregatorV6_3/@uniswap/v3-core/contracts/libraries/TickMath";

const _abi = [
  {
    inputs: [],
    name: "R",
    type: "error",
  },
  {
    inputs: [],
    name: "T",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d53fa18ef76442efd8c9c625482d53d014758273031b401719f4e1f98ea17bb764736f6c63430008110033";

type TickMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickMath__factory extends ContractFactory {
  constructor(...args: TickMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TickMath> {
    return super.deploy(overrides || {}) as Promise<TickMath>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TickMath {
    return super.attach(address) as TickMath;
  }
  override connect(signer: Signer): TickMath__factory {
    return super.connect(signer) as TickMath__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathInterface {
    return new utils.Interface(_abi) as TickMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMath {
    return new Contract(address, _abi, signerOrProvider) as TickMath;
  }
}
