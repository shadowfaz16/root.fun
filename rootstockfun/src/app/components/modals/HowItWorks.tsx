import React from "react";
import { FaRocket, FaLock, FaChartLine, FaExclamationTriangle } from "react-icons/fa";

export default function HowItWorksModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl w-full max-w-4xl p-8 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-verde via-verdeFosfo to-naranja"></div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-verde to-aqua">
            Root Fun: Revolutionizing Token Launches
          </h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[#252525] rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-bold text-verdeFosfo mb-4 flex items-center">
                <FaRocket className="mr-2" /> Fair Launch
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-verde mr-2">✔</span>
                  No pre-sale, no insiders, max 1B supply
                </li>
                <li className="flex items-center">
                  <span className="text-verde mr-2">✔</span>
                  Ownership renounced, immutable
                </li>
                <li className="flex items-center">
                  <span className="text-verde mr-2">✔</span>
                  Fully audited smart contracts
                </li>
                <li className="flex items-center">
                  <span className="text-verde mr-2">✔</span>
                  Buy and sell at any time
                </li>
              </ul>
            </div>

            <div className="bg-[#252525] rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-bold text-verdeFosfo mb-4 flex items-center">
                <FaChartLine className="mr-2" /> Wen Moon?
              </h3>
              <p className="mb-3">
                <span className="font-semibold text-verde">💪 Migration Trigger:</span> Once market cap reaches <strong className="text-naranja">432 SOL (~$68.7K)</strong>, all remaining tokens and liquidity migrate to Meteora or Raydium
              </p>
              <p className="mb-3">
                <span className="font-semibold text-verde">🪙 Strategy:</span> Launch, Lock & Earn
              </p>
              <p className="mb-3">
                <span className="font-semibold text-verde">🔒 Security:</span> All liquidity is locked forever
              </p>
              <p>
                <span className="font-semibold text-verde">🚀 Boost:</span> Free Enhanced Token Info gives all Root Fun tokens the best chance to trend on DEX Screener!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#252525] rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-bold text-verdeFosfo mb-4 flex items-center">
                <FaLock className="mr-2" /> Security & Transparency
              </h3>
              <p className="mb-3">
                Root Fun prioritizes the safety and fairness of all participants. Our platform ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Transparent token distribution</li>
                <li>Automated liquidity locking</li>
                <li>Real-time market cap tracking</li>
                <li>Community-driven governance</li>
              </ul>
            </div>

            <div className="bg-[#252525] rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-bold text-verdeFosfo mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2" /> Disclaimer
              </h3>
              <p className="text-gray-300 text-sm">
                Tokens launched on this platform are not endorsed by Root Fun. Root Fun is not an investment platform; your tokens could lose significant value at any time. Always conduct your own research and invest responsibly.
              </p>
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              <button className="bg-gradient-to-r from-verde to-aqua text-black px-6 py-3 rounded-full font-bold text-lg hover:from-verde hover:to-aqua transition-all duration-300 shadow-lg">
                Explore Root Fun
              </button>
              <button className="bg-gradient-to-r from-verdeFosfo to-naranja text-black px-6 py-3 rounded-full font-bold text-lg hover:from-verdeFosfo hover:to-naranja transition-all duration-300 shadow-lg">
                Launch Your Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
