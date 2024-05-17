import React from "react";

const NguoiNhanMT = ({ name, sdt, address, isDarkMode }) => {
  return (
    <>
      <div
        className={`text-primary flex-1  text-right
                ${isDarkMode ? "border-gray-400" : "border-gray-200"}
                ${isDarkMode ? "border-l" : "border-l-2"}`}
      >
        <div
          className={`text-base  ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Người Nhận
        </div>
        <div>
          {name} - <span className="underline">{sdt}</span>
        </div>
        <div className="text-base">{address}</div>
      </div>
    </>
  );
};

export default NguoiNhanMT;
