import { DropdownProvider } from "contexts/dropdown-context";
import React, { useState } from "react";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">
        {show && (
          <div className="absolute top-full left-0 w-full bg-white shadow-sm">
            {children}
          </div>
        )}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
