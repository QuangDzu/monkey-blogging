const { createContext, useContext, useState } = require("react");

const DropdownContext = createContext();
function DropdownProvider(props) {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
}

function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
}

export { show, handleToggleDropdown, useDropdown, DropdownProvider };
