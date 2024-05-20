import React from "react";

const HanhTrinhMT = ({ isDarkMode }) => {
  return (
    <div className="space-y-3">
      <div
        className="text-center text-base dark:text-gray-400 text-gray-500"
      >
        HÀNH TRÌNH ĐƠN HÀNG
      </div>
      <table
        className="w-full text-left text-sm dark:text-gray-400 text-gray-500"
      >
        <thead
          className="text-xs uppercase dark:text-gray-400 text-gray-700 dark:bg-gray-700 bg-cardinal-50"
        >
          <tr>
            <th scope="col" className="px-6 py-3">
              Trạng Thái
            </th>
            <th scope="col" className="px-6 py-3">
              Thời Gian
            </th>
            <th scope="col" className="px-6 py-3">
              Tỉnh/Thành Phố
            </th>
            <th scope="col" className="px-6 py-3">
              Quận/Huyện
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="border-b dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đang Vận Chuyển
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 22:22
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b dark:border-gray-700 dark:bg-[#0E1117] bg-white"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đã Nhập Kho
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 21:44
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đang Nhập Kho
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 21:44
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b 
                    dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đã Lấy Hàng
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 21:44
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b 
                    dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đang Lấy Hàng
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 21:44
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b 
                    dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Đang Lấy Hàng
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 21:44
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b 
                    dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Chờ Lấy Hàng
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 17:51
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
          <tr
            className="border-b 
                    dark:bg-[#0E1117] bg-white dark:border-gray-700"
          >
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
            >
              Chờ Duyệt
            </th>
            <td className="px-6 py-4 dark:text-gray-300">
              19-04 17:51
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Thành phố Hồ Chí Minh
            </td>
            <td className="px-6 py-4 dark:text-gray-300">
              Quận Tân Bình
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HanhTrinhMT;
