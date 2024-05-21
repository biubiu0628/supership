import React from "react";

const NguoiNhanSM = ({ name, sdt, address }) => {
  return (
    <>
      <div className="text-primary px-4 text-right">
        <div className="text-base dark:text-gray-400 text-gray-500">
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

export default NguoiNhanSM;
