import React from "react";

const SkeletonMT = () => {
  return (
    <>
      <div
        className=" border-primary flex flex-row items-center justify-between rounded-t-md border-t  
        px-4 py-8 text-left dark:bg-[#929497] bg-[#EBECEF]"
      >
        <div>
          <div className="bg-gray-500 rounded-full h-4 mb-4 w-[300px]"></div>
          <div className="bg-gray-300 rounded-full h-2 mb-4 w-[200px]"></div>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-gray-400 rounded-full h-3 mb-4 w-[200px]"></div>
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[150px]"></div>
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[100px]"></div>
        </div>
      </div>
      <div className="flex flex-row px-4">
        {/* left */}
        <div className="flex-1">
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[100px]"></div>
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[200px]"></div>
          <div className="bg-gray-300 rounded-full h-3 w-[300px]"></div>
        </div>
        {/* right */}
        <div className="flex-1 dark:border-gray-400 border-gray-200 dark:border-l border-l-2 flex flex-col items-end">
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[100px]"></div>
          <div className="bg-gray-300 rounded-full h-3 mb-4 w-[200px]"></div>
          <div className="bg-gray-300 rounded-full h-3 w-[300px]"></div>
        </div>
      </div>
      <div className="border-[#EBECEF] border-b-2 border-dashed p-2 flex flex-col items-end">
        <div className="bg-gray-300 rounded-full h-3 mb-4 w-[100px]"></div>
        <div className="bg-gray-300 rounded-full h-3 mb-4 w-[300px]"></div>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <div className="bg-gray-300 rounded-full h-3 mb-4 w-[300px]"></div>
        <table className="w-full">
          <thead className="text-xs uppercase dark:text-gray-400 text-gray-700 dark:bg-[#929497] bg-[#EBECEF]">
            <tr>
              <th scope="col" className="px-6 py-4">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <th scope="col" className="px-6 py-4">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <th scope="col" className="px-6 py-4">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <th scope="col" className="px-6 py-4">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:bg-[#0E1117] bg-white dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
              >
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700 dark:bg-[#0E1117] bg-white">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
              >
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
            </tr>
            <tr className="border-b dark:bg-[#0E1117] bg-white dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium dark:text-white text-gray-600"
              >
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
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
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
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
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
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
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
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
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
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
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </th>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
              <td className="px-6 py-4 dark:text-gray-300">
                <div className="bg-gray-300 rounded-full h-3 w-[200px]"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SkeletonMT;
