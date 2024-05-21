import React from "react";

const NguoiNhanMT = ({ name, sdt, address }) => {
  return (
    <>
      <div
        className="text-primary flex-1  text-right
                dark:border-gray-400 border-gray-200 dark:border-l border-l-2"
      >
        <div className="text-base  dark:text-gray-400 text-gray-500">
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
