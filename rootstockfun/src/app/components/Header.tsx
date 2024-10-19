"use client";
import Link from "next/link";
import { useState } from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import CreateTokenModal from "./modals/CreateTokenModal";

export default function Header() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("recent");
  const [isCreateTokenModalOpen, setIsCreateTokenModalOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-[#121212]">
      <div className="flex gap-6">
        {/* <button id="overlay-button">Open GateFi</button> */}
            <button
              className={`text-lg ${
            activeTab === "recent" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => setActiveTab("recent")}
        >
          Recent Buys
        </button>
        <button
          className={`text-lg ${
            activeTab === "hot" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => setActiveTab("hot")}
        >
          Hot Tokens
        </button>
        <button
          className={`text-lg ${
            activeTab === "how-it-works"
              ? "text-orange-500"
              : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => setActiveTab("how-it-works")}
        >
          How it works
        </button>
        <Link
          href="https://twitter.com/rootfun_io"
          target="_blank"
          className={`text-lg ${
            activeTab === "twitter" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
        >
          Twitter
        </Link>
        <Link
          href="https://t.me/rootfun_io"
          target="_blank"
          className={`text-lg ${
            activeTab === "telegram" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
        >
          Telegram
        </Link>
        <button onClick={() => setIsCreateTokenModalOpen(true)}>
          Create Token
        </button>
      </div>
      <DynamicWidget />
      {
        isCreateTokenModalOpen && (
          <CreateTokenModal
            isOpen={isCreateTokenModalOpen}
            onClose={() => setIsCreateTokenModalOpen(false)}
            onSubmit={() => {}}
          />
        )
      }

    </header>
  );
}
