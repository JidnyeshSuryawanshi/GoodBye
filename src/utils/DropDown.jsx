import React from "react";

export default function DropDown({ title, options, handleSelection }) {
  const handleChange = (e) => {
    handleSelection(e.target.value);
  };
  
  return (
    <div className="relative inline-block">
      <select
        onChange={handleChange}
        className="appearance-none bg-[#121212] text-white px-4 py-2 pr-8 rounded-lg border border-gray-800 focus:outline-none focus:border-[#FF3D48] focus:ring-1 focus:ring-[#FF3D48]"
      >
        <option value="" disabled selected>
          {title}
        </option>
        {options.map((ele, idx) => (
          <option key={idx} value={ele} className="py-1">
            {ele}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <i className="ri-arrow-down-s-line text-gray-400"></i>
      </div>
    </div>
  );
}
