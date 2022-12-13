const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/a4a86eb9c32c4aa890922109ae79d95d`);


const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log(block);

    const balance = await provider.getBalance("ethers.eth");
    console.log(balance);

    const ethBalance = ethers.utils.formatEther(balance);
    console.log(ethBalance);


}
querryBlockchain();