const Web3 = require('web3');
const contractABI = require('./contractABI.json');

const web3 = new Web3('https://public-node.rsk.co');
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function deposit(pid, amount, userAddress, privateKey) {
  const nonce = await web3.eth.getTransactionCount(userAddress);
  const gasPrice = await web3.eth.getGasPrice();
  const gasLimit = 200000;

  const txData = contract.methods.deposit(pid, amount).encodeABI();

  const txObject = {
    nonce: web3.utils.toHex(nonce),
    gasPrice: web3.utils.toHex(gasPrice),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    data: txData,
  };

  const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  return receipt;
}

async function withdraw(pid, amount, userAddress, privateKey) {
  // Similar implementation to deposit function
}

async function claimRewards(pid, userAddress, privateKey) {
  // Similar implementation to deposit function
}

module.exports = {
  deposit,
  withdraw,
  claimRewards,
};
