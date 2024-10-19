import React from "react";
import { FaHome, FaChartLine, FaExchangeAlt, FaCog } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.gif";

interface SidebarItem {
  icon: React.ReactNode;
  name: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: <FaHome size={20} />, name: "Home" },
  { icon: <FaChartLine size={20} />, name: "Stats" },
  { icon: <FaExchangeAlt size={20} />, name: "Exchange" },
  { icon: <FaCog size={20} />, name: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-48 bg-[#121212] flex flex-col items-start py-8 px-4 pt-8">
      {/* <Image src={logo} alt="Pump" width={100} height={100} /> */}
      <div className="flex flex-col items-start gap-1">
        <p className="text-black text-3xl font-semibold bg-pink-400 p-1">
          Pump
        </p>
        <p className="text-black text-3xl font-semibold bg-orange-400 p-1">
          Together
        </p>
      </div>
      <nav className="flex flex-col gap-4 mt-12">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 text-gray-400 text-xl cursor-pointer hover:text-yellow-400 transition duration-300 rounded-md p-4 w-48 md:bg-transparent ${
              index === 0
                ? "hover:bg-red-800"
                : index === 1
                ? "hover:bg-blue-800"
                : index === 2
                ? "hover:bg-green-800"
                : "hover:bg-purple-800"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="hidden md:inline text-sm">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
