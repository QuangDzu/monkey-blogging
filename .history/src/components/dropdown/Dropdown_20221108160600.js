import { DropdownProvider } from "contexts/dropdown-context";
import React, { useState } from "react";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
