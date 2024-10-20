"use client";
import { useState } from "react";
import { GateFiDisplayModeEnum, GateFiSDK } from "@gatefi/js-sdk";
import CreateTokenModal from "./components/modals/CreateTokenModal";
import { useAccount, useReadContract, UseReadContractReturnType } from "wagmi";
import abi from "@/factoryabi.json";

import Image from "next/image";
import coin from "@/assets/ROOT-FOR-YOUR-COIN-GIF.gif";
import { FaGlobe, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import coinGif from "@/assets/rootstock-coin.gif";

interface Token {
  creatorAddress: string;
  description: string;
  fundingRaised: bigint;
  name: string;
  symbol: string;
  tokenAddress: string;
  tokenImageUrl: string;
}

export default function Homepage() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("recent");
  const [isCreateTokenModalOpen, setIsCreateTokenModalOpen] = useState(false);
  const result: UseReadContractReturnType<Token[]> = useReadContract({
    abi,
    address: "0xca612d23a9c3657c5f86bdee7b6caae81d8628a4",
    functionName: "getAllMemeTokens",
    account: address,
    chainId: 31,
  });

  // console.log("isLoading, ", result.isLoading);
  console.log("getAllMemeTokens, ", result.data);
  // console.log("connected address, ", address);
  // console.log("error, ", result.error);
  // console.log("isSuccess, ", result.isSuccess);

  // const overlayInstance = new GateFiSDK({
  //   merchantId: "be07174d-8428-4227-be47-52391c7eafc1",
  //   displayMode: "overlay" as GateFiDisplayModeEnum,
  //   nodeSelector: "#overlay-button"
  // })

  const recentBuys = [
    {
      icon: "🚀",
      name: "RocketToken",
      price: "$0.0034",
      timestamp: "2 mins ago",
    },
    { icon: "🌙", name: "MoonCoin", price: "$1.23", timestamp: "5 mins ago" },
    {
      icon: "💎",
      name: "DiamondHands",
      price: "$0.567",
      timestamp: "10 mins ago",
    },
    { icon: "🦄", name: "UniSwap", price: "$5.67", timestamp: "15 mins ago" },
  ];

  const hotTokens = [
    {
      name: "EthereumMax",
      icon: "📈",
      stats: "+234% 24h",
      kyc: true,
      progress: 75,
    },
    {
      name: "BitMoon",
      icon: "🌕",
      stats: "+120% 24h",
      kyc: false,
      progress: 60,
    },
    {
      name: "DogeCoin",
      icon: "🐕",
      stats: "+45% 24h",
      kyc: true,
      progress: 90,
    },
    {
      name: "SafeMars",
      icon: "🔴",
      stats: "+80% 24h",
      kyc: false,
      progress: 40,
    },
    { name: "BNB", icon: "🟡", stats: "+10% 24h", kyc: true, progress: 95 },
    { name: "Cardano", icon: "🔷", stats: "+25% 24h", kyc: true, progress: 85 },
  ];

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === "recent" && (
            <section className="mb-8">
              <h2 className="text-3xl font-bold">New Launches</h2>
              <p className="text-white mb-6">
                Discover the next trending token, {" "}
                <span className="font-semibold">before everyone else!</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.data &&
                Array.isArray(result.data) &&
                result.data.length > 0 ? (
                  result.data.map((token: Token, index: number) => (
                    <div
                      key={index}
                      className="bg-[#252525] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 relative"
                    >
                      <div className="flex gap-4 items-center pb-4 border-b border-gray-700 mb-4">
                        <img
                          src={
                            token.tokenImageUrl && token.tokenImageUrl !== "" && !token.tokenImageUrl.includes("ipfs://") && !token.tokenImageUrl.includes("google")
                              ? token.tokenImageUrl
                              : coinGif.src
                          }
                          alt="Coin"
                          className="w-24 h-24 rounded-lg"
                        />
                        <div className="">
                          <div className="text-xl font-semibold mb-1">
                            <span className="text-gray-400 mr-2 uppercase text-lg">
                              ${token.symbol}
                            </span>
                            {token.name}
                          </div>
                          <p className="text-gray-400 text-sm">
                            {token.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                      <p className="text-gray-400 text-sm">
                        created by: {token.creatorAddress.slice(0, 4)}...
                        {token.creatorAddress.slice(-4)}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">
                        funding raised:{" "}
                        {token.fundingRaised > 0
                          ? (
                              Number(token.fundingRaised) / 1000000000000000000
                            ).toFixed(2)
                          : "0"}{" "}
                        RBTC
                      </p>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center justify-center gap-2">
                        <FaGlobe />
                        <FaTwitter />
                        <FaTelegramPlane />
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No tokens found</div>
                )}
              </div>
            </section>
          )}
          {activeTab === "hot" && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Hot Tokens</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotTokens.map((token, index) => (
                  <div
                    key={index}
                    className="bg-[#252525] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-4xl">{token.icon}</div>
                      {token.kyc && (
                        <div className="bg-green-500 text-xs font-bold px-2 py-1 rounded-full">
                          KYC
                        </div>
                      )}
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {token.name}
                    </div>
                    <div className="text-green-500 font-bold mb-4">
                      {token.stats}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-orange-500 h-2.5 rounded-full"
                        style={{ width: `${token.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Image src={coin} alt="Coin" width={500} className="w-96" /> */}
            </section>
          )}
        </main>
      </div>
      <CreateTokenModal
        isOpen={isCreateTokenModalOpen}
        onClose={() => setIsCreateTokenModalOpen(false)}
        onSubmit={() => {}}
      />
    </div>
  );
}
