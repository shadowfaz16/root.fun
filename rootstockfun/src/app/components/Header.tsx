"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import CreateTokenModal from "./modals/CreateTokenModal";
import HowItWorksModal from "./modals/HowItWorks";
import { GateFiDisplayModeEnum, GateFiSDK } from "@gatefi/js-sdk";

export default function Header() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("recent");
  const [isCreateTokenModalOpen, setIsCreateTokenModalOpen] = useState(false);
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);
  const [overlayInstance, setOverlayInstance] = useState<GateFiSDK | null>(
    null
  );

  useEffect(() => {
    const instance = new GateFiSDK({
      merchantId: "be07174d-8428-4227-be47-52391c7eafc1",
      displayMode: "overlay" as GateFiDisplayModeEnum,
      nodeSelector: "#overlay-button",
      walletAddress: address,
    });
    setOverlayInstance(instance);
    instance.hide(); // Uncomment if you need to initially hide the overlay
  }, [address]);
  const openOverlay = () => {
    overlayInstance?.show();
  };

  return (
    <header className="flex justify-between items-center p-6 bg-[#121212]">
      <div className="flex gap-6">
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
        <button id="overlay-button" className="text-lg text-aqua" onClick={openOverlay}>Get funds</button>
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
