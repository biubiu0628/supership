import React from "react";

const HangNhanMT = ({ name }) => {
  return (
    <>
      <div className="border-primary border-b-2 border-dashed p-2 text-right">
        <div className="text-base dark:text-gray-400 text-gray-500">
          Hàng Nhận
        </div>
        <div className="dark:text-gray-300 text-gray-600">{name}</div>
      </div>
    </>
  );
};

export default HangNhanMT;
