import React, { useState } from 'react';

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tokenData: TokenData) => void;
}

interface TokenData {
  name: string;
  symbol: string;
  initialSupply: string;
  website?: string;
  twitter?: string;
  telegram?: string;
}

export default function CreateTokenModal({ isOpen, onClose, onSubmit }: CreateTokenModalProps) {
  const [tokenData, setTokenData] = useState<TokenData>({
    name: '',
    symbol: '',
    initialSupply: '',
    website: '',
    twitter: '',
    telegram: '',
  });
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTokenData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(tokenData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#252525] rounded-lg p-8 w-full max-w-xl">
        <h3 className="text-2xl font-bold text-white mb-6">Create Your Meme Token</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Token Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={tokenData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
              required
              placeholder="Enter token name"
            />
          </div>
          <div>
            <label htmlFor="symbol" className="block text-sm font-medium text-gray-300 mb-2">
              Token Symbol
            </label>
            <input
              type="text"
              name="symbol"
              id="symbol"
              value={tokenData.symbol}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
              required
              placeholder="Enter token symbol"
            />
          </div>
          <div>
            <label htmlFor="initialSupply" className="block text-sm font-medium text-gray-300 mb-2">
              Initial Supply
            </label>
            <input
              type="number"
              name="initialSupply"
              id="initialSupply"
              value={tokenData.initialSupply}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
              required
              placeholder="Enter initial supply"
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="text-orange-500 hover:text-orange-400 text-sm font-medium focus:outline-none"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>
          </div>
          {showAdvanced && (
            <div className="space-y-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  value={tokenData.website}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-300 mb-2">
                  Twitter URL
                </label>
                <input
                  type="url"
                  name="twitter"
                  id="twitter"
                  value={tokenData.twitter}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
                  placeholder="https://twitter.com/yourusername"
                />
              </div>
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-2">
                  Telegram URL
                </label>
                <input
                  type="url"
                  name="telegram"
                  id="telegram"
                  value={tokenData.telegram}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
                  placeholder="https://t.me/yourgroupname"
                />
              </div>
            </div>
          )}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Token
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
