const { createContext } = require("react");

const DropdownContext = createContext();
function DropdownProvider(props) {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
}
