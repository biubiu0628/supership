import React from "react";

const NguoiGuiMT = ({ sdt, name, address, isDarkMode }) => {
  return (
    <div className="flex-1 text-left">
      <div
        className={`text-base ${
          isDarkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Người Gửi
      </div>
      <div>
        <span
          className={`underline underline-offset-2 ${
            isDarkMode ? "text-gray-300" : ""
          }`}
        >
          {sdt}
        </span>{" "}
        -{" "}
        <span className={`font-medium ${isDarkMode ? "text-gray-300" : ""}`}>
          {name}
        </span>
      </div>
      <div className={`${isDarkMode ? "text-gray-300" : ""}`}>{address}</div>
    </div>
  );
};

export default NguoiGuiMT;
