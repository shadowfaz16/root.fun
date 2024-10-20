"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ethers } from "ethers";
import abi from "@/factoryabi.json";
import tokenAbi from "@/tokenabi.json";
import coinImage from "@/assets/rootstock-coin-2.gif";
import { usePathname } from "next/navigation";
import {
  useWriteContract,
  useAccount,
  useReadContract,
  useBalance,
} from "wagmi";
import { toast } from "sonner";
import { formatEther, parseEther, parseUnits } from "viem";
import { getBalance } from "@wagmi/core";
import { config } from "@/config";

const TokenDetail = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { address } = useAccount();
//   const factoryAddress = "0xca612d23a9c3657c5f86bdee7b6caae81d8628a4";
const factoryAddress = "0xc899967C168AcCF42d43660079d24E2718aCbbd1";
  const [tokenAddress, setTokenAddress] = useState<string | null>(
    pathname.split("/")[2]
  );
  const [tokenDetails, setTokenDetails] = useState({
    name: "Unknown",
    symbol: "Unknown",
    description: "No description available",
    tokenImageUrl: "https://via.placeholder.com/200",
    fundingRaised: "0 ETH",
    creatorAddress: "0x0000000000000000000000000000000000000000",
  });

  const [owners, setOwners] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [userBalance, setUserBalance] = useState("0");
  const [loading, setLoading] = useState(true);
  const [totalSupply, setTotalSupply] = useState("0");
  const [remainingTokens, setRemainingTokens] = useState("0");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [cost, setCost] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fundingRaised = parseFloat(
    tokenDetails.fundingRaised.replace(" ETH", "")
  );

  console.log("fundingRaised", fundingRaised);

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenAddress) return;

      try {
        // const [ownersData, transfersData] = await Promise.all([
        //   fetchOwners(),
        //   fetchTransfers(),
        // ]);

        // setOwners(ownersData.result || []);
        // setTransfers(transfersData.result || []);

        await fetchTotalSupply();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tokenAddress]);

  const fetchOwners = async () => {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2.2/erc20/${tokenAddress}/owners?chain=sepolia&order=DESC`,
      {
        headers: {
          accept: "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_X_API_KEY || "",
        },
      }
    );
    return response.json();
  };

  //   const fetchTransfers = async () => {
  //     const response = await fetch(
  //       `https://deep-index.moralis.io/api/v2.2/erc20/${tokenAddress}/transfers?chain=sepolia&order=DESC`,
  //       {
  //         headers: {
  //           accept: "application/json",
  //           "X-API-Key": process.env.NEXT_PUBLIC_X_API_KEY || "",
  //         },
  //       }
  //     );
  //     return response.json();
  //   };

  const fetchTotalSupply = async () => {
    if (!tokenAddress) return;
    if (!totalSupply) return;
    if (totalSupply) {
      const totalSupplyFormatted =
        parseInt(ethers.formatUnits(totalSupply, "ether")) - 200000;
      setTotalSupply(totalSupplyFormatted.toString());
      setRemainingTokens((maxSupply - totalSupplyFormatted).toString());
    }
  };

  const { data: costInWei } = useReadContract({
    address: factoryAddress,
    abi: abi,
    functionName: "calculateCost",
    args: [remainingTokens, purchaseAmount],
  });

  console.log("costInWei", costInWei);

  const fundingGoal = 0.1;
  const maxSupply = 800000;

  const fundingRaisedPercentage = (fundingRaised / fundingGoal) * 100;
  console.log("fundingRaisedPercentage", fundingRaisedPercentage);
  const totalSupplyPercentage =
    ((parseFloat(totalSupply) - 200000) / (maxSupply - 200000)) * 100;

  const getCost = async () => {
    if (!purchaseAmount || !tokenAddress) return;

    try {
      setCost(formatEther(costInWei as bigint));
      setIsModalOpen(true); // Open the confirmation modal after getting the cost
    } catch (error) {
      console.error("Error calculating cost:", error);
      toast.error("Error calculating cost. Please try again.");
    }
  };

  const { writeContract, isPending: isLoading } = useWriteContract({
    mutation: {
      onError: (error) => {
        toast.error(`Error during purchase: ${error.message}`);
        console.log("error!!!", error);
      },
      onSuccess: () => {
        toast.success("Purchase successful!");
        fetchTotalSupply(); // Refresh total supply after successful purchase
      },
    },
  });

  const handlePurchase = () => {
    if (!tokenAddress || !address) {
      toast.error("Please connect your wallet first.");
      console.log("no address");
      return;
    }
    if (!cost) {
      toast.error("Please calculate the cost first.");
      console.log("no cost");
      return;
    }
    if (!purchaseAmount) {
      toast.error("Please enter the amount of tokens to buy.");
      console.log("no purchase amount");
      return;
    }

    try {
      toast.info("Sending purchase transaction...");
      console.log("cost final", costInWei);
      console.log("purchaseAmount", parseEther(purchaseAmount));
      const tx = writeContract({
        abi: abi,
        address: factoryAddress,
        functionName: "buyMemeToken",
        args: [tokenAddress, purchaseAmount],
        value: parseEther(cost),
      });
      // Remove duplicate success messages
      toast.success("Purchase transaction sent!");
      // fetchTotalSupply is already called in the onSuccess callback
      console.log("tx", tx);
    } catch (error) {
      console.error("Error during purchase:", error);
      toast.error("Error during purchase. Please try again.");
    }
  };

  const { data: tokenName } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: tokenAbi,
    functionName: "name",
  });

  const { data: tokenSymbol } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: tokenAbi,
    functionName: "symbol",
  });

  const { data: tokenTotalSupply } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: tokenAbi,
    functionName: "totalSupply",
  });

  const { data: contractOwner } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: tokenAbi,
    functionName: "owner",
  });

  const balance = getBalance(config, {
    address: address as `0x${string}`,
    token: tokenAddress as `0x${string}`,
  });

  console.log("balanceeee", balance);

  console.log("tokenName", tokenName);
  console.log("tokenSymbol", tokenSymbol);
  console.log("tokenTotalSupply!!", tokenTotalSupply);
  console.log("contractOwner", contractOwner);
  console.log("costInWei", costInWei);
  console.log("purchaseAmount", purchaseAmount);
  console.log("remainingTokens", remainingTokens);

  return (
    <div className="container mx-auto p-6 bg-[#121212]">
      <button
        onClick={() => router.push("/")}
        className="mb-8 text-white hover:text-orange-500 transition-all duration-300"
      >
        ← Back Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Token Detail for {tokenName ? tokenName.toString() : "Unknown"}
          </h2>
          <Image
            src={coinImage}
            alt={tokenName ? tokenName.toString() : "Unknown"}
            width={250}
            height={250}
            className="rounded-lg"
          />
          <p>
            <strong>Creator Address:</strong>{" "}
            {contractOwner ? contractOwner.toString() : "Unknown"}
          </p>
          <p>
            <strong>Token Address:</strong> {tokenAddress}
          </p>
          <p>
            <strong>Funding Raised:</strong> {tokenDetails.fundingRaised}
          </p>
          <p>
            <strong>Token Symbol:</strong>{" "}
            {tokenSymbol ? tokenSymbol.toString() : "Unknown"}
          </p>
          <p>
            <strong>Description:</strong> {tokenDetails.description}
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bonding Curve Progress</h3>
            <p>
              {fundingRaised} / {fundingGoal} RBTC
            </p>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${fundingRaisedPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              When the market cap reaches {fundingGoal} ETH, all the liquidity
              from the bonding curve will be deposited into Uniswap, and the LP
              tokens will be burned. Progression increases as the price goes up.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Remaining Tokens Available for Sale
            </h3>
            <p>
              {Number(remainingTokens)} / {maxSupply}
            </p>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-aqua h-2.5 rounded-full"
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
              className="w-full px-3 py-2 border rounded-md bg-[#252525] focus:outline-none"
            />
            <button
              onClick={getCost}
              className="w-full bg-verdeFosfo text-black font-semibold px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#121212] p-8 rounded-lg max-w-md w-full">
            <h4 className="text-xl font-bold mb-4">Confirm Purchase</h4>
            <p className="mb-4">
              Cost of {purchaseAmount} tokens: {cost} ETH
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handlePurchase()}
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
                <thead className="bg-[#252525]">
                  <tr>
                    <th className="px-4 py-2 text-left">Owner Address</th>
                    <th className="px-4 py-2 text-left">
                      Percentage of Total Supply
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {owners.map((owner: any, index: number) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-transparent" : ""}
                    >
                      <td className="px-4 py-2">{owner.owner_address}</td>
                      <td className="px-4 py-2">
                        {owner.percentage_relative_to_total_supply}%
                      </td>
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
                <thead className="bg-[#252525]">
                  <tr>
                    <th className="px-4 py-2 text-left">From Address</th>
                    <th className="px-4 py-2 text-left">To Address</th>
                    <th className="px-4 py-2 text-left">Value (ETH)</th>
                    <th className="px-4 py-2 text-left">Transaction Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers.map((transfer: any, index: number) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-transparent" : ""}
                    >
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
  );
};

export default TokenDetail;
