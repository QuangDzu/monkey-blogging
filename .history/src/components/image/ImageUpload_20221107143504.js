import React from "react";

const ImageUpload = (props) => {
  const { name, className = "", ...rest } = props;

  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg relative overflow-hidden ${className}`}
    >
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
      />
    </label>
  );
};

export default ImageUpload;