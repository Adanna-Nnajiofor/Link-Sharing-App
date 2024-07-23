import React, { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaDev,
  FaCodepen,
  FaFreeCodeCamp,
  FaGitlab,
  FaStackOverflow,
  FaLink,
} from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

export interface Option {
  value: string;
  label: string;
  icon: JSX.Element;
}

const options: Option[] = [
  { value: "github", label: "GitHub", icon: <FaGithub /> },
  { value: "frontend-mentor", label: "Frontend Mentor", icon: <FaGithub /> },
  { value: "twitter", label: "Twitter", icon: <FaTwitter /> },
  { value: "linkedin", label: "LinkedIn", icon: <FaLinkedin /> },
  { value: "youtube", label: "YouTube", icon: <FaYoutube /> },
  { value: "facebook", label: "Facebook", icon: <FaFacebook /> },
  { value: "twitch", label: "Twitch", icon: <FaTwitch /> },
  { value: "dev", label: "Dev.to", icon: <FaDev /> },
  { value: "codepen", label: "CodePen", icon: <FaCodepen /> },
  { value: "freecodecamp", label: "FreeCodeCamp", icon: <FaFreeCodeCamp /> },
  { value: "gitlab", label: "GitLab", icon: <FaGitlab /> },
  { value: "hashnode", label: "Hashnode", icon: <FaHashnode /> },
  {
    value: "stackoverflow",
    label: "Stack Overflow",
    icon: <FaStackOverflow />,
  },
];

interface CustomDropdownProps {
  onSelect: (option: Option | null) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((option) => option.value === e.target.value);
    setSelectedOption(selected || null);
    onSelect(selected || null);
  };

  return (
    <div className="relative">
      <select
        value={selectedOption?.value || ""}
        onChange={handleChange}
        className="w-full p-3 pl-10 rounded-lg border border-[#D9D9D9] bg-white text-[16px] font-[400] leading-[24px] text-[#333333] appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-[#333333]">
        {selectedOption?.icon}
      </div>
    </div>
  );
};

export default CustomDropdown;
