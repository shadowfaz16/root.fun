import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Providers } from "@/providers";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Root Fun",
  description: "Root Fun - Pump Up Your Rootstock Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}
        >
          <DynamicContextProvider
            settings={{
              environmentId: "281a8b75-b8dd-4d3e-836c-d2603e028519",
              walletConnectors: [EthereumWalletConnectors],
            }}
          >
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1">{children}</main>
              </div>
            </div>
          </DynamicContextProvider>
        </body>
      </Providers>
    </html>
  );
}
