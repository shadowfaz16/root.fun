"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";
import CreateTokenModal from "./modals/CreateTokenModal";
import HowItWorksModal from "./modals/HowItWorks";
import {usePrivy} from '@privy-io/react-auth';


export default function Header() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("recent");
  const [isCreateTokenModalOpen, setIsCreateTokenModalOpen] = useState(false);
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);  

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-[#121212] overflow-hidden">
       <div className="flex flex-col items-start gap-1 relative md:hidden">
        <p className="text-black font-semibold bg-rosa px-1 py-0.5">
          Pump
        </p>
        <p className="text-black font-semibold bg-naranja px-1 py-0.5">
          Together
        </p>
        <p className="absolute top-0 -right-3 text-[8px] text-white bg-black/70 border border-white rounded-full px-3 py-1 transform rotate-[20deg]">
          on Bitcoin
        </p>
      </div>
      <div className="gap-6 items-center hidden md:flex">
        <button
          className={`text-lg ${
            activeTab === "recent" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => setActiveTab("recent")}
        >
          Recent Buys
        </button>
        {/* <button
          className={`text-lg ${
            activeTab === "hot" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => setActiveTab("hot")}
        >
          Hot Tokens
        </button> */}
        <button
          className={`text-lg ${
            activeTab === "how-it-works" ? "text-orange-500" : "text-gray-400"
          } hover:text-orange-400`}
          onClick={() => {
            setIsHowItWorksModalOpen(true);
          }}
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
        <button
          onClick={() => setIsCreateTokenModalOpen(true)}
          className=" text-lg text-verdeFosfo hover:text-verdeFosfo"
        >
          Create Token
        </button>
      </div>
      <DynamicWidget />
      {isCreateTokenModalOpen && (
        <CreateTokenModal
          isOpen={isCreateTokenModalOpen}
          onClose={() => setIsCreateTokenModalOpen(false)}
          onSubmit={() => {}}
        />
      )}
      {isHowItWorksModalOpen && (
        <HowItWorksModal toggleModal={() => setIsHowItWorksModalOpen(false)} />
      )}
    </header>
  );
}
