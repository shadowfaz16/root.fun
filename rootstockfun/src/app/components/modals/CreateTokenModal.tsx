import React, { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import abi from "@/factoryabi.json";
import { toast } from "sonner";
import TokenInfoIframe from "../TokenInfoIframe";
import { generateTokenData } from "@/app/serverActions/tokenActions"; // Import the server-side function
import { pinata } from "@/utils/pinataConfig";

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
}: CreateTokenModalProps) {
  // const { address } = useAccount();
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
  const {
    writeContract,
    data: hash,
    isError,
    error,
    isPending,
  } = useWriteContract();
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [isGeneratingHTML, setIsGeneratingHTML] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [url, setUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target?.files?.[0]);
  };

  const handleSubmission = async () => {
    try {
      setIsUploading(true);
      const upload = await pinata.upload.file(selectedFile as any);
      console.log(upload);
      const ipfsUrl = await pinata.gateways.convert(upload.IpfsHash);
      setUrl(ipfsUrl);
      setTokenData((prev) => ({ ...prev, imageUrl: ipfsUrl }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  if (isError) {
    toast.error(`Error creating token: ${error?.message}`);
  }

  const createToken = async () => {
    setIsTransactionPending(true);
    const tx = writeContract(
      {
        abi,
        address: "0x53Fa9497537d29D6026C6e6CCD8c1684D9c3FC06",
        functionName: "createMemeToken",
        args: [
          tokenData.name,
          tokenData.symbol,
          tokenData.imageUrl,
          tokenData.description,
          0,
        ],
        value: BigInt(100000000000000),
      },
      {
        onError: (error) => {
          setIsTransactionPending(false);
          toast.error(`Error creating token: ${error.message}`);
        },
        onSuccess(data, variables, context) {
          console.log("data: ", data);
          console.log("variables: ", variables);
          console.log("context: ", context);
          toast.success("Data created successfully!!!!!");
          setIsTransactionPending(false);
        },
      }
    );
    if (hash) {
      console.log("tx: ", tx);
      console.log("data: ", hash);
      toast.success("Data created successfully!!!!!");
    }
  };

  const handleGenerateLink = async () => {
    setIsGeneratingHTML(true);
    toast.info("Generating with Phala!");
    try {
      const generatedData = await generateTokenData(tokenData);
      console.log("Generated token data:", generatedData);
      setHtmlContent(generatedData.walresp); // Assuming 'walresp' contains the HTML content
      toast.success("Link generated successfully!");
    } catch (error) {
      console.error("Error generating link:", error);
      toast.error("Error generating link!");
    } finally {
      setIsGeneratingHTML(false);
    }
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

  const { isLoading: isTransactionLoading } = useWaitForTransactionReceipt({
    hash,
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#252525] rounded-lg p-4 md:p-8 w-full max-w-xl overflow-y-scroll h-[90vh] md:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          Launch Your Meme Token
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                <label
                  htmlFor="symbol"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
              {/* <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
              </div> */}
                 <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
              <div>
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Choose image or gif
                </label>
                <div
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-[#3a3a3a] hover:bg-[#4a4a4a] transition-colors duration-300 cursor-pointer"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      changeHandler({
                        target: { files: e.dataTransfer.files },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                >
                  <div className="space-y-1 text-center">
                    {!selectedFile ? (
                      <>
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-sm text-gray-600">
                          <span className="text-orange-500 hover:text-orange-400 cursor-pointer">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-300">
                          {selectedFile.name}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(undefined);
                          }}
                          className="mt-2 text-sm text-orange-500 hover:text-orange-400"
                        >
                          Clear selection
                        </button>
                      </>
                    )}
                  </div>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="hidden"
                    onChange={changeHandler}
                  />
                </div>
                <button
                  onClick={handleSubmission}
                  disabled={isUploading}
                  className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  {isUploading ? "Uploading..." : "Submit"}
                </button>
                {url && <p> Uploaded image: {url}</p>}
                {url && <img src={url} alt="uploaded image" />}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                <label
                  htmlFor="telegram"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                    <span className="font-semibold text-orange-500">
                      Important:
                    </span>{" "}
                    The information provided here cannot be changed once the
                    token has been created. Please ensure all details are
                    correct before proceeding.
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
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
                {isPending || isTransactionPending || isTransactionLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
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
              {isGeneratingHTML ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate website"
              )}
            </button>
          </div>
        </form>
        {htmlContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden">
              <button
                onClick={() => setHtmlContent(null)}
                className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-full h-full">
                <TokenInfoIframe htmlContent={htmlContent} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
