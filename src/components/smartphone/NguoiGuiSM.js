import React from "react";

const NguoiGuiSM = ({ name, sdt, address, isDarkMode }) => {
  return (
    <>
      <div className="border-primary border-b border-dashed px-4 pb-2 text-left text-gray-800">
        <div
          class={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
        >
          Người Gửi
        </div>
        <div>
          <span
            class={`underline underline-offset-2 ${
              isDarkMode ? "text-gray-300" : ""
            }`}
          >
            {sdt}
          </span>{" "}
          -{" "}
          <span class={`font-medium ${isDarkMode ? "text-gray-300" : ""}`}>
            {name}
          </span>
        </div>
        <div class={`${isDarkMode ? "text-gray-300" : ""}`}>{address}</div>
      </div>
    </>
  );
};

export default NguoiGuiSM;
