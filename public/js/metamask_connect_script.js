// Assuming ethers.js is already included

let isConnected = false;

const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            isConnected = true;
            document.getElementById('connectButton').innerText = `Disconnect ${address}`;
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('MetaMask is not installed!');
    }
};

document.getElementById('connectButton').addEventListener('click', () => {
    if (isConnected) {
        // Disconnect logic here, if applicable
        isConnected = false;
        document.getElementById('connectButton').innerText = 'Connect Wallet';
    } else {
        connectToMetaMask();
    }
});
