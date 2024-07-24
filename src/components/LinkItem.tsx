import React from "react";
import { FaLink } from "react-icons/fa";
import CustomDropdown, { Option } from "@/components/CustomDropdown";

interface LinkItemProps {
  link: { id: number; selectedOption: Option | null };
  onSelect: (option: Option | null, id: number) => void;
  onRemove: (id: number) => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ link, onSelect, onRemove }) => {
  return (
    <div className="w-full page-right-started p-8 gap-3 rounded-lg bg-[#FAFAFA] flex flex-col mb-6">
      <div className="started-head-div flex justify-between mb-4">
        <div className="started-head-1 flex items-center gap-2">
          <FaLink />
          <span className="font-[Instrument Sans] text-[16px] font-[700] leading-[24px] text-[#737373]">
            Link#{link.id}
          </span>
        </div>
        <div
          className="started-head-2 cursor-pointer"
          onClick={() => onRemove(link.id)}
        >
          <span className="font-[Instrument Sans] text-[16px] font-[400] leading-[24px] text-[#737373]">
            Remove
          </span>
        </div>
      </div>

      <div className="page-form-1 mb-4">
        <label className="block font-[Instrument Sans] text-[12px] font-[400] leading-[18px] text-[#333333] mb-2">
          Platform
        </label>
        <CustomDropdown onSelect={(option) => onSelect(option, link.id)} />
      </div>

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
  );
};

export default LinkItem;
