//0x976c4297b1aa69f9fb79b22a2ecac4ee4b55aa40

const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/3e6138c03937473e9d583f62aa385ce3`);

const walletAddress = "0x976c4297b1aa69f9fb79b22a2ecac4ee4b55aa40";
const walletAbi = [
    {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "accountBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

//for internaction with contract 
const constractInteraction = async () => {
    const walletContract = new ethers.Contract(walletAddress, walletAbi, provider); // provides object


    const contractName = await walletContract.name();
    console.log(" Contract Name: ", contractName);

    const num = await walletContract.getValue();
    console.log("Number value:", String(num));

    const contractBalance = await walletContract.contractBalance();
    const balEthContract = ethers.utils.formatEther(contractBalance);
    console.log("Contract Balance:", balEthContract);


    const userBalance = await walletContract.accountBalance("0x568Ae1DeD255540c13c70cAb1FF42F7fd9966f4B");
    const balEthUser = ethers.utils.formatEther(userBalance);
    console.log("User Balance", balEthUser);
}
constractInteraction();