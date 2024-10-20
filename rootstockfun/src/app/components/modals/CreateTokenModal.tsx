import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import abi from "@/factoryabi.json";
import { generateLink } from "@/app/api/walruslinks/route";
import { toast } from "sonner";
import { getFillerItems } from "@/app/api/walruslinks/route";

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
  description?: string;
  imageUrl?: string;
}

export default function CreateTokenModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateTokenModalProps) {
  const [tokenData, setTokenData] = useState<TokenData>({
    name: "",
    symbol: "",
    initialSupply: "",
    description: "",
    website: "",
    twitter: "",
    telegram: "",
    imageUrl: "",
  });
  const [step, setStep] = useState(1);
  const { writeContract, data, isError, error, isPending } = useWriteContract({
    mutation: {
      onSuccess: () => {
        toast.success("Token created successfully!");
      },
      onError: (error) => {
        toast.error(`Error creating token: ${error.message}`);
      },
    },
  });

  const createToken = () => {
    writeContract({
      abi,
      address: "0xca612d23a9c3657c5f86bdee7b6caae81d8628a4",
      functionName: "createMemeToken",
      args: [
        tokenData.name,
        tokenData.symbol,
        tokenData.imageUrl,
        tokenData.description,
      ],
      value: BigInt(100000000000000),
    });
  };

  const handleGenerateLink = async () => {
    try {
      const linkData = await generateLink({
        name: tokenData.name,
        symbol: tokenData.symbol,
        imageUrl: tokenData.imageUrl!,
        description: tokenData.description!,
      });
      console.log("Generated link data:", linkData);
      toast.success("Link generated successfully!");
    } catch (error) {
      console.error("Error generating link:", error);
      toast.error("Error generating link!");
    }
  };

  const getFillerItemsCall = async () => {
    const fillerItems = await getFillerItems();
    console.log("fillerItems: ", fillerItems);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTokenData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createToken();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
    >
      <div className="bg-[#252525] rounded-lg p-8 w-full max-w-xl"
      onClick={(e) => e.stopPropagation()}
      >
        <button onClick={getFillerItemsCall}>Get Filler Items</button>
        <h3 className="text-2xl font-bold text-white mb-6">
          Create Your Meme Token
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
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
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  value={tokenData.imageUrl}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
                  required
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={tokenData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-[#3a3a3a] border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3"
                  required
                  placeholder="Enter description"
                ></textarea>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Website URL (optional)
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
                  Twitter URL (optional)
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
                  Telegram URL (optional)
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
              <div className="px-4">
                <div className="mt-4 p-4 bg-[#2a2a2a] rounded-md border border-orange-500">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-orange-500">Important:</span> The information provided here cannot be changed once the token has been created. Please ensure all details are correct before proceeding.
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={step === 1 ? onClose : () => setStep(1)}
            >
              {step === 1 ? "Cancel" : "Back"}
            </button>
            {step === 1 && (
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3  text-black text-sm font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            )}
            {step === 2 && (
              <button
                type="submit"
                className="inline-flex justify-center items-center rounded-md border border-transparent bg-orange-500 px-6 py-3  text-black text-sm font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Create Token"
                )}
              </button>
            )}
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-rosa px-6 py-3  text-black text-sm font-semibold hover:bg-rosa focus:outline-none focus:ring-2 focus:ring-rosa"
              onClick={handleGenerateLink}
            >
              Generate Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
