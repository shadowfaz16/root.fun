const express = require('express');
const cors = require('cors');
const Web3 = require('web3');
const contractABI = require('./contractABI.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const web3 = new Web3('https://public-node.rsk.co'); // Rootstock mainnet
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/api/pools', async (req, res) => {
  try {
    const poolCount = await contract.methods.poolCount().call();
    const pools = [];

    for (let i = 0; i < poolCount; i++) {
      const pool = await contract.methods.pools(i).call();
      pools.push({
        id: i,
        token: pool.token,
        totalStaked: pool.totalStaked,
        rewardRate: pool.rewardRate,
      });
    }

    res.json(pools);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching pools' });
  }
});

app.get('/api/user/:address/:pid', async (req, res) => {
  try {
    const { address, pid } = req.params;
    const userInfo = await contract.methods.userInfo(pid, address).call();
    res.json({
      stakedAmount: userInfo.stakedAmount,
      rewardDebt: userInfo.rewardDebt,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user info' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
