import React from "react";

export default function HowItWorksModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white rounded-lg w-11/12 max-w-md p-6 space-y-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-green-400">Root Fun</h2>
          <button
            onClick={toggleModal}
            className="text-white text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-400">Fair Launch</h3>
          <ul className="space-y-2 mt-2">
            <li>✔️ No pre-sale, no insiders, max 1B supply</li>
            <li>✔️ Ownership renounced, immutable</li>
            <li>✔️ Fully audited smart contracts</li>
            <li>✔️ Buy and sell at any time</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-400">Wen Moon?</h3>
          <p className="mt-2">
            💪 Once market cap reaches <strong>432 SOL (~$68.7K)</strong> all
            remaining tokens and liquidity migrate to Meteora or Raydium
          </p>
          <p className="mt-2">🪙 Launch, Lock & Earn</p>
          <p className="mt-2">🔒 All liquidity is locked forever</p>
          <p className="mt-2">
            🚀 Free Enhanced Token Info gives all Root Fun tokens the best
            chance to trend on DEX Screener!
          </p>
        </div>

        <div className="text-sm mt-4">
          <p className="text-gray-400">
            Disclaimer: Tokens launched on this platform are not endorsed by
            Root Fun. Root Fun is not an investment platform; your tokens could
            lose significant value at any time.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Explore Root Fun
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Launch your token
          </button>
        </div>
      </div>
    </div>
  );
}
