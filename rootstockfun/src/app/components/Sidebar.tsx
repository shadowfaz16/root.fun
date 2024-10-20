import React from "react";
import { FaHome, FaChartLine, FaExchangeAlt, FaCog } from "react-icons/fa";
import Link from "next/link";

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
    <aside className="w-56 bg-[#121212] flex flex-col items-start py-8 px-4 pt-8">
      {/* <Image src={logo} alt="Pump" width={100} height={100} /> */}
      <div className="flex flex-col items-start gap-1">
        <p className="text-black text-3xl font-semibold bg-rosa p-1">
          Pump
        </p>
        <p className="text-black text-3xl font-semibold bg-naranja p-1">
          Together
        </p>
      </div>
      <nav className="flex flex-col gap-4 mt-12">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            href={item.name === "Home" ? "/" : item.name === "Stats" ? "/stats" : item.name === "Exchange" ? "/exchange" : "/settings"}
            className={`flex items-center gap-4 text-gray-400 text-xl cursor-pointer hover:text-black transition duration-300 rounded-md p-4 w-52 md:bg-transparent ${
              index === 0
                ? "hover:bg-morado"
                : index === 1
                ? "hover:bg-verdeFosfo"
                : index === 2
                ? "hover:bg-naranja"
                : index === 3
                ? "hover:bg-aqua"
                : "hover:bg-rosa"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="hidden md:inline text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
