/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AggregatorInterfaceV5Interface extends utils.Interface {
  functions: {
    "closeFeeP(uint256)": FunctionFragment;
    "getPrice(uint256,uint8,uint256)": FunctionFragment;
    "linkFee(uint256,uint256)": FunctionFragment;
    "openFeeP(uint256)": FunctionFragment;
    "pairMaxLeverage(uint256)": FunctionFragment;
    "pairMinLeverage(uint256)": FunctionFragment;
    "pairMinOpenLimitSlippageP(uint256)": FunctionFragment;
    "pairsCount()": FunctionFragment;
    "referralP(uint256)": FunctionFragment;
    "tokenDaiReservesLp()": FunctionFragment;
    "tokenPriceDai()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "closeFeeP"
      | "getPrice"
      | "linkFee"
      | "openFeeP"
      | "pairMaxLeverage"
      | "pairMinLeverage"
      | "pairMinOpenLimitSlippageP"
      | "pairsCount"
      | "referralP"
      | "tokenDaiReservesLp"
      | "tokenPriceDai"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "closeFeeP",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "linkFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "openFeeP",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairMaxLeverage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairMinLeverage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairMinOpenLimitSlippageP",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralP",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenDaiReservesLp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPriceDai",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "closeFeeP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "linkFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openFeeP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pairMaxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairMinLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairMinOpenLimitSlippageP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pairsCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "referralP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenDaiReservesLp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPriceDai",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AggregatorInterfaceV5 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AggregatorInterfaceV5Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    closeFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    linkFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    openFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairMaxLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairMinLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairMinOpenLimitSlippageP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    referralP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenDaiReservesLp(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    tokenPriceDai(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  closeFeeP(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  linkFee(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  openFeeP(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pairMaxLeverage(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pairMinLeverage(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pairMinOpenLimitSlippageP(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pairsCount(overrides?: CallOverrides): Promise<BigNumber>;

  referralP(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenDaiReservesLp(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  tokenPriceDai(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    closeFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linkFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMaxLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMinLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMinOpenLimitSlippageP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairsCount(overrides?: CallOverrides): Promise<BigNumber>;

    referralP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenDaiReservesLp(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    tokenPriceDai(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    closeFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    linkFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMaxLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMinLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairMinOpenLimitSlippageP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairsCount(overrides?: CallOverrides): Promise<BigNumber>;

    referralP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenDaiReservesLp(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPriceDai(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    closeFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    linkFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openFeeP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairMaxLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairMinLeverage(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairMinOpenLimitSlippageP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralP(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenDaiReservesLp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenPriceDai(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}