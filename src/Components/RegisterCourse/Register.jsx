import React, { useRef, useState } from "react";
import styles from "./Register.module.scss";
import Header from "../../Header/Header";
import emailjs from "@emailjs/browser";
import Zalo from "../../Components/ZaloSupport/Zalo";
export default function Register({ showHeader = true }) {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(""); // Trạng thái cho thông báo
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ozdlpn",
        "template_e31o7ld",
        form.current,
        "sRe_wqnmfOrvSIi0Q"
      )
      .then(
        () => {
          setSuccessMessage("Gửi biểu mẫu thành công!"); // Cập nhật thông báo thành công
          form.current.reset(); // Làm mới các ô nhập liệu
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Gửi biểu mẫu thất bại. Vui lòng thử lại."); // Thông báo lỗi
        }
      );
  };
  return (
    <>
      {showHeader && <Header />}
      <div className={`${styles.container}`}>
        <form
          className="rounded-lg p-8 max-w-lg mx-auto"
          onSubmit={sendEmail}
          ref={form}
        >
          <h1 className="text-2xl font-bold text-left mb-6 text-[#333] -mt-4">
            Form Đăng Kí Học Gia Sư Cho Học Sinh
          </h1>
          
          <p className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 cursor-default">
              Họ Tên Phụ Huynh
              <br />
              <span className="relative block">
                <input
                  size="40"
                  maxLength="400"
                  className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  type="text"
                  required
                  name="from_name"
                />
              </span>
            </label>
          </p>
          <p className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 cursor-default">
              Muốn Tìm Gia Sư Dạy Kèm Môn:
              <br />
              <span className="relative block">
                <input
                  size="40"
                  maxLength="400"
                  className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  type="text"
                  required
                  name="class_subject"
                />
              </span>
            </label>
          </p>
          <p className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 cursor-default">
              Lớp:
              <br />
              <span className="relative block">
                <input
                  size="40"
                  maxLength="400"
                  className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  type="number"
                  min="1"
                  max="12"
                  required
                  name="class_subject"
                />
              </span>
            </label>
          </p>
          <p className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 cursor-default">
              Số Điện Thoại Của Phụ Huynh:
              <br />
              <span className="relative block">
                <input
                  size="40"
                  maxLength="400"
                  className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  type="tel"
                  pattern="[0-9]{10,12}"
                  placeholder="Lưu ý: Phụ huynh điền đúng số điện thoại"
                  required
                  name="phone_number"
                />
              </span>
            </label>
          </p>
          <p className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 cursor-default">
              Địa Chỉ Học:
              <br />
              <span className="relative block">
                <input
                  size="40"
                  maxLength="400"
                  className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  type="text"
                  placeholder="Ví dụ: Số nhà, Đường, Phường, Tp Biên Hòa"
                  required
                  name="address"
                />
              </span>
            </label>
          </p>
          <p className="mb-4">
            <label className="block font-medium text-gray-700">
              Quý Phụ Huynh Kiểm Tra Các Thông Tin Trước Khi Bấm "Gửi"
            </label>
          </p>
          <p>
            <button
              className={`${styles.buttonText} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition`}
              type="submit"
            >
              Gửi
            </button>
            {successMessage && (
            <p className="mb-4 text-green-600 font-bold">{successMessage}</p>
          )}
          </p>
        </form>
      </div>
      {/* <Zalo/> */}
    </>
  );
}
