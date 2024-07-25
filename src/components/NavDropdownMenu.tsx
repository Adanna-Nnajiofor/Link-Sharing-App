import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isVisible, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-72 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
      <ul className="py-2">
        <li>
          <Link href="/login" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Login
            </a>
          </Link>
        </li>
        <li>
          <Link href="/register" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Register
            </a>
          </Link>
        </li>
        <li>
          <Link href="/empty" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Empty
            </a>
          </Link>
        </li>
        <li>
          <Link href="/add" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Add
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Profile
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile-preview" legacyBehavior>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Profile Preview
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
