import React from "react";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return <div></div>;
};

export default Dropdown;
