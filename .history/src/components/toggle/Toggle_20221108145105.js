import React from "react";

const Toggle = (props) => {
  const { on, onClick, ...rest } = props;
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
      />
    </label>
  );
};

export default Toggle;
