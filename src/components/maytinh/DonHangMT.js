import React from "react";

const DonHangMT = ({ id, date, status, weight }) => {
  return (
    <>
      <div
        className="border-primary flex flex-row items-center justify-between rounded-t-md border-t  
        px-4 py-8 text-left dark:bg-[#111827] bg-[#F9E8E8]"
      >
        <div>
          <div className="text-primary text-lg font-medium">{id}</div>
          <div className="text-sm dark:text-gray-300 text-gray-500">{date}</div>
        </div>
        <div className="text-right">
          <div className="text-md text-primary mb-1 font-semibold">
            {status}
          </div>
          <div className="text-sm dark:text-gray-300 text-gray-500">
            Tổng Khối Lượng
          </div>
          <div className="font-semibold dark:text-gray-300">{weight}</div>
        </div>
      </div>
    </>
  );
};

export default DonHangMT;
