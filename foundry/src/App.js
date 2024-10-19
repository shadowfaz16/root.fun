import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABI from './contractABI.json';

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [pools, setPools] = useState([]);

  useEffect(() => {
    initWeb3();
    fetchPools();
  }, []);

  async function initWeb3() {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
        const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);

        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setContract(contractInstance);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
    }
  }

  async function fetchPools() {
    try {
      const response = await fetch('http://localhost:3000/api/pools');
      const data = await response.json();
      setPools(data);
    } catch (error) {
      console.error('Error fetching pools:', error);
    }
  }

  async function deposit(pid, amount) {
    if (!contract || !account) return;
    try {
      await contract.methods.deposit(pid, amount).send({ from: account });
      // Update UI or fetch updated data
    } catch (error) {
      console.error('Error depositing:', error);
    }
  }

  async function withdraw(pid, amount) {
    if (!contract || !account) return;
    try {
      await contract.methods.withdraw(pid, amount).send({ from: account });
      // Update UI or fetch updated data
    } catch (error) {
      console.error('Error withdrawing:', error);
    }
  }

  async function claimRewards(pid) {
    if (!contract || !account) return;
    try {
      await contract.methods.claimRewards(pid).send({ from: account });
      // Update UI or fetch updated data
    } catch (error) {
      console.error('Error claiming rewards:', error);
    }
  }

  return (
    <div className="App">
      <h1>Pump.fun</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={initWeb3}>Connect Wallet</button>
      )}
      <h2>Available Pools</h2>
      {pools.map((pool) => (
        <div key={pool.id}>
          <h3>Pool {pool.id}</h3>
          <p>Total Staked: {pool.totalStaked}</p>
          <p>Reward Rate: {pool.rewardRate}</p>
          <input type="number" placeholder="Amount" id={`amount-${pool.id}`} />
          <button onClick={() => deposit(pool.id, document.getElementById(`amount-${pool.id}`).value)}>
            Deposit
          </button>
          <button onClick={() => withdraw(pool.id, document.getElementById(`amount-${pool.id}`).value)}>
            Withdraw
          </button>
          <button onClick={() => claimRewards(pool.id)}>Claim Rewards</button>
        </div>
      ))}
    </div>
  );
}

export default App;
