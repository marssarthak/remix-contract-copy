/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GNSStakingV6_2,
  GNSStakingV6_2Interface,
} from "../../../contracts/GNSStakingV6_2.sol/GNSStakingV6_2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_govFund",
        type: "address",
      },
      {
        internalType: "contract TokenInterfaceV5",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract TokenInterfaceV5",
        name: "_dai",
        type: "address",
      },
      {
        internalType: "uint256[5]",
        name: "_boostsP",
        type: "uint256[5]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[5]",
        name: "boosts",
        type: "uint256[5]",
      },
    ],
    name: "BoostsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DaiDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DaiHarvested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "GovFundUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensUnstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "accDaiPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "boostsP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "value",
        type: "uint256[5]",
      },
    ],
    name: "checkBoostsP",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      {
        internalType: "contract TokenInterfaceV5",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "distributeRewardDai",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "govFund",
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
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingRewardDai",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "value",
        type: "uint256[5]",
      },
    ],
    name: "setBoostsP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setGovFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stakeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract TokenInterfaceV5",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRewardsDistributedDai",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstakeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "stakedTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtDai",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBoostTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "harvestedRewardsDai",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162000fa938038062000fa9833981016040819052620000349162000205565b6001600160a01b038416158015906200005557506001600160a01b03831615155b80156200006a57506001600160a01b03821615155b620000ab5760405162461bcd60e51b815260206004820152600c60248201526b57524f4e475f504152414d5360a01b60448201526064015b60405180910390fd5b620000b681620000fb565b600080546001600160a01b0319166001600160a01b0386811691909117909155838116608052821660a052620000f060038260056200017f565b5050505050620002cf565b6020810151815110801562000117575060408101516020820151105b80156200012b575060608101516040820151105b80156200013f575060808101516060820151105b6200017c5760405162461bcd60e51b815260206004820152600c60248201526b57524f4e475f56414c55455360a01b6044820152606401620000a2565b50565b8260058101928215620001b0579160200282015b82811115620001b057825182559160200191906001019062000193565b50620001be929150620001c2565b5090565b5b80821115620001be5760008155600101620001c3565b6001600160a01b03811681146200017c57600080fd5b634e487b7160e01b600052604160045260246000fd5b6000806000806101008086880312156200021e57600080fd5b85516200022b81620001d9565b809550506020808701516200024081620001d9565b60408801519095506200025381620001d9565b9350607f870188136200026557600080fd5b60405160a081016001600160401b03811182821017156200028a576200028a620001ef565b604052918701918089841115620002a057600080fd5b606089015b84811015620002be5780518252908301908301620002a5565b505080935050505092959194509250565b60805160a051610c9862000311600039600081816102470152818161032401526108be0152600081816102760152818161050c01526105f10152610c986000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a87430ba11610097578063f171637611610066578063f171637614610239578063f4b9fa7514610242578063f681834514610269578063fc0c546a1461027157600080fd5b8063a87430ba146101ab578063ae7d610f14610200578063b243fb0114610213578063e09cc52f1461022657600080fd5b80637547c7a3116100d35780637547c7a3146101515780637c74f1af14610164578063865f12e8146101775780639e1a4d19146101a257600080fd5b80633620151b146101055780634641257d1461012157806348ec52711461012b578063608e4dd01461013e575b600080fd5b61010e60015481565b6040519081526020015b60405180910390f35b610129610298565b005b610129610139366004610ab4565b6103d4565b61012961014c366004610b40565b610469565b61012961015f366004610b40565b6105b4565b610129610172366004610b59565b610709565b60005461018a906001600160a01b031681565b6040516001600160a01b039091168152602001610118565b61010e60025481565b6101e06101b9366004610b59565b60096020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610118565b61012961020e366004610ab4565b610811565b610129610221366004610b40565b61089c565b61010e610234366004610b40565b6109bb565b61010e60085481565b61018a7f000000000000000000000000000000000000000000000000000000000000000081565b61010e6109d2565b61018a7f000000000000000000000000000000000000000000000000000000000000000081565b60006102a26109d2565b336000908152600960205260409020600154600282015482549394509192670de0b6b3a7640000926102d391610b9f565b6102dd9190610bb7565b6102e79190610bd6565b8160010181905550818160030160008282546103039190610b9f565b909155505060405163a9059cbb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103999190610bf8565b5060405182815233907f5014ccb80352976f25dc0c4b701c0ed95a760cf4f2e3b3197eb5a34bbff8a443906020015b60405180910390a25050565b602081015181511080156103ef575060408101516020820151105b8015610402575060608101516040820151105b8015610415575060808101516060820151105b6104665760405162461bcd60e51b815260206004820152600c60248201527f57524f4e475f56414c554553000000000000000000000000000000000000000060448201526064015b60405180910390fd5b50565b336000908152600960205260409020610480610298565b600281015481546104919190610b9f565b600260008282546104a29190610c1a565b90915550508054829082906000906104bb908490610c1a565b909155506104c99050610a28565b600281015481546104da9190610b9f565b600260008282546104eb9190610b9f565b909155505060405163a9059cbb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190610bf8565b5060405182815233907f9845e367b683334e5c0b12d7b81721ac518e649376fa65e3d68324e8f34f2679906020016103c8565b336000818152600960205260409081902090516323b872dd60e01b8152600481019290925230602483015260448201839052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af115801561063a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065e9190610bf8565b50610667610298565b600281015481546106789190610b9f565b600260008282546106899190610c1a565b90915550508054829082906000906106a2908490610b9f565b909155506106b09050610a28565b600281015481546106c19190610b9f565b600260008282546106d29190610b9f565b909155505060405182815233907fb539ca1e5c8d398ddf1c41c30166f33404941683be4683319b57669a93dad4ef906020016103c8565b6000546001600160a01b0316331461074e5760405162461bcd60e51b8152602060048201526008602482015267474f565f4f4e4c5960c01b604482015260640161045d565b6001600160a01b0381166107a45760405162461bcd60e51b815260206004820152600960248201527f414444524553535f300000000000000000000000000000000000000000000000604482015260640161045d565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527f82ed90f787d49d0a2409d828dce36f3138f9c04e46a59446f7564352cc9dd526906020015b60405180910390a150565b6000546001600160a01b031633146108565760405162461bcd60e51b8152602060048201526008602482015267474f565f4f4e4c5960c01b604482015260640161045d565b61085f816103d4565b61086c6003826005610a61565b507fd4f83e5841eed0062f973ea6c98ae700fab452a244757ca90231c5c53dd9f3d1816040516108069190610c31565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190610bf8565b506002541561098b5760025461095182670de0b6b3a7640000610bb7565b61095b9190610bd6565b6001600082825461096c9190610b9f565b9250508190555080600860008282546109859190610b9f565b90915550505b6040518181527f3d3a5dc6f49d04618f423dcbc7425d8eb9449f43a3f35243a05d11f5f6a78dfe90602001610806565b600381600581106109cb57600080fd5b0154905081565b336000908152600960205260408120600180820154905460028301548354670de0b6b3a76400009291610a0491610b9f565b610a0e9190610bb7565b610a189190610bd6565b610a229190610c1a565b91505090565b3360009081526009602052604090206001548154670de0b6b3a764000091610a4f91610bb7565b610a599190610bd6565b600190910155565b8260058101928215610a8f579160200282015b82811115610a8f578251825591602001919060010190610a74565b50610a9b929150610a9f565b5090565b5b80821115610a9b5760008155600101610aa0565b600060a08284031215610ac657600080fd5b82601f830112610ad557600080fd5b60405160a0810181811067ffffffffffffffff82111715610b0657634e487b7160e01b600052604160045260246000fd5b6040528060a0840185811115610b1b57600080fd5b845b81811015610b35578035835260209283019201610b1d565b509195945050505050565b600060208284031215610b5257600080fd5b5035919050565b600060208284031215610b6b57600080fd5b81356001600160a01b0381168114610b8257600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb257610bb2610b89565b500190565b6000816000190483118215151615610bd157610bd1610b89565b500290565b600082610bf357634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610c0a57600080fd5b81518015158114610b8257600080fd5b600082821015610c2c57610c2c610b89565b500390565b60a08101818360005b6005811015610c59578151835260209283019290910190600101610c3a565b5050509291505056fea2646970667358221220f842da9df663898e610fc11130a68e646294e3739c5f28b5fccccc552e2903af64736f6c634300080f0033";

type GNSStakingV6_2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GNSStakingV6_2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GNSStakingV6_2__factory extends ContractFactory {
  constructor(...args: GNSStakingV6_2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _govFund: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _dai: PromiseOrValue<string>,
    _boostsP: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GNSStakingV6_2> {
    return super.deploy(
      _govFund,
      _token,
      _dai,
      _boostsP,
      overrides || {}
    ) as Promise<GNSStakingV6_2>;
  }
  override getDeployTransaction(
    _govFund: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _dai: PromiseOrValue<string>,
    _boostsP: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _govFund,
      _token,
      _dai,
      _boostsP,
      overrides || {}
    );
  }
  override attach(address: string): GNSStakingV6_2 {
    return super.attach(address) as GNSStakingV6_2;
  }
  override connect(signer: Signer): GNSStakingV6_2__factory {
    return super.connect(signer) as GNSStakingV6_2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GNSStakingV6_2Interface {
    return new utils.Interface(_abi) as GNSStakingV6_2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GNSStakingV6_2 {
    return new Contract(address, _abi, signerOrProvider) as GNSStakingV6_2;
  }
}
