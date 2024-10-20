'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ethers } from 'ethers'
import abi from '@/factoryabi.json'
import tokenAbi from '@/tokenabi.json'
import coinImage from '@/assets/rootstock-coin.gif'

const TokenDetail = () => {
  const router = useRouter()
  const [tokenAddress, setTokenAddress] = useState('')
  const [tokenDetails, setTokenDetails] = useState({
    name: 'Unknown',
    symbol: 'Unknown',
    description: 'No description available',
    tokenImageUrl: 'https://via.placeholder.com/200',
    fundingRaised: '0 ETH',
    creatorAddress: '0x0000000000000000000000000000000000000000',
  })

  const [owners, setOwners] = useState([])
  const [transfers, setTransfers] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalSupply, setTotalSupply] = useState('0')
  const [remainingTokens, setRemainingTokens] = useState('0')
  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [cost, setCost] = useState('0')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fundingRaised = parseFloat(tokenDetails.fundingRaised.replace(' ETH', ''))

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenAddress) return

      try {
        const [ownersData, transfersData] = await Promise.all([
          fetchOwners(),
          fetchTransfers(),
        ])

        setOwners(ownersData.result || [])
        setTransfers(transfersData.result || [])

        await fetchTotalSupply()
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [tokenAddress])

  const fetchOwners = async () => {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2.2/erc20/${tokenAddress}/owners?chain=sepolia&order=DESC`,
      {
        headers: {
          accept: 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
        },
      }
    )
    return response.json()
  }

  const fetchTransfers = async () => {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2.2/erc20/${tokenAddress}/transfers?chain=sepolia&order=DESC`,
      {
        headers: {
          accept: 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
        },
      }
    )
    return response.json()
  }

  const fetchTotalSupply = async () => {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    const contract = new ethers.Contract(tokenAddress, tokenAbi, provider)
    const totalSupplyResponse = await contract.totalSupply()
    const totalSupplyFormatted = parseInt(ethers.formatUnits(totalSupplyResponse, 'ether')) - 200000
    setTotalSupply(totalSupplyFormatted.toString())
    setRemainingTokens((maxSupply - totalSupplyFormatted).toString())
  }

  const fundingGoal = .1
  const maxSupply = 800000

  const fundingRaisedPercentage = (fundingRaised / fundingGoal) * 100
  const totalSupplyPercentage = ((parseFloat(totalSupply) - 200000) / (maxSupply - 200000)) * 100

  const getCost = async () => {
    if (!purchaseAmount) return

    try {
      const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
      const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '', abi, provider)
      const costInWei = await contract.calculateCost(totalSupply, purchaseAmount)
      setCost(ethers.formatUnits(costInWei, 'ether'))
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error calculating cost:', error)
    }
  }

  const handlePurchase = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '', abi, signer)

      const transaction = await contract.buyMemeToken(tokenAddress, purchaseAmount, {
        value: ethers.parseUnits(cost, 'ether'),
      })
      const receipt = await transaction.wait()

      alert(`Transaction successful! Hash: ${receipt.hash}`)
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error during purchase:', error)
    }
  }

  return (
    <div className="container mx-auto p-6 bg-[#121212]">

      <button 
        onClick={() => router.push('/')} 
        className="mb-8 text-white hover:text-orange-500 transition-all duration-300"
      >
        ← Back Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Token Detail for {tokenDetails.name}</h2>
          <Image 
            src={coinImage} 
            alt={tokenDetails.name} 
            width={250} 
            height={250} 
            className="rounded-lg"
          />
          <p><strong>Creator Address:</strong> {tokenDetails.creatorAddress}</p>
          <p><strong>Token Address:</strong> {tokenAddress}</p>
          <p><strong>Funding Raised:</strong> {tokenDetails.fundingRaised}</p>
          <p><strong>Token Symbol:</strong> {tokenDetails.symbol}</p>
          <p><strong>Description:</strong> {tokenDetails.description}</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bonding Curve Progress</h3>
            <p>{fundingRaised} / {fundingGoal} RBTC</p>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${fundingRaisedPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              When the market cap reaches {fundingGoal} ETH, all the liquidity from the bonding curve 
              will be deposited into Uniswap, and the LP tokens will be burned. 
              Progression increases as the price goes up.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Remaining Tokens Available for Sale</h3>
            <p>{remainingTokens} / 800,000</p>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full" 
                style={{ width: `${totalSupplyPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Buy Tokens</h3>
            <input
              type="number"
              placeholder="Enter amount of tokens to buy"
              value={purchaseAmount}
              onChange={(e) => setPurchaseAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            <button 
              onClick={getCost} 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h4 className="text-xl font-bold mb-4">Confirm Purchase</h4>
            <p className="mb-4">Cost of {purchaseAmount} tokens: {cost} ETH</p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={handlePurchase} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Confirm
              </button>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4">Owners</h3>
          {loading ? (
            <p>Loading owners...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Owner Address</th>
                    <th className="px-4 py-2 text-left">Percentage of Total Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {owners.map((owner: any, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-2">{owner.owner_address}</td>
                      <td className="px-4 py-2">{owner.percentage_relative_to_total_supply}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Transfers</h3>
          {loading ? (
            <p>Loading transfers...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">From Address</th>
                    <th className="px-4 py-2 text-left">To Address</th>
                    <th className="px-4 py-2 text-left">Value (ETH)</th>
                    <th className="px-4 py-2 text-left">Transaction Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers.map((transfer: any, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-2">{transfer.from_address}</td>
                      <td className="px-4 py-2">{transfer.to_address}</td>
                      <td className="px-4 py-2">{transfer.value_decimal}</td>
                      <td className="px-4 py-2">
                        <a 
                          href={`https://sepolia.etherscan.io/tx/${transfer.transaction_hash}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {transfer.transaction_hash}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TokenDetail