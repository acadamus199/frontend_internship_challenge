import React from "react";

type TabsB = {
  children: any;
  isSelected?: boolean;
  classProperties?: string,
  onClick: React.MouseEventHandler
};

const TabsButton: React.FC<TabsB> = ({ children, isSelected, classProperties,...onClick }) => {
  return (
    <>
      <button className={`${classProperties} ${isSelected ? "tab-active" : undefined}`} {...onClick}>
        {children}
      </button>
    </>
  );
};

export default TabsButton
