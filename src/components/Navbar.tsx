"use client"; // Ensure this is a Client Component

import Link from "next/link";
import { FaLink, FaUser, FaEye } from "react-icons/fa"; // Import eye icon
import { usePathname } from "next/navigation"; // Updated import
import { useState } from "react"; // Import useState for managing button state

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Updated hook
  const [isPreviewActive, setIsPreviewActive] = useState(false); // State to manage button active state

  // Function to toggle button active state (e.g., could be based on certain conditions or user interactions)
  const togglePreviewActive = () => {
    setIsPreviewActive(!isPreviewActive);
  };

  return (
    <div className="navbar flex p-6 gap-2">
      <div className="w-full navbar-main flex flex-row items-center justify-between p-4 rounded-lg border border-white bg-white text-black gap-2">
        {/* Display logo and text on larger screens */}
        <div className="navbar-main-image flex items-center">
          <img
            src="/solar_link-circle-bold@2x.png"
            alt="Logo"
            className="w-[32px]"
          />
          <img
            src="/devlinks.png"
            alt="Text"
            className="w-[108px] h-[21px] ml-[20px] hidden md:flex"
          />
        </div>
        {/* Display icons on mobile screens */}
        <div className="navbar-main-links gap-4 items-center justify-center hidden md:flex">
          <Link
            href="/links"
            className={`navbar-link flex items-center justify-center  gap-2 p-3 rounded-lg ${
              pathname === "/links"
                ? "bg-[#EFEBFF] text-[#633CFF]"
                : "bg-white text-black"
            }`}
          >
            <FaLink />
            <p
              className={`text-base font-semibold ${
                pathname === "/links" ? "text-[#633CFF]" : ""
              }`}
            >
              Links
            </p>
          </Link>
          <Link
            href="/profile"
            className={`navbar-link flex items-center gap-2 p-3 rounded-lg ${
              pathname === "/profile"
                ? "bg-[#EFEBFF] text-[#633CFF]"
                : "bg-white text-[#737373]"
            }`}
          >
            <FaUser />
            <p
              className={`text-base font-semibold ${
                pathname === "/profile" ? "text-[#633CFF]" : ""
              }`}
            >
              Profile Details
            </p>
          </Link>
        </div>

        {/* Display only icons and mobile version of the button */}
        <div className="navbar-main-links flex gap-4 items-center md:hidden">
          <Link
            href="/links"
            className={`flex items-center gap-2 p-2 rounded-lg ${
              pathname === "/links"
                ? "bg-[#EFEBFF] text-[#633CFF]"
                : "bg-white text-black"
            }`}
          >
            <FaLink />
          </Link>
          <Link
            href="/profile"
            className={`flex items-center gap-2 p-2 rounded-lg ${
              pathname === "/profile"
                ? "bg-[#EFEBFF] text-[#633CFF]"
                : "bg-white text-[#737373]"
            }`}
          >
            <FaUser />
          </Link>
        </div>
        <div>
          <button
            onClick={togglePreviewActive} // Toggle active state on button click
            className={`preview-button hidden md:flex items-center justify-center gap-2 p-3 rounded-lg border border-[#633CFF] ${
              isPreviewActive
                ? "bg-[#633CFF] text-white"
                : "bg-white text-[#633CFF]"
            } hover:bg-[#F4F4F4]`}
          >
            Preview
          </button>
          <button
            onClick={togglePreviewActive} // Toggle active state on button click
            className={`flex items-center justify-center p-2 rounded-lg border border-[#633CFF] md:hidden ${
              isPreviewActive
                ? "bg-[#633CFF] text-white"
                : "bg-white text-[#633CFF]"
            } hover:bg-[#F4F4F4]`}
          >
            <FaEye /> {/* Eye icon for mobile screens */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
