/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Token } from "../Token";

export class Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "name",
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
    inputs: [],
    name: "owner",
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
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601181526020017f4e6164657220446162697420546f6b656e00000000000000000000000000000081525060009080519060200190620000519291906200027f565b506040518060400160405280600381526020017f4e44540000000000000000000000000000000000000000000000000000000000815250600190805190602001906200009f9291906200027f565b50620f4240600255348015620000b457600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001aa600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518060400160405280600a81526020017f6f776e65725f7465737400000000000000000000000000000000000000000000815250620001b060201b620003ee1760201c565b620004b1565b620002528282604051602401620001c992919062000381565b6040516020818303038152906040527f759f86bb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200025660201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200028d906200043b565b90600052602060002090601f016020900481019282620002b15760008555620002fd565b82601f10620002cc57805160ff1916838001178555620002fd565b82800160010185558215620002fd579182015b82811115620002fc578251825591602001919060010190620002df565b5b5090506200030c919062000310565b5090565b5b808211156200032b57600081600090555060010162000311565b5090565b6200033a81620003d1565b82525050565b60006200034d82620003b5565b620003598185620003c0565b93506200036b81856020860162000405565b6200037681620004a0565b840191505092915050565b60006040820190506200039860008301856200032f565b8181036020830152620003ac818462000340565b90509392505050565b600081519050919050565b600082825260208201905092915050565b6000620003de82620003e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200042557808201518184015260208101905062000408565b8381111562000435576000848401525b50505050565b600060028204905060018216806200045457607f821691505b602082108114156200046b576200046a62000471565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6108a780620004c16000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c9190610607565b60405180910390f35b61008d6101b9565b60405161009a9190610649565b60405180910390f35b6100bd60048036038101906100b891906104dd565b6101bf565b6040516100ca9190610649565b60405180910390f35b6100db610208565b6040516100e891906105bc565b60405180910390f35b6100f961022e565b6040516101069190610607565b60405180910390f35b61012960048036038101906101249190610506565b6102bc565b005b6000805461013890610779565b80601f016020809104026020016040519081016040528092919081815260200182805461016490610779565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b90610779565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610779565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033590610629565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461038d91906106d6565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103e39190610680565b925050819055505050565b61048682826040516024016104049291906105d7565b6040516020818303038152906040527f759f86bb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061048a565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000813590506104c281610843565b92915050565b6000813590506104d78161085a565b92915050565b6000602082840312156104ef57600080fd5b60006104fd848285016104b3565b91505092915050565b6000806040838503121561051957600080fd5b6000610527858286016104b3565b9250506020610538858286016104c8565b9150509250929050565b61054b8161070a565b82525050565b600061055c82610664565b610566818561066f565b9350610576818560208601610746565b61057f81610809565b840191505092915050565b600061059760118361066f565b91506105a28261081a565b602082019050919050565b6105b68161073c565b82525050565b60006020820190506105d16000830184610542565b92915050565b60006040820190506105ec6000830185610542565b81810360208301526105fe8184610551565b90509392505050565b600060208201905081810360008301526106218184610551565b905092915050565b600060208201905081810360008301526106428161058a565b9050919050565b600060208201905061065e60008301846105ad565b92915050565b600081519050919050565b600082825260208201905092915050565b600061068b8261073c565b91506106968361073c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106cb576106ca6107ab565b5b828201905092915050565b60006106e18261073c565b91506106ec8361073c565b9250828210156106ff576106fe6107ab565b5b828203905092915050565b60006107158261071c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610764578082015181840152602081019050610749565b83811115610773576000848401525b50505050565b6000600282049050600182168061079157607f821691505b602082108114156107a5576107a46107da565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f6e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b61084c8161070a565b811461085757600080fd5b50565b6108638161073c565b811461086e57600080fd5b5056fea264697066735822122043c545b0997462bb54d9f058d184b585e2e7348f9ea2343dda6bc197e98ccc9264736f6c63430008030033";
