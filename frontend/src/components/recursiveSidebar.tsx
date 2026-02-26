"use client";
import SidebarHeader from "@/components/sidebar-header";
import { folders } from "@/constants";
import { ChevronRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Folder = {
  name: string;
  image?: string;
  folders?: Folder[];
};

const RecursiveSidebar = () => {

  return (
    <div className="w-full bg-white h-screen border-r border-gray-100 shadow-sm overflow-y-auto">
      <SidebarHeader />

      <ul className="flex flex-col">
        {folders.map((folder, idx) => (
          <FolderItem key={idx} folder={folder} />
        ))}
      </ul>
    </div>
  );
};

function FolderItem({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);
  //   const hasChildren = folder.folders && folder.folders.length > 0;

  return (
    <li className="list-none w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between py-3 px-4 cursor-pointer transition-colors
          border-b border-gray-200
          ${isOpen ? "bg-[#eaf7f7]" : "hover:bg-gray-50"}
        `}
      >
        <div className="flex items-center gap-3">
          {/* Circular Image Container */}
          <div className="w-10 h-10 min-w-[40px] rounded-full border border-gray-200 overflow-hidden flex items-center justify-center bg-white">
            <img
              src={folder.image || "https://placehold.co/40x40/png"}
              alt={folder.name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Label text */}
          <span
            className={`text-[15px] font-medium truncate ${isOpen ? "text-[#008080]" : "text-slate-700"}`}
          >
            {folder.name}
          </span>
        </div>

        {/* Chevron indicators */}

        {folder?.folders && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight
              size={18}
              className={`text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Recursive children with the "Stepped" Borderline */}
      {isOpen && (
        <ul
          className={`
           /* This creates the vertical line indentation effect */
           ml-[32px] border-l border-gray-100
        `}
        >
          {folder.folders?.map((subFolder, idx) => (
            <FolderItem key={idx} folder={subFolder} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default RecursiveSidebar;
