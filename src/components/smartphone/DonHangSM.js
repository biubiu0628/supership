import React from "react";

const DonHangSM = ({ id, date, status, weight }) => {
  return (
    <>
      <div className="mt-2 px-4">
        <div className="text-primary font-medium">{id}</div>
        <div className="text-sm dark:text-gray-300 text-gray-500">{date}</div>
      </div>
      <div className=" px-4 py-2 text-center dark:bg-[#111827] bg-[#F9E8E8]">
        <div className="text-md text-primary font-semibold">{status}</div>
        <div className="dark:text-gray-400 text-gray-500">Tổng Khối Lượng</div>
        <div className="dark:text-gray-300 font-semibold">{weight}</div>
      </div>
    </>
  );
};

export default DonHangSM;
