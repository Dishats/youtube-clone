import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../../public/logo.png";
import profile from "../../public/profile.jpeg";
import Sidebar from "./Sidebar"; // Import Sidebar component
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for Sidebar

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center fixed top-0 w-full bg-white px-6 py-2 shadow-lg z-50">
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle Button */}
          <AiOutlineMenu
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)} // Toggle Sidebar
          />
          <img src={logo} alt="logo" className="w-28 cursor-pointer" />
        </div>
        <div className="hidden md:flex w-[50%] items-center">
          <div className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
          <IoMdMic
            size={"42px"}
            className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
        <div className="flex space-x-5 items-center">
          <RiVideoAddLine className="text-2xl" />
          <AiOutlineBell className="text-2xl" />
          <Avatar src={profile} size="32" round={true} />
        </div>
      </div>

      {/* Responsive Search Bar */}
      <div className="flex md:hidden justify-center mt-[60px] p-4">
        <div className="flex w-full items-center">
          <div className="flex-1 px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
          <IoMdMic
            size={"42px"}
            className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-white shadow-lg transform transition-transform duration-300">
          <Sidebar />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
          ></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
