const { ethers } = require("ethers");

// define provider to connect to the local node
const provider = new ethers.providers.JsonRpcProvider();

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
    
    // connect to Ethereum with MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // get the list of accounts
    const accounts = await provider.listAccounts();
    
    // print the accounts
    console.log(`The accounts: ${accounts}`);
 }





// call the function to get the list of accounts
getAccounts();




