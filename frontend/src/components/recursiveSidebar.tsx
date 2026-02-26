"use client";
import SidebarHeader from "@/components/sidebar-header";
import { ChevronRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Folder = {
  name: string;
  image?: string;
  folders?: Folder[];
};

const RecursiveSidebar = () => {
  let folders = [
    {
      name: "Medicine",
      image: "/product1.avif",
      folders: [
        {
          name: "Anesthetics",
          image: "/promo-img1.avif",
          folders: [
            {
              name: "muscle Relaxants",

              image: "/footer-logo.avif",
              folders: [
                {
                  name: "hola",

                  image: "/promo-img1.avif",
                },
                {
                  name: "inside",

                  image: "/footer-logo.avif",
                },
              ],
            },
            { name: "Post Operative" },
          ],
        },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },

    {
      name: "HealthCare",

      image: "/footer1.avif",
      folders: [
        { name: "Anesthetics" },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },

    {
      name: "PharmaCare",

      image: "/footer2.avif",
      folders: [
        { name: "Anesthetics" },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },

    {
      name: "PharmaCare",

      image: "/promo-img1.avif",
      folders: [
        { name: "Anesthetics" },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },

    {
      name: "PharmaCare",

      image: "/hero1.avif",
      folders: [
        { name: "Anesthetics" },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },

    {
      name: "PharmaCare",

      image: "/product1.avif",
      folders: [
        { name: "Anesthetics" },
        { name: "Antimicrobial" },
        { name: "Chemotherapi" },
      ],
    },
  ];



  return (
    <div className="w-full bg-white h-screen border-r border-gray-100 shadow-sm overflow-y-auto">
      <SidebarHeader/>

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
// "use client";
// import { ChevronRight } from "lucide-react";
// import React, { useState } from "react";

// type Folder = {
//   name: string;
//   folders?: Folder[];
// };

// const RecursiveSidebar = () => {
//   let folders = [
//     {
//       name: "Medicine",
//       folders: [
//         {
//           name: "Anesthetics",
//           folders: [{ name: "muscle Relaxants" }, { name: "Post Operative" }],
//         },
//         { name: "Antimicrobial" },
//         { name: "Chemotherapi" },
//       ],
//     },

//     {
//       name: "HealthCare",
//       folders: [
//         { name: "Anesthetics" },
//         { name: "Antimicrobial" },
//         { name: "Chemotherapi" },
//       ],
//     },
//   ];

//   return (
//     <div className="text-black h-[600px] border-1 w-[260px]">
//       <ul>
//         <li className="my-1.5">
//           <span>home</span>
//         </li>
//       </ul>
//       <ul className="pl-6">
//         {folders.map((folder, idx) => (
//             <div className="border-b">
//           <Folder folder={folder} key={idx} />
// </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecursiveSidebar;

// function Folder({ folder }: { folder: Folder }) {
//   let [isOpen, setIsOpen] = useState(false);
//   return (
//     <li className="my-1.5">
//       <span className="flex items-center gap-2">
//         <div className="flex items-center justify-between p-3 border-b border-gray-200 cursor-pointer">
//           <div className=" rounded-full border border-gray-200 overflow-hidden flex items-center justify-center bg-white min-w-9.5 min-h-9. max-w-9.5 max-h-9.5 ">
//             <img
//               src="/promo-img1.avif"
//               alt="Anesthetics"
//               className="w-4/5 h-4/5 object-contain"
//             />
//           </div>
//           <p className="text-lg font-medium text-slate-800 truncate">
//             {folder.name}
//           </p>
//         </div>

//         {folder?.folders && (
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <ChevronRight
//               size={18}
//               className={`text-gray-500 ${isOpen ? "rotate-90" : ""}`}
//             />
//           </button>
//         )}
//       </span>

//       {isOpen && (
//         <ul className="pl-6">
//           {folder.folders?.map((folder) => (
//             <Folder folder={folder} key={folder.name} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }
