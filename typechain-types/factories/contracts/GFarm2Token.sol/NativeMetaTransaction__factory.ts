/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NativeMetaTransaction,
  NativeMetaTransactionInterface,
} from "../../../contracts/GFarm2Token.sol/NativeMetaTransaction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506108978061002a6000396000f3fe60806040526004361061005a5760003560e01c806320379ee51161004357806320379ee5146101ad5780632d0335ab146101d45780633408e470146102075761005a565b80630c53c51c1461005f5780630f7e597014610198575b600080fd5b610123600480360360a081101561007557600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100a057600080fd5b8201836020820111156100b257600080fd5b803590602001918460018302840111640100000000831117156100d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff1661021c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a457600080fd5b5061012361051f565b3480156101b957600080fd5b506101c2610558565b60408051918252519081900360200190f35b3480156101e057600080fd5b506101c2600480360360208110156101f757600080fd5b50356001600160a01b031661055e565b34801561021357600080fd5b506101c2610579565b60606102266107ae565b50604080516060810182526001600160a01b03881660008181526002602090815290849020548352820152908101869052610264878287878761057d565b61029f5760405162461bcd60e51b81526004018080602001828103825260218152602001806108416021913960400191505060405180910390fd5b6001600160a01b0387166000908152600260205260409020546102c990600163ffffffff61065a16565b6001600160a01b03881660008181526002602090815260408083209490945583519283523383820181905260609484018581528b51958501959095528a517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b958d9592948d94919260808501928601918190849084905b83811015610358578181015183820152602001610340565b50505050905090810190601f1680156103855780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160006060306001600160a01b0316888a6040516020018083805190602001908083835b602083106103d65780518252601f1990920191602091820191016103b7565b6001836020036101000a038019825116818451168082178552505050505050905001826001600160a01b03166001600160a01b031660601b8152601401925050506040516020818303038152906040526040518082805190602001908083835b602083106104555780518252601f199092019160209182019101610436565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104b7576040519150601f19603f3d011682016040523d82523d6000602084013e6104bc565b606091505b509150915081610513576040805162461bcd60e51b815260206004820152601c60248201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604482015290519081900360640190fd5b98975050505050505050565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b60015490565b6001600160a01b031660009081526002602052604090205490565b4690565b60006001600160a01b0386166105c45760405162461bcd60e51b815260040180806020018281038252602581526020018061081c6025913960400191505060405180910390fd5b60016105d76105d2876106bb565b610747565b83868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610631573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b6000828201838110156106b4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006040518060800160405280604381526020016107d960439139805190602001208260000151836020015184604001518051906020012060405160200180858152602001848152602001836001600160a01b03166001600160a01b03168152602001828152602001945050505050604051602081830303815290604052805190602001209050919050565b6000610751610558565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60405180606001604052806000815260200160006001600160a01b0316815260200160608152509056fe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e6174757265294e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5349474e45525369676e657220616e64207369676e617475726520646f206e6f74206d61746368a26469706673582212209f9e4bedbbf64a334f7d006e959a10c094e258063269fc1aa1c4d38b44e0ee2264736f6c63430006060033";

type NativeMetaTransactionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeMetaTransactionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeMetaTransaction__factory extends ContractFactory {
  constructor(...args: NativeMetaTransactionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NativeMetaTransaction> {
    return super.deploy(overrides || {}) as Promise<NativeMetaTransaction>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NativeMetaTransaction {
    return super.attach(address) as NativeMetaTransaction;
  }
  override connect(signer: Signer): NativeMetaTransaction__factory {
    return super.connect(signer) as NativeMetaTransaction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeMetaTransactionInterface {
    return new utils.Interface(_abi) as NativeMetaTransactionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeMetaTransaction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeMetaTransaction;
  }
}
