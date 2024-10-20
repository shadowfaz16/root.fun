import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, rootstockTestnet, rootstock } from 'wagmi/chains'

const virtualRootstockTestnet = {
  ...rootstockTestnet,
  id: 31, 
  rpcUrls: {
    default: {
      http: ['https://virtual.rsk-testnet.rpc.tenderly.co/3bafd94d-5446-4324-b84e-e5731cc8f10a'],
    },
    public: {
      http: ['https://virtual.rsk-testnet.rpc.tenderly.co/3bafd94d-5446-4324-b84e-e5731cc8f10a'],
    },
  },
}

export const config = createConfig({
  chains: [mainnet, sepolia, rootstockTestnet, rootstock, virtualRootstockTestnet],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [rootstockTestnet.id]: http(),
    [rootstock.id]: http(),
    [virtualRootstockTestnet.id]: http(),
  },
})