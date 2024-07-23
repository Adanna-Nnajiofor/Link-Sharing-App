"use client";
import React, { useState } from "react";
import CustomDropdown, { Option } from "@/components/CustomDropdown";
import { FaPlus, FaLink } from "react-icons/fa";

const AddPage: React.FC = () => {
  const [links, setLinks] = useState<
    { id: number; selectedOption: Option | null }[]
  >([]);

  const handleSelect = (option: Option | null, id: number) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, selectedOption: option } : link
      )
    );
  };

  const handleAddNewLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      { id: prevLinks.length + 1, selectedOption: null },
    ]); // Add a new link with an incremented id
  };

  const handleRemoveLink = (id: number) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="empty-page bg-gray-50 flex p-6 gap-6 flex-col md:flex-row">
      <div className="w-full empty-page-left hidden lg:w-[560px] lg:h-[834px] p-6 gap-2 rounded-xl lg:flex items-center justify-center bg-white relative">
        <img
          src="/preview-section.png"
          alt="Example"
          className="w-full lg:w-[307px] lg:h-[631px] border border-white flex"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start gap-4 p-4">
          {links.map(
            (link) =>
              link.selectedOption && (
                <div
                  key={`selected-${link.id}`}
                  className="relative top-[370px] flex items-center justify-center bg-opacity-70 pb-6 text-black  rounded-lg"
                >
                  <div className="flex items-center">
                    {link.selectedOption.icon}
                    <span className="ml-2">{link.selectedOption.label}</span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

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

        <div className="page-right-work gap-6 mt-4">
          <button
            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-[#633CFF] text-[#633CFF] hover:bg-[#EFEBFF]"
            onClick={handleAddNewLink}
          >
            <FaPlus />
            Add new link
          </button>
        </div>

        {links.map((link) => (
          <div
            key={link.id}
            className="w-full page-right-started p-8 gap-3 rounded-lg bg-[#FAFAFA] flex flex-col mb-6"
          >
            {/* Started Head Div */}
            <div className="started-head-div flex justify-between mb-4">
              <div className="started-head-1 flex items-center gap-2">
                <FaLink />
                <span className="font-[Instrument Sans] text-[16px] font-[700] leading-[24px] text-[#737373]">
                  Link#{link.id}
                </span>
              </div>
              <div
                className="started-head-2 cursor-pointer"
                onClick={() => handleRemoveLink(link.id)}
              >
                <span className="font-[Instrument Sans] text-[16px] font-[400] leading-[24px] text-[#737373]">
                  Remove
                </span>
              </div>
            </div>

            {/* Page Form 1 */}
            <div className="page-form-1 mb-4">
              <label className="block font-[Instrument Sans] text-[12px] font-[400] leading-[18px] text-[#333333] mb-2">
                Platform
              </label>
              <CustomDropdown
                onSelect={(option) => handleSelect(option, link.id)}
              />
            </div>

            {/* Page Form 2 */}
            <div className="page-form-2 mb-4">
              <label className="block font-[Instrument Sans] text-[12px] font-[400] leading-[18px] text-[#333333] mb-2">
                Link
              </label>
              <input
                type="url"
                placeholder="e.g. https://www.github.com/johnappleseed"
                className="w-full p-3 rounded-lg border border-[#D9D9D9] bg-white text-[16px] font-[400] leading-[24px] text-[#333333] placeholder:text-[#737373] flex items-center"
              />
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="flex justify-end mt-10 border-t-2 pt-4">
          <button className="w-full md:w-[91px] md:h-[46px] p-3 rounded-lg opacity-25 bg-[#633CFF] text-white hover:bg-[#BEADFF] hover:shadow-lg hover:shadow-[#633CFF40]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
