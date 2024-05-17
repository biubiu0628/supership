import React from "react";

const HangNhanSM = ({ name, isDarkMode }) => {
  return (
    <>
      <div className="px-4">
        <div
          className={`text-base ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Hàng Nhận
        </div>
        <div
          className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          {name}
        </div>
      </div>
    </>
  );
};

export default HangNhanSM;
