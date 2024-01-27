const { ethers } = require("ethers");

// define provider to connect to the local node
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/b164b6515124448f94cadeeb7c8d1f26");

// connect to Ethereum usisng RPC URL
// const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); 
// create a function to get a list of accounts
const getAccounts = async () => {
    
    // get the list of accounts
    const accounts = await provider.listAccounts();
    
    // print the accounts
    console.log(`The accounts: ${accounts}`);
 }

// create a function to get wallet address balance
const getWalletBalance = async (address) => {
    
    // get the balance
    const balance = await provider.getBalance(address);
    
    // print the balance
    console.log(`The ${address} balance: ${balance.toString()}`);
 }


// create a function to get block number
const getBlockNumber = async () => {
    
    // get the block number
    const blockNumber = await provider.getBlockNumber();
    
    // print the block number
    console.log(`The block number: ${blockNumber}`);
 }

 // create a function that connects to Ethereum with MetMask
 const connectToMetaMask = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Connect to Ethereum with MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Get the list of accounts
            const accounts = await provider.listAccounts();

            // Display the accounts on the webpage
            document.getElementById('content').innerHTML = `Connected accounts: ${accounts.join(', ')}`;
        } catch (error) {
            document.getElementById('content').innerHTML = `Error: ${error.message}`;
        }
    } else {
        document.getElementById('content').innerHTML = 'MetaMask is not installed!';
    }
};

// call all the functions
getAccounts();
getWalletBalance("0x8b5e3c3a4f8c2f3f2f1a5d6a6c9c1a0c8d1f26");
getBlockNumber();
// connectToMetaMask();


module.exports = {
    getAccounts,
    getWalletBalance,
    getBlockNumber,
    connectToMetaMask
}






