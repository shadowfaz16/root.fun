'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm2hp6gly018vjk9inx1mtsod"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}