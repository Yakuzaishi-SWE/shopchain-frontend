import { Contract } from "web3-eth-contract";


interface IContractRepo {
    init(): Contract;
}

export default IContractRepo;   