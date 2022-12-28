import { useDropdown } from "contexts/dropdown-context";
import React from "react";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100"
      onClick={handClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
