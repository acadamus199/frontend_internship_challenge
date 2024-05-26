import React from "react";

type TabsB = {
  children: any;
  isSelected?: boolean;
  classProperties?: string,
};

const TabsButton: React.FC<TabsB> = ({ isSelected, children, classProperties }) => {
  return (
    <>
      <div className={`${classProperties} ${isSelected ? "tab-active" : ""}`}>{children}</div>
    </>
  );
};

export default TabsButton
