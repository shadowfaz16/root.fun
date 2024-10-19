import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component

export const meta: MetaFunction = () => {
  return [
    { title: "Root Fun - Pump Up Your Remix Experience" },
    {
      name: "description",
      content: "Welcome to Root Fun - Your Remix Adventure Starts Here!",
    },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState("recent");

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
      <Sidebar /> {/* Use the Sidebar component */}
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-6 bg-[#121212]">
          <div className="flex gap-6">
            <button
              className={`text-lg font-semibold ${
                activeTab === "recent" ? "text-yellow-500" : "text-gray-400"
              } hover:text-yellow-400`}
              onClick={() => setActiveTab("recent")}
            >
              Recent Buys
            </button>
            <button
              className={`text-lg font-semibold ${
                activeTab === "hot" ? "text-yellow-500" : "text-gray-400"
              } hover:text-yellow-400`}
              onClick={() => setActiveTab("hot")}
            >
              Hot Tokens
            </button>
            <button
              className={`text-lg font-semibold ${
                activeTab === "how-it-works"
                  ? "text-yellow-500"
                  : "text-gray-400"
              } hover:text-yellow-400`}
              onClick={() => setActiveTab("how-it-works")}
            >
              How it works
            </button>
            <Link
              to="https://twitter.com/rootfun_io"
              target="_blank"
              className={`text-lg font-semibold ${
                activeTab === "twitter" ? "text-yellow-500" : "text-gray-400"
              } hover:text-yellow-400`}
            >
              Twitter
            </Link>
            <Link
              to="https://t.me/rootfun_io"
              target="_blank"
              className={`text-lg font-semibold ${
                activeTab === "telegram" ? "text-yellow-500" : "text-gray-400"
              } hover:text-yellow-400`}
            >
              Telegram
            </Link>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-bold transition duration-300">
            Connect Wallet
          </button>
        </header>
        <main className="flex-1 p-8 overflow-auto">
          {activeTab === "recent" && (
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Recent Buys</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentBuys.map((buy, index) => (
                  <div
                    key={index}
                    className="bg-[#252525] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="text-4xl mb-4">{buy.icon}</div>
                    <div className="text-xl font-semibold mb-2">{buy.name}</div>
                    <div className="text-yellow-500 font-bold mb-2">
                      {buy.price}
                    </div>
                    <div className="text-gray-400 text-sm">{buy.timestamp}</div>
                  </div>
                ))}
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
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{ width: `${token.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
