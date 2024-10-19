import React from "react";

interface SidebarItem {
  icon: string;
  name: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: "🏠", name: "Home" },
  { icon: "📊", name: "Stats" },
  { icon: "💱", name: "Exchange" },
  { icon: "⚙️", name: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-48 bg-[#121212] flex flex-col items-start py-8 px-6 pt-32">
      <nav className="flex flex-col gap-8">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-gray-400 text-xl cursor-pointer hover:text-yellow-400 transition duration-300"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="hidden md:inline text-sm">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
