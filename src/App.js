import { useState, useEffect } from "react";
import "./App.css";
import DonHangSM from "./components/smartphone/DonHangSM";
import NguoiGuiSM from "./components/smartphone/NguoiGuiSM";
import NguoiNhanSM from "./components/smartphone/NguoiNhanSM";
import HangNhanSM from "./components/smartphone/HangNhanSM";
import HanhTrinhSM from "./components/smartphone/HanhTrinhSM";

import DonHangMT from "./components/maytinh/DonHangMT";
import NguoiGuiMT from "./components/maytinh/NguoiGuiMT";
import NguoiNhanMT from "./components/maytinh/NguoiNhanMT";
import HangNhanMT from "./components/maytinh/HangNhanMT";
import HanhTrinhMT from "./components/maytinh/HanhTrinhMT";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(
    () => localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode)),
    [isDarkMode]
  );

  // eslint-disable-next-line
  const [donHang, setDonHang] = useState({
    id: "VTUS983262NM.813587015",
    date: "19/04/2024 17:51:52",
    status: "Đang Vận Chuyển",
    weight: "6.900 gr",
  });

  // eslint-disable-next-line
  const [hangNhan, setHangNhan] = useState({
    name: "Quần áo",
  });

  // eslint-disable-next-line
  const [nguoiGui, setNguoiGui] = useState({
    sdt: "098****868",
    name: "SUP********EST",
    address: "Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh",
  });

  // eslint-disable-next-line
  const [nguoiNhan, setNguoiNhan] = useState({
    name: "Anh Thu Nguyen Thi",
    sdt: "090****864",
    address: "Phường Thắng Nhì, Thành phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu",
  });

  // eslint-disable-next-line
  const [isSearch, setIsSearch] = useState("");

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (index) => {
    if (index === donHang.id) {
      setSearchResult(true);
    } else {
      setSearchResult(false);
    }
  };

  const handleDeleteSearch = () => {
    setIsSearch("");
  };

  return (
    <div
      className={`h-screen ${
        isDarkMode ? "bg-[#18191A]" : "bg-[#F5F5F5]"
      } flex flex-col`}
    >
      <header
        // className={`sticky top-0 ${isDarkMode ? "bg-[#02040A]" : "bg-white"}`}
        className="sticky top-0 bg-white dark:bg-[#02040A]"
      >
        <div className="mt-4 flex flex-col items-center sm:hidden">
          {isDarkMode ? (
            <a href="https://supership.vn">
              <img
                src="https://mdl.supership.net/images/SuperShip-Logo-Ngang-Trang-Moi.png"
                width="200"
                alt="SuperShip"
              />
            </a>
          ) : (
            <a href="https://supership.vn">
              <img
                src="https://mdl.supership.net/images/SuperShip-Logo-Ngang-Do-Moi.png"
                width="200"
                alt="SuperShip"
              />
            </a>
          )}
        </div>
        <div className="border-primary flex flex-row justify-center border-b-2 py-4">
          <div className="container flex max-w-[1440px] flex-row items-center sm:mx-4">
            <div className="mr-8 hidden sm:block">
              {isDarkMode ? (
                <a href="https://supership.vn">
                  <img
                    src="https://mdl.supership.net/images/SuperShip-Logo-Ngang-Trang-Moi.png"
                    width="200"
                    alt="SuperShip"
                  />
                </a>
              ) : (
                <a href="https://supership.vn">
                  <img
                    src="https://mdl.supership.net/images/SuperShip-Logo-Ngang-Do-Moi.png"
                    width="200"
                    alt="SuperShip"
                  />
                </a>
              )}
            </div>
            <form className="mx-4 flex-1 sm:mr-0">
              <label
                for="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900"
              >
                Tìm kiếm
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                {/* thanh tìm kiếm */}
                <input
                  id="default-search"
                  type="search"
                  className={` block w-full rounded-lg border p-4 pl-10 text-base
                  focus:outline-none focus:ring-0
                  ${isDarkMode ? "border-gray-400" : "border-gray-300"}
                  ${isDarkMode ? "bg-[#0E1117]" : "bg-gray-50"}
                  ${isDarkMode ? "text-white" : "text-gray-900"}
                  ${isDarkMode ? "focus:border-white" : "focus:border-primary"}
                  ${isDarkMode ?? "placeholder-gray-400"}
                  `}
                  placeholder="Nhập mã đơn hàng ..."
                  value={isSearch}
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setIsSearch(value);
                    handleSearch(isSearch);
                  }}
                />
                {/* nút xóa */}
                <div
                  className={`absolute inset-y-0 right-[100px] cursor-pointer items-center pr-3 
                  ${isSearch === "" ? "hidden" : "flex"}`}
                  onClick={handleDeleteSearch}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* nút tìm kiếm */}
                <div className="absolute bottom-2.5 right-2.5 ">
                  <button
                    className={`rounded-lg px-4  
                  py-2 text-sm font-medium text-white focus:outline-none focus:ring-4
                  ${isDarkMode ? "focus:ring-primary" : "focus:ring-[#F9A8AB]"}
                  ${
                    isDarkMode
                      ? isSearch === ""
                        ? "bg-[#374151]"
                        : "bg-primary"
                      : isSearch === ""
                      ? "bg-[#9CA3AF]"
                      : "bg-primary"
                  }
                  ${isSearch === "" ? "pointer-events-none" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSearch(isSearch);
                    }}
                  >
                    Tìm Kiếm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      {isSearch === "" ? (
        <>
          {/* not found */}
          <main
            className={`flex flex-1 flex-col items-center justify-center ${
              isDarkMode ? "bg-[#0E1117]" : "bg-white"
            }`}
          >
            <div
              className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border
              ${isDarkMode ?? "border-gray-50/30"}`}
            >
              <img
                src="images/icon.svg"
                className="w-[200px] sm:w-[200px]"
                alt="SuperShip"
              />
            </div>
            <div
              className={`mt-4 text-lg font-medium ${
                isDarkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Chưa Nhập Mã Đơn
            </div>
            <div
              className={`${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              Vui lòng nhập Mã Đơn Hàng để bắt đầu.
            </div>
          </main>
        </>
      ) : !searchResult ? (
        <>
          {/* not found */}
          <main
            className={`flex flex-1 flex-col items-center justify-center ${
              isDarkMode ? "bg-[#0E1117]" : "bg-white"
            }`}
          >
            <div
              className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border
              ${isDarkMode ?? "border-gray-50/30"}`}
            >
              <img
                src="images/icon.svg"
                className="w-[200px] sm:w-[200px]"
                alt="SuperShip"
              />
            </div>
            <div
              className={`mt-4 text-lg font-medium ${
                isDarkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Mã Đơn Chưa Đúng
            </div>
            <div
              className={`${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
            >
              Hãy thử tìm với Mã Đơn Hàng khác.
            </div>
          </main>
        </>
      ) : (
        <main className="container mx-auto flex h-screen max-w-[1440px] flex-1 flex-col">
          {/* smartphone */}
          <div
            className={`flex flex-1 flex-col space-y-3 sm:hidden ${
              isDarkMode ? "bg-[#0E1117]" : "bg-white"
            }`}
          >
            <DonHangSM
              id={donHang.id}
              date={donHang.date}
              status={donHang.status}
              weight={donHang.weight}
              isDarkMode={isDarkMode}
            />
            <NguoiGuiSM
              sdt={nguoiGui.sdt}
              name={nguoiGui.name}
              address={nguoiGui.address}
              isDarkMode={isDarkMode}
            />
            <NguoiNhanSM
              name={nguoiNhan.name}
              sdt={nguoiNhan.sdt}
              address={nguoiNhan.address}
              isDarkMode={isDarkMode}
            />
            <HangNhanSM name={hangNhan.name} isDarkMode={isDarkMode} />
            <HanhTrinhSM isDarkMode={isDarkMode} />
          </div>
          {/* maytinh */}
          <div
            className={`mt-2 hidden h-full flex-1 flex-col space-y-6 text-gray-600 sm:flex md:w-[1440px] ${
              isDarkMode ? "bg-[#0E1117]" : "bg-white"
            }`}
          >
            <DonHangMT
              id={donHang.id}
              date={donHang.date}
              status={donHang.status}
              weight={donHang.weight}
              isDarkMode={isDarkMode}
            />
            <div className="flex flex-row items-start justify-between px-4">
              <NguoiGuiMT
                sdt={nguoiGui.sdt}
                name={nguoiGui.name}
                address={nguoiGui.address}
                isDarkMode={isDarkMode}
              />
              <NguoiNhanMT
                name={nguoiNhan.name}
                sdt={nguoiNhan.sdt}
                address={nguoiNhan.address}
                isDarkMode={isDarkMode}
              />
            </div>
            <HangNhanMT name={hangNhan.name} isDarkMode={isDarkMode} />
            <HanhTrinhMT isDarkMode={isDarkMode} />
          </div>
        </main>
      )}
      {/* button light and dark */}
      <div
        className={`fixed bottom-8 left-1/2 z-40 -translate-x-1/2 rounded border sm:left-auto sm:right-8 sm:transform-none 
        ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}
        ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}
      >
        <div className="mx-auto grid h-full max-w-lg grid-cols-2">
          <button
            type="button"
            className={`group inline-flex flex-col items-center justify-center rounded-l px-4 py-2
            ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
            onClick={() => {
              setIsDarkMode(false);
              document.documentElement.classList.remove("dark");
            }}
          >
            <svg
              className={`h-[20px] w-[20px]
              ${isDarkMode ? "text-white" : "text-gray-800"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
            <span className="sr-only">Light</span>
          </button>

          <button
            type="button"
            className={`group inline-flex flex-col items-center justify-center rounded-r p-2
             ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
            onClick={() => {
              setIsDarkMode(true);
              document.documentElement.classList.add("dark");
            }}
          >
            <svg
              className={`h-[20px] w-[20px]
              ${isDarkMode ? "text-white" : "text-gray-800"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <span className="sr-only">Dark</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
