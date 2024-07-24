"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Option } from "@/components/CustomDropdown";
import ImageSection from "@/components/ImageSection";
import LinkList from "@/components/LinkList";
import PageHeader from "@/components/PageHeader";
import { FaLink } from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "@/app/config/firebaseConfig"; // Import your Firebase config

const AddPage: React.FC = () => {
  const [links, setLinks] = useState<
    { id: number; selectedOption: Option | null }[]
  >([]);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const router = useRouter(); // Initialize useRouter

  const handleSelect = (option: Option | null, id: number) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, selectedOption: option } : link
      )
    );

    if (option) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleAddNewLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      { id: prevLinks.length + 1, selectedOption: null },
    ]);
  };

  const handleRemoveLink = (id: number) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((_, index) => index !== id - 1)
    );
  };

  const handleSave = async () => {
    // Save selected options to Firebase
    const db = getFirestore(app);
    const profileRef = collection(db, "profiles"); // Use your collection name
    await addDoc(profileRef, { selectedOptions });

    // Navigate to profile page
    router.push("/profile"); // Adjust path to your profile page
  };

  const optionStyles: Record<
    string,
    { backgroundColor: string; color: string }
  > = {
    GitHub: { backgroundColor: "#1A1A1A", color: "white" },
    "Frontend Mentor": { backgroundColor: "#FFFFFF", color: "black" },
    Twitter: { backgroundColor: "#43B7E9", color: "white" },
    LinkedIn: { backgroundColor: "#2D68FF", color: "white" },
    YouTube: { backgroundColor: "#EE3939", color: "white" },
    Facebook: { backgroundColor: "#2442AC", color: "white" },
    Twitch: { backgroundColor: "#EE3FC8", color: "white" },
    "Dev.to": { backgroundColor: "#333333", color: "white" },
    Codewars: { backgroundColor: "#8A1A50", color: "white" },
    Freecodecamp: { backgroundColor: "#302267", color: "white" },
    GitLab: { backgroundColor: "#EB4925", color: "white" },
    Hashnode: { backgroundColor: "#0330D1", color: "white" },
    "Stack Overflow": { backgroundColor: "#EC7100", color: "white" },
  };

  return (
    <div className="empty-page bg-gray-50 flex p-6 gap-6 flex-col md:flex-row">
      <ImageSection
        selectedOptions={selectedOptions}
        optionStyles={optionStyles}
      />

      <div className="w-full empty-page-right flex-1 h-auto gap-6 p-10 rounded-xl bg-white flex flex-col">
        <div className="page-right-text gap-2">
          <h2 className="font-bold text-[32px] leading-[48px] text-[#333333]">
            Customize your links
          </h2>
          <p className="text-[16px] leading-[24px] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <PageHeader onAddNewLink={handleAddNewLink} />

        <LinkList
          links={links}
          onSelect={handleSelect}
          onRemove={handleRemoveLink}
        />

        <div className="flex justify-end mt-10 border-t-2 pt-4">
          <button
            onClick={handleSave} // Add onClick handler
            className="w-full md:w-[91px] md:h-[46px] p-3 rounded-lg  bg-[#633CFF] text-[#F3F2F2] flex items-center justify-center gap-2"
          >
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
