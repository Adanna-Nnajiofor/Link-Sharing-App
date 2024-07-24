import React from "react";
import LinkItem from "./LinkItem";
import { Option } from "@/components/CustomDropdown";

interface LinkListProps {
  links: { id: number; selectedOption: Option | null }[];
  onSelect: (option: Option | null, id: number) => void;
  onRemove: (id: number) => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onSelect, onRemove }) => {
  return (
    <>
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default LinkList;
