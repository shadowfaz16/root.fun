import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Providers } from "@/providers";
import Providers2 from "@/providers2";
import { Toaster } from "sonner";
import { ThirdwebProvider } from "thirdweb/react";

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
  title: "Root 4 Fun",
  description: "Root 4 Fun - Pump Up Your Memecoin Experience on Rootstock",
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen bg-[#121212] max-w-screen overflow-x-hidden`}
        >
          <ThirdwebProvider>
            <div className="flex flex-1 h-full">
              <div className="hidden md:block h-full">
                <Sidebar />
              </div>
              <div className="flex flex-col flex-1 h-full">
                <Header />
                <main className="flex-1">{children}</main>
              </div>
            </div>
          </ThirdwebProvider>
        </body>
        <Toaster richColors />
      </Providers>
    </html>
  );
}
