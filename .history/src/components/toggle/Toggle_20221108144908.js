import React from "react";

const Toggle = ({ on }) => {
  return (
    <label>
      <input type="checkbox" checked={on} />
    </label>
  );
};

export default Toggle;
