import React, { useState } from "react";
import Header from "../../Header/Header";
import styles from "../Home/Home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Zalo from "../ZaloSupport/Zalo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Home() {
  const tableData = [
    {
      class: "Lớp lá 1,2,3,4",
      studentPrice: "900 – 1 triệu/tháng",
      teacherPrice: "1.3 – 1.4 triệu/tháng"
    },
    {
      class: "Lớp 5,6,7,8",
      studentPrice: "1 – 1.2 triệu/tháng",
      teacherPrice: "1.5 – 1.6 triệu/tháng"
    },
    {
      class: "Lớp 9,10,11",
      studentPrice: "1.2 – 1.5 triệu/tháng",
      teacherPrice: "1.7 – 2 triệu/tháng"
    },
    {
      class: "Lớp 12 – LTĐH",
      studentPrice: "1.5 – 1.6 triệu/tháng",
      teacherPrice: "2.1 – 2.4 triệu/tháng"
    }
  ];
  const tableData1 = [
    {
      class: "Lớp lá 1,2,3,4",
      studentPrice: "1.4 – 1.5 triệu/tháng",
      teacherPrice: "2 – 2.1 triệu/tháng"
    },
    {
      class: "Lớp 5,6,7,8",
      studentPrice: "1.5 – 1.8 triệu/tháng",
      teacherPrice: "2.2 – 2.4 triệu/tháng"
    },
    {
      class: "Lớp 9,10,11",
      studentPrice: "1.8 – 2.2 triệu/tháng",
      teacherPrice: "2.5 – 3 triệu/tháng"
    },
    {
      class: "Lớp 12 – LTĐH",
      studentPrice: "2.2 – 2.4 triệu/tháng",
      teacherPrice: "3.2 – 3.6 triệu/tháng"
    }
  ];
  const [openDropdownBox, setOpenDropdownBox] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdownBox(!openDropdownBox);
  };
  return (
    <>
      <Header />
      <div className={styles.headertitle}>
        <div className={styles.title}>
          <h1>Trung tâm gia sư uy tín Biên Hòa</h1>
          <div className={styles.dropdownBox}>
            <a href="#dropdown" onClick={toggleDropdown}>
              Mục Lục Bài Viết:
              <span className={styles.togglespan}>
                <svg
                  style={{ fill: "#999", color: "#999", marginLeft: "3px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="list-377408"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  style={{ fill: "#999", color: "#999" }}
                  className="arrow-unsorted-368013"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  height="10px"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                >
                  <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"></path>
                </svg>
              </span>
            </a>
            {openDropdownBox && (
              <div className={styles.dropdownBoxMenu}>
                <ul>
                  <li>
                    <a
                      href="#1"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById(
                          "gioi-thieu-trung-tam"
                        );
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      1. Giới thiệu trung tâm
                    </a>
                  </li>
                  <li>
                    <a
                      href="#2"
                      onClick={(e) => {
                        e.preventDefault();
                        const section =
                          document.getElementById("Doi-ngu-gia-su");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      2. Đội ngũ gia sư
                    </a>
                  </li>
                  <li>
                    <a
                      href="#3"
                      onClick={(e) => {
                        e.preventDefault();
                        const section =
                          document.getElementById("bang-gia-tham-khao");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      3. Bảng giá tham khảo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#4"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById("Lien-he");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      4. Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.mainTitle}>
          <div className={styles.mainTitleHeader}>
            <h2 id="gioi-thieu-trung-tam">1. Giới thiệu trung tâm</h2>
            <p>
              <strong>
                <a href="#className">
                  Bạn đang tìm kiếm một trung tâm gia sư uy tín tại Biên Hòa?
                </a>
              </strong>{" "}
              Trung tâm Gia sư Giỏi Biên Hòa là lựa chọn lý tưởng để giúp con
              bạn cải thiện kết quả học tập nhanh chóng và bền vững.{" "}
              <strong>
                Dành cho học sinh từ lớp 1 đến lớp 12, từ cơ bản đến nâng cao.
              </strong>{" "}
              <span style={{ color: "#0000ff" }}>
                <strong>
                  <em>
                    Luyện thi chuyên sâu: Đầu vào lớp 10 trường THPT chuyên
                    Lương Thế Vinh, trường điểm (Ngô Quyền, Trấn Biên, Nam
                    Hà,...); ôn luyện thi đại học các khối, vào các trường Đại
                    học lớn, luyện thi các chứng chỉ MOS, IELTS, TOIEC,...
                  </em>
                  ….
                </strong>
              </span>
            </p>
            <p>
              Với dịch vụ gia sư 1 kèm 1 chuyên nghiệp, chúng tôi cam kết tiến
              bộ rõ rệt chỉ sau 1 tháng với lộ trình học tập được cá nhân hóa,
              phù hợp với từng học viên.Học ngay tại nhà, lịch học linh hoạt,
              phù hợp với học sinh và gia đình.{" "}
              <span style={{ color: "#0000ff" }}>
                <strong>
                  Tư vấn miễn phí lộ trình học cá nhân hóa phù hợp với năng lực
                  và mục tiêu của học viên
                </strong>
              </span>
            </p>
            <p>
              <img
                loading="lazy"
                decoding="async"
                className="aligncenter wp-image-1461 size-full"
                src="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa.png"
                alt=""
                width="941"
                height="479"
                srcSet="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa.png 941w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa-300x153.png 300w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa-768x391.png 768w"
                sizes="(max-width: 941px) 100vw, 941px"
              />
            </p>
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p>
            <h2 id="Doi-ngu-gia-su">
              <span
                className="ez-toc-section"
                id="2_Doi_ngu_giao_vien_va_sinh_vien_lam_gia_su_tai_trung_tam_day_kem_Bien_Hoa"
                ez-toc-data-id="#2_Doi_ngu_giao_vien_va_sinh_vien_lam_gia_su_tai_trung_tam_day_kem_Bien_Hoa"
              ></span>
              <span style={{ color: "#008000" }}>2. Đội ngũ gia sư</span>
            </h2>
            <p>
              <ul className="list-disc ml-5">
                <li>
                  Giáo viên giỏi, tốt nghiệp chuyên ngành sư phạm, giàu kinh
                  nghiệm từ các trường học uy tín tại Biên Hòa.
                </li>
                <li>
                  {" "}
                  Sinh viên xuất sắc đến từ các đại học danh tiếng, tận tâm và
                  nhiệt huyết.
                </li>
                <li>
                  {" "}
                  Phương pháp giảng dạy hiện đại, cập nhật giúp học sinh tiếp
                  thu nhanh, học tập hiệu quả.
                </li>
                <li>
                  Không chỉ dạy kiến thức, gia sư còn tạo môi trường học vui vẻ,
                  giảm áp lực cho học sinh, phát huy khả năng sáng tạo, nâng cao
                  và phát triển tư duy
                </li>
                <li>
                  Bám sát chương trình học, giúp học viên tự tin nắm vững kiến
                  thức.
                </li>
                <li>
                  Hỗ trợ mọi lúc, học viên có thể nhắn tin hỏi bài ngoài giờ.
                </li>
                <li>
                  Báo cáo tiến độ hàng tháng giúp phụ huynh dễ dàng theo dõi sự
                  tiến bộ của con.
                </li>
              </ul>
            </p>
            <p>
              <span style={{ color: "#ff0000" }}>
                <strong>
                  Quý phụ huynh có thể liên hệ đến trung tâm gia sư dạy kèm để
                  biết thêm thông tin chi tiết.
                </strong>
              </span>
            </p>
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p>
            <h2>
              <span
                className="ez-toc-section"
                id="4_Bang_gia_gia_su_Bien_Hoa_%E2%80%93_Lien_he_tu_van_0961_328_357"
                ez-toc-data-id="#4_Bang_gia_gia_su_Bien_Hoa_–_Lien_he_tu_van_0961_328_357"
              ></span>
              <span style={{ color: "#008000" }} id="bang-gia-tham-khao">
                3. Bảng giá tham khảo
              </span>{" "}
            </h2>
            <p>
              Bài viết này Trung tâm gia sư Sư Phạm Biên Hòa xin cung cấp tới
              phụ huynh học sinh và các bạn gia sư bảng giá thuê Gia sư dạy kèm
              tại nhà Tp Biên Hòa uy tín dạy giỏi năm 2022. Quý phụ huynh tham
              khảo để lựa chọn gia sư giỏi cho con mình phù hợp nhất:
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_day_kem_tai_nha_2_buoituan_tai_Bien_hoa"
                ez-toc-data-id="#Gia_su_day_kem_tai_nha_2_buoituan_tai_Bien_hoa"
              ></span>
              <span style={{ color: "#800080" }}>
                <strong>
                  Gia sư dạy kèm tại nhà 2 buổi/tuần tại Biên hòa.
                </strong>
              </span>
            </h3>
            <table
              style={{
                borderCollapse: "collapse",
                width: "95%"
              }}
            >
              <thead>
                <tr>
                  <th
                    rowSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      fontWeight: "bold"
                    }}
                  >
                    Khối Lớp
                  </th>
                  <th
                    colSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000"
                    }}
                  >
                    2 buổi /tuần
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#008000"
                    }}
                  >
                    Sinh Viên
                  </th>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#0000ff"
                    }}
                  >
                    Giáo Viên
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#008000",
                        fontWeight: "bold"
                      }}
                    >
                      {row.class}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#ff0000",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      {row.studentPrice}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#0000ff",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      {row.teacherPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_day_kem_tai_nha_2_buoituan_tai_Bien_hoa"
                ez-toc-data-id="#Gia_su_day_kem_tai_nha_2_buoituan_tai_Bien_hoa"
              ></span>
              <span style={{ color: "#800080" }}>
                <strong>
                  Gia sư dạy kèm tại nhà 3 buổi/tuần tại Biên hòa.
                </strong>
              </span>
            </h3>
            <table
              style={{
                borderCollapse: "collapse",
                width: "95%"
              }}
            >
              <thead>
                <tr>
                  <th
                    rowSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      fontWeight: "bold"
                    }}
                  >
                    Khối Lớp
                  </th>
                  <th
                    colSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000"
                    }}
                  >
                    3 buổi /tuần
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#008000"
                    }}
                  >
                    Sinh Viên
                  </th>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#0000ff"
                    }}
                  >
                    Giáo Viên
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#008000",
                        fontWeight: "bold"
                      }}
                    >
                      {row.class}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#ff0000",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      {row.studentPrice}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eee",
                        color: "#0000ff",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      {row.teacherPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            {/* <p>
              <span style={{ color: "#ff0000" }}>
                <strong>
                  *** Lưu ý về bảng giá gia sư dạy kèm giỏi tại nhà Biên Hòa:***
                </strong>{" "}
              </span>
              Bảng học phí gia sư trên chỉ có tính chất tham khảo, học phí sẽ
              tăng hoặc giảm tùy theo số môn học và yêu cầu của quý phụ huynh.
            </p>
            <p>
              <span style={{ color: "#008000" }}>
                <strong>– Gia sư sinh viên trong bảng giá:</strong>
              </span>{" "}
              là các bạn Sinh viên đang học Đại học hoặc Cao Đẳng trên địa bàn
              Tp Biên Hòa và các khu vực lân cận. Kinh nghiệm đi dạy kèm gia sư
              tại nhà ít nhất 2 năm và có phương pháp giảng dạy hiệu quả.
            </p>
            <p>
              <span style={{ color: "#008000" }}>
                <strong>– Gia sư sinh viên trong bảng giá:</strong>{" "}
              </span>
              là các bạn sinh viên đã tốt nghiệp chuyên ngành sư phạm hoặc cử
              nhân đã có kinh nghiệm dạy kèm tại nhà và dạy tại các trung tâm.
              Kinh nghiệm ít nhất 4 năm. Có phương pháp giảng dạy dễ hiểu giúp
              học sinh nhanh tiến bộ trong tập.
            </p>
            <p>
              <span style={{ color: "#008000" }}>
                <strong>
                  – Gia sư Giáo viên đứng trường không có trong bảng giá:
                </strong>{" "}
              </span>
              Nếu phụ huynh yêu cầu Giáo viên đang dạy ở trường có thể liên hệ
              đến trung tâm để biết thêm chi tiết. Mức lương của giáo viên đứng
              trường tùy vào yêu cầu của phụ huynh.
            </p>
            <p>
              Để biết thêm quý phụ huynh có thể gọi trực tiếp đến trung tâm để
              được tư vấn và học thử miễn phí (cam kết tiến bộ sau tháng đầu học
              gia sư).
            </p>
            <h2>
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi-3"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi-3"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p>
            <h3 style={{ color: "#2f4468" }}>
              <span
                className="ez-toc-section"
                id="Tong_dai_tu_van_0961_328_357_Bam_vao_so_de_goi"
                ez-toc-data-id="#Tong_dai_tu_van_0961_328_357_Bam_vao_so_de_goi"
              ></span>
              Tổng đài tư vấn{" "}
              <strong>
                <a href="/">
                  <span style={{ color: "#ff0000" }}>0961 328 357</span>
                </a>
              </strong>{" "}
              <strong>(Bấm vào số để gọi)</strong>
            </h3> */}
            {/* <p>
              –{" "}
              <span style={{ color: "#0000ff" }}>
                <strong>Thầy Trung</strong>
              </span>{" "}
              (Chuyên ban tự nhiên)
              <br />–{" "}
              <strong>
                <span style={{ color: "#0000ff" }}>Cô Phúc</span>{" "}
              </strong>
              (Chuyên ban xã hội)
            </p> */}
            {/* <h2>
              <span
                className="ez-toc-section"
                id="5_Lop_Day_Kem_Tai_Nha_Tp_Bien_Hoa"
                ez-toc-data-id="#5_Lop_Day_Kem_Tai_Nha_Tp_Bien_Hoa"
              ></span>
              <span style={{ color: "#008000" }}>
                5. Lớp Dạy Kèm Tại Nhà Tp Biên Hòa:
              </span>
            </h2>
            <br /> */}
            {/* <table width="700" style={{ width: "90%" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023248</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm:
                          </span>
                        </span>
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            {" "}
                            Toán, tiếng việt lớp 3 và 4
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 3 và 4</div>
                      <div dir="auto">
                        – Địa chỉ : Gần Nhà Trẻ Phù Đổng- Kp2- Phường Long Bình
                        – Biên Hòa
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/ tuần. ( 1.5h/ buổi – Sắp xếp tối
                        3,5,6 lúc 7h30 và ngày chủ nhật)
                      </div>
                      <div dir="auto">– Thông tin thêm : 2 bé nữ</div>
                      <div dir="auto">
                        – Yêu cầu : giáo viên nữ kinh nghiệm đang dạy tại trường
                        . Ưu tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 3 triệu/ tháng
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023240</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>{" "}
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Anh lớp 6</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : chung cư Thanh Bình- Thanh Bình – Biên Hòa.(
                        gần chi cục thuế. Biên Hòa)
                      </div>
                      <div dir="auto">
                        – Thời gian : 4 buổi/ tuần. ( 1.5h/ buổi – Sắp xếp trước
                        chiều CN 1h30)
                      </div>
                      <div dir="auto">– Thông tin thêm : nữ , nhát</div>
                      <div dir="auto">
                        – Yêu cầu : giáo viên nữ kinh nghiệm, chuyên anh. Ưu
                        tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 3.2 triệu/ tháng
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023238</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 6</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : Khu Dân Cư An Bình- Phường An Bình – Biên
                        Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 2 buổi/ tuần. ( 1.5h/ buổi – Sắp xếp tối
                        7h30 tới 9h)
                      </div>
                      <div dir="auto">– Thông tin thêm : yếu, chậm</div>
                      <div dir="auto">
                        – Yêu cầu : giáo viên nữ kinh nghiệm, tâm lý. Ưu tiên
                        gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.6 triệu/ tháng
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023230</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 6</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : – KP1- P. Quyết Thắng – Biên Hòa.( gần UBND
                        tỉnh)
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/ tuần. ( 1.5h/ buổi – Sắp xếp tối)
                      </div>
                      <div dir="auto">– Thông tin thêm : yếu, chậm</div>
                      <div dir="auto">
                        – Yêu cầu : Sinh viên kinh nghiệm, tâm lý. Ưu tiên gần
                        khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.6 triệu/ tháng
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023235</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Anh lớp 12</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 12</div>
                      <div dir="auto">
                        – Địa chỉ : – Đường 30/4 – KP1- P.Trung Dũng – Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 1 buổi/ tuần. ( 1.5h/ buổi – Sắp xếp chiều
                        hoặc tối T7 và sáng CN)
                      </div>
                      <div dir="auto">
                        – Thông tin thêm : tb. Bé nam, 1 tuần học 2b 1 tuần
                        nghỉ, học cách tuần.
                      </div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên kinh nghiệm luyện thi ĐH. Ưu tiên
                        gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 350k/ buổi
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023234</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 2</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 2</div>
                      <div dir="auto">
                        – Địa chỉ : – Bùi Văn Hòa – P.Long Bình- Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/tuần ( 1.5h/ buổi – Sắp xếp tối
                        T2,4,6) .
                      </div>
                      <div dir="auto">– Thông tin thêm : yếu toán.</div>
                      <div dir="auto">
                        – Yêu cầu : Sinh viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.5 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023229</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Lý, hóa lớp 10
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 10</div>
                      <div dir="auto">
                        – Địa chỉ : – gần nhà hàng Hoa Lư – KP4- P.Long Bình-
                        Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 2 buổi/tuần ( 1.5h/ buổi – Sắp xếp chiều
                        từ 2h – 5h trừ T6 và CN.)
                      </div>
                      <div dir="auto">– Thông tin thêm : Trấn Biên</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023223</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Toán bằng tiếng anh lớp 5
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 5</div>
                      <div dir="auto">
                        – Địa chỉ : – gần Công an TP. Biên Hòa- KP6- P.Trung
                        Dũng- Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 2 buổi/tuần ( 1.5h/ buổi – Sắp xếp tối
                        T2,4).
                      </div>
                      <div dir="auto">– Thông tin thêm : học trường SNA</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên kinh nghiệm. Ưu tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2.2 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023210</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Toán + KHTN lớp 8
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 8</div>
                      <div dir="auto">
                        – Địa chỉ : – Gần trường THPT Nguyễn Khuyến – Trảng Dài
                        – Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/tuần ( 1.5h/ buổi – Sắp xếp tối
                        7h00 T3,5,7).
                      </div>
                      <div dir="auto">– Thông tin thêm : học IPS</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2.5 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023200</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Toán, tiếng việt lớp 2
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 2</div>
                      <div dir="auto">
                        – Địa chỉ : gần cổng chợ K8 – cổng 11 – Long Bình Tân –
                        Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 4 buổi/tuần ( 1.5h/ buổi – Sắp xếp
                        T3,4,5,6 tối 7h00)
                      </div>
                      <div dir="auto">– Thông tin thêm : bé gái</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2.8 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023194</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Toán, tiếng việt lớp 2
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 2</div>
                      <div dir="auto">
                        – Địa chỉ : tổ 1- Ấp 1 – Xã Sông Trầu – Trảng Bom – Biên
                        Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 5 buổi/tuần ( 1.5h/ buổi – Sắp xếp T2,4
                        tối)
                      </div>
                      <div dir="auto">– Thông tin thêm : bé gái</div>
                      <div dir="auto">
                        – Yêu cầu : Sinh viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2.6 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023154</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 10</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 10</div>
                      <div dir="auto">
                        – Địa chỉ : KP5 – P. Tân Phong – Biên Hòa. ( gần giáo xứ
                        Thuận Hòa)
                      </div>
                      <div dir="auto">
                        – Thời gian : 2 buổi/tuần ( 1.5h/ buổi – Sắp xếp T2,4
                        tối)
                      </div>
                      <div dir="auto">– Thông tin thêm : bé gái, tốt</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#ff0000" }}>
                          <strong>Lương : 1.9 triệu /tháng.</strong>
                        </span>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023153</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 6</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : chung cư Topaz – Twin B- Thống Nhất – Biên
                        Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 1 buổi/tuần ( 2,5h/ buổi – Sắp xếp CN
                        19h00- 21h30)
                      </div>
                      <div dir="auto">
                        – Thông tin thêm : học bth, sách chân trời sáng tạo .
                      </div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm đang dạy tại
                        trường. Ưu tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.8 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023151</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Toán lớp 2</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 2</div>
                      <div dir="auto">
                        – Địa chỉ : đường số 1- chung cư Amber court – Thống
                        Nhất – Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 2 buổi/tuần ( 1.5h/ buổi – Sắp xếp tối
                        T2,4 5h30)
                      </div>
                      <div dir="auto">– Thông tin thêm : học bth.</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm, spth. Ưu tiên gần
                        khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.5 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023140</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Báo bài các môn lớp 6
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : KP 3- Bửu Hòa – Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 5 buổi/tuần ( 2h/ buổi – Sắp xếp tối 7h
                        tới 9h thứ 2 tới thứ 6)
                      </div>
                      <div dir="auto">
                        – Thông tin thêm : bé học yếu và lười
                      </div>
                      <div dir="auto">
                        – Yêu cầu : sinh viên kinh nghiệm. Ưu tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 3 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023139</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>Anh lớp 6</span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 6</div>
                      <div dir="auto">
                        – Địa chỉ : đường Huỳnh Văn Nghệ – KP 1- Bửu Long – Biên
                        Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/tuần ( 1.5h/ buổi – Sắp xếp trưa
                        t2,4,6 lúc 1h30 tới 3h)
                      </div>
                      <div dir="auto">– Thông tin thêm : bé học yếu</div>
                      <div dir="auto">
                        – Yêu cầu : giáo viên nữ kinh nghiệm chuyên anh. Ưu tiên
                        gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2,3 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023128</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <strong>
                          <span style={{ color: "#0000ff" }}>
                            Toán + KHTN lớp 7
                          </span>
                        </strong>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 7</div>
                      <div dir="auto">
                        – Địa chỉ : KP8 – Hố Nai – Biên Hòa.( gần Dragon Star
                        com)
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/tuần ( 1.5h/ buổi – Sắp xếp chiều
                        T2,4,6 1h30 ).
                      </div>
                      <div dir="auto">– Thông tin thêm : học tốt</div>
                      <div dir="auto">
                        – Yêu cầu : Giáo viên nữ kinh nghiệm. Ưu tiên gần khu
                        vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 2.4 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid rgba(0, 0, 0, .1)" }}>
                    <div className="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
                      <div dir="auto">MSL: 1023116</div>
                      <div dir="auto">
                        –{" "}
                        <span style={{ color: "#0000ff" }}>
                          <span style={{ color: "#000000" }}>
                            Cần gia sư dạy kèm
                          </span>
                        </span>
                        :{" "}
                        <span style={{ color: "#0000ff" }}>
                          <strong>Anh lớp 1</strong>
                        </span>
                      </div>
                      <div dir="auto">– Lớp dạy : lớp 1</div>
                      <div dir="auto">
                        – Địa chỉ : đường N10 – KP 1- Bửu Long – Biên Hòa.
                      </div>
                      <div dir="auto">
                        – Thời gian : 3 buổi/tuần ( 1.5h/ buổi – Sắp xếp tối
                        T3,5,7)
                      </div>
                      <div dir="auto">– Thông tin thêm : bé nữ, song ngữ</div>
                      <div dir="auto">
                        – Yêu cầu : Sinh viên nữ kinh nghiệm chuyên anh, ưu tiên
                        có chứng chỉ anh văn. Ưu tiên gần khu vực.
                      </div>
                      <div dir="auto">
                        –{" "}
                        <strong>
                          <span style={{ color: "#ff0000" }}>
                            Lương : 1.8 triệu /tháng.
                          </span>
                        </strong>
                      </div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto"></div>
                    </div>
                    <div className={styles.contractcontainer}>
                      <div dir="auto">
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        <span className="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="xz74otr"
                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/2/16/260e.png"
                            alt="☎️"
                            width="16"
                            height="16"
                          />
                        </span>
                        – Liên hệ nhận lớp: 0931 609 469 (ưu tiên: call/sms/chat
                        zalo/ hoặc inbox facebook).
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p> */}
            {/* <h2>
              <span
                className="ez-toc-section"
                id="6_Gia_Su_Bien_Hoa_co_doi_ngu_gia_su_uy_tin_va_giau_kinh_nghiem"
                ez-toc-data-id="#6_Gia_Su_Bien_Hoa_co_doi_ngu_gia_su_uy_tin_va_giau_kinh_nghiem"
              ></span>
              <span style={{ color: "#008000" }}>
                6.Gia Sư Biên Hòa có đội ngũ gia sư uy tín và giàu kinh nghiệm:
              </span>
            </h2>

            <ul
              style={{
                listStyle: "disc",
                marginTop: "10px",
                marginLeft: "50px"
              }}
            >
              <li>
                <strong>Trung tâm gia sư uy tín Biên Hòa</strong> hiện đang cộng
                tác với nhiều Thầy Cô giáo đang giảng dạy trên địa bàn Tp Biên
                Hòa và khu vực lân cận như Tp Bình Dương, Hồ Chí Minh…
              </li>
              <br />
              <li>
                Bên cạnh các giáo viên giỏi của trung tâm gia sư Uy Tín là các
                bạn gia sư Sinh viên giỏi và kinh nghiệm trên đại bàn Tp Biên
                hòa. Hiện các em đang theo học các trường Đại học và Cao đẳng
                trên địa bàn..
              </li>
            </ul>
            <p>
              <img
                loading="lazy"
                decoding="async"
                className="size-full wp-image-1269"
                src="http://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/gia-sư-biên-hòa.jpg"
                alt="gia sư biên hòa"
                width="1000"
                height="573"
                srcSet="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/gia-sư-biên-hòa.jpg 1000w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/gia-sư-biên-hòa-300x172.jpg 300w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/gia-sư-biên-hòa-768x440.jpg 768w"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </p>
            <p style={{ marginTop: "-50%" }}>
              Nhiệm vụ của{" "}
              <a href="/" className={styles.hoverWord}>
                <strong>Trung tâm gia sư Biên Hòa</strong>
              </a>{" "}
              là giúp các em học sinh hiểu bài và làm được bài, giúp các em đạt
              thành tích cao trong học tập, giúp các em học sinh từ khá trở
              thành học sinh giỏi, từ trung bình yếu các em có thể vươn lên để
              đạt học sinh khá.
            </p>
            <br /> */}
            {/* <h2>
              <span
                className="ez-toc-section"
                id="7_Trung_tam_gia_su_Uy_Tin_Bien_Hoa_Chuyen"
                ez-toc-data-id="#7_Trung_tam_gia_su_Uy_Tin_Bien_Hoa_Chuyen"
              ></span>
              <span style={{ color: "#008000" }}>
                7. Trung tâm gia sư Uy Tín Biên Hòa Chuyên:
              </span>
            </h2>
            <p>
              + Dạy kèm cho các em học sinh tiểu học các môn chính: Toán, Tiếng
              Việt, Rèn chữ , tiếng anh cơ bản.
            </p>
            <p>
              + Dạy kèm chương trình THCS và THPT các môn Toán, Lý, Hóa, Sinh,
              Anh-văn.
            </p>
            <p>
              + Dạy kèm tại nhà luyện thi Đại Học THPT Quốc Gia theo nội dung ôn
              thi của Bộ Giáo Dục.
            </p>
            <ul style={{ listStyle: "disc", marginLeft: "50px" }}>
              <li>
                <span style={{ color: "#008080" }}>
                  Ngoài ra <em>gia sư uy tín Biên Hòa</em> dạy kèm tại nhà cho
                  học sinh cá biệt, lười, tự kỷ, mất căn bản kiến thức, học sinh
                  yếu củng cố kiến thức và nâng cao trình độ
                </span>
              </li>
              <li>
                Đội ngũ gia sư uy tín Biên Hòa bao gồm các sinh viên của các
                trường Đại học – Cao Đẳng và giáo viên đang công tác giảng dạy
                tại khu vực Biên Hòa . Đến với gia sư uy tín Biên Hòa quý phụ
                huynh các em học sinh được hưởng nhiều quyền lợi.
                <img
                  loading="lazy"
                  decoding="async"
                  className="wp-image-18 size-full aligncenter"
                  src="http://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/Gia-su-Bien-Hoa.jpg"
                  alt="Gia su Bien Hoa"
                  width="608"
                  height="253"
                  srcSet="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/Gia-su-Bien-Hoa.jpg 608w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/Gia-su-Bien-Hoa-300x125.jpg 300w"
                  sizes="(max-width: 608px) 100vw, 608px"
                />
              </li>
            </ul>
            <p>
              Quý phụ huynh thân mến. Hãy để gia sư uy tín Biên Hòa thay thế cho
              việc kiểm soát đến việc quan tâm kèm cặp cho con mình.{" "}
              <strong>Gia sư uy tín Biên Hòa</strong> sẽ giữ trách nhiệm, uy
              tín, chất lượng giáo dục hàng đầu hy vọng sẽ mang đến nguyện vọng
              của phụ huynh
            </p>
            <h2>
              <span
                className="ez-toc-section"
                id="8_Nhung_thong_tin_can_cung_cap_de_tim_gia_su_day_kem_cho_con"
                ez-toc-data-id="#8_Nhung_thong_tin_can_cung_cap_de_tim_gia_su_day_kem_cho_con"
              ></span>
              <span style={{ color: "#008000" }}>
                8. Những thông tin cần cung cấp để tìm gia sư dạy kèm cho con:
              </span>
            </h2>
            <p>
              Về phía trung tâm sẽ cần những thông tin như{" "}
              <strong>
                môn cần học gia sư, địa chỉ, thời gian học, yêu cầu của phụ
                huynh đề ra, số điện thoại liên hệ{" "}
              </strong>
              trực tiếp với phụ huynh. Sau khi tiếp các thông tin trung tâm sẽ
              tiến hành tìm gia sư phù hợp với yêu cầu của phụ huynh đề ra.
            </p>
            <h2>
              <span
                className="ez-toc-section"
                id="9_Chat_luong_cua_gia_su_Bien_Hoa"
                ez-toc-data-id="#9_Chat_luong_cua_gia_su_Bien_Hoa"
              ></span>
              <span style={{ color: "#008000" }}>
                9. Chất lượng của gia sư Biên Hòa
              </span>
            </h2>
            <p>
              Để <strong>đảm bảo về chất lượng gia sư dạy kèm tại nhà</strong>
              trung tâm dạy kèm Biên Hòa sẽ cho học thử 1 buổi, sau buổi dạy thử
              nếu phụ huynh đồng ý thì gia sư sẽ tiếp tục dạy như thỏa thuận ban
              đầu. Còn không phụ huynh có thể liên hệ đến trung tâm để được đổi
              người.
            </p>
            <p>
              Về <strong>mức lương gia sư</strong> sẽ được nhận vào cuối tháng,
              lương trả cho gia sư đúng như phụ huynh và trung tâm thỏa thuận.
              Ngoài ra phụ huynh không trả thêm 1 khoản tiền nào hết cho gia sư
              hoặc trung tâm.
            </p>
            <p>
              Mọi thắc mắc phụ huynh có thể liên hệ lại trung tâm để được tư vấn
              và hỗ trợ, nhằm nâng cao chất lượng phục vụ các cuộc gọi đến trung
              tâm đều được ghi âm.
            </p>
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p> */}
            {/* <h2>
              <span
                className="ez-toc-section"
                id="10_Danh_Sach_Gia_Su_Gioi_Tai_Bien_Hoa"
                ez-toc-data-id="#10_Danh_Sach_Gia_Su_Gioi_Tai_Bien_Hoa"
              ></span>
              <span style={{ color: "#008000" }}>
                10. Danh Sách Gia Sư Giỏi Tại Biên Hòa
              </span>
            </h2>
            <p>
              Danh sách gia sư giáo viên sinh viên chất lượng cao tại Biên Hòa
              của Trung Tâm Gia Sư Gia Trí Biên Hòa, chi tiết liên hệ:{" "}
              <span style={{ color: "#ff0000" }}>
                <a href="/" style={{ color: "#ff0000" }}>
                  <b>0961 328 357</b>
                </a>
              </span>{" "}
              <strong>(Bấm vào số để gọi)</strong> tìm gia sư dạy kèm con bạn
              tốt nhất:
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Thi_Khanh_Tam"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Thi_Khanh_Tam"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Thị Khánh Tâm
                </span>
              </strong>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Đại học sư phạm TP Hồ Chí Minh{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: tốt nghiệp năm 2005, hơn 15 năm kinh nghiệm
              <br />
              Gia sư dạy lớp: 1, 2, 3, 4, 5<br />
              Gia sư dạy môn: Toán, Tiếng việt
              <br />
              Khu vực có thể dạy : Tân Phong, Trảng Dài, Tân Hiệp
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Đã dạy được nhiều HS tiến bộ trong thời gian ngắn."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Đã dạy được nhiều HS tiến bộ trong thời gian ngắn.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Nguyen_Ngoc_Nhu_Phuong"
                ez-toc-data-id="#Gia_su_Sinh_vien_Nguyen_Ngoc_Nhu_Phuong"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Nguyễn Ngọc Như Phương
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Đại học Đồng Nai{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: 3 năm kinh nghiệm, đã dạy qua lớp 2, 3, 4.
              <br />
              Gia sư dạy lớp: lớp 1, 2, 3, 4, 5<br />
              Gia sư dạy môn: Toán, Báo bài, Tiếng Việt
              <br />
              Khu vực có thể dạy : Long Hưng, Tam Phước, Phước Tân
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình, tận tâm giúp các em học tốt hơn"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình, tận tâm giúp các em học tốt hơn.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Trang_Diem_Phuc"
                ez-toc-data-id="#Gia_su_Sinh_vien_Trang_Diem_Phuc"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Trang Diễm Phúc
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Sinh viên Đại Học Đồng Nai{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: Đã có kinh nghiệm dạy gia sư anh văn hơn 2 năm
              <br />
              Gia sư dạy lớp: 6, 7, 8, 9<br />
              Gia sư dạy môn: Tiếng Anh
              <br />
              Khu vực có thể dạy : Bửu Hòa, Hóa An
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"nhiệt tình, yêu thích việc gia sư, không ngại đường xa. Cam kết dạy các em tiến bộ trong thời gian ngắn"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                nhiệt tình, yêu thích việc gia sư, không ngại đường xa. Cam kết
                dạy các em tiến bộ trong thời gian ngắn
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Tran_Ngoc_Phuong_Uyen"
                ez-toc-data-id="#Gia_su_Sinh_vien_Tran_Ngoc_Phuong_Uyen"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên&nbsp; Trần Ngọc Phương Uyên
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Sinh viên trường Đại học Đồng Nai{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                . Năm cuối
              </span>
              <br />
              Kinh Nghiệm gia sư: 4 năm kinh nghiệm. Đã đi dạy khi còn là sinh
              viên năm nhất.
              <br />
              Gia sư dạy lớp: từ lớp 1 đến lớp 8<br />
              Gia sư dạy môn:Toán, tiếng việt, lớp 1 2 3 4 5. Toán, lý lớp 6 7
              8.
              <br />
              Khu vực có thể dạy : Quyết Thắng, Bửu Long, An Bình
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình, năng nổ, có khả năng sư phạm. Đã từng dạy và các em có tiến bộ rõ rệt"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình, chịu khó, có khả năng sư phạm. Đã từng dạy và các em
                có tiến bộ rõ rệt trong tháng đầu học gia sư.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Phung_Thi_Kim_Quyen"
                ez-toc-data-id="#Gia_su_Giao_vien_Phung_Thi_Kim_Quyen"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Phùng Thị Kim Quyên
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Tốt nghiệp trường Đại học Sài Gòn, hơn 6 năm kinh
              nghiệm{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: đã dạy qua các lớp 6, 7, 8, 9. Chuyên luyện
              thi Toán 9 chuyển cấp.
              <br />
              Gia sư dạy lớp: 6, 7, 8, 9.
              <br />
              Gia sư dạy môn: Toán, Lý, Hóa
              <br />
              Khu vực có thể dạy : Long Bình, An Bình, Phước Tân
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình, có trách nhiệm, có kinh nghiệm lấy lại kiến thức căn bản cho học sinh..."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình, có trách nhiệm, có kinh nghiệm lấy lại kiến thức căn
                bản cho các em học sinh học lực trung bình yếu. Dạy kiến thức
                nâng cao cho các em học sinh khá giỏi…
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Thuy_Thuy_An"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Thuy_Thuy_An"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Thụy Thúy An
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Đại học Công Nghệ Đồng Nai, chuyên ngành Ngôn Ngữ Anh{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: 8 năm kinh nghiệm dạy
              <br />
              Gia sư dạy lớp: Lá,1, 2, 3, 4, 5, 6, 7, 8, 9<br />
              Gia sư dạy môn:&nbsp;Anh văn thiếu nhi và anh văn luyện thi lớp 9
              <br />
              Khu vực có thể dạy : Trảng Dài và các khu vực lân cận
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Rất tự tin khi đã làm một việc gì đó. Không bao giờ bỏ cuộc khi đã lựa chọn việc mình muốn làm. Rất thẳng thắn và siêng năng"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Rất tự tin khi đã làm một việc gì đó. Không bao giờ bỏ cuộc khi
                đã lựa chọn việc mình muốn làm. Có kinh nghiệm dạy luyện thi cho
                các em học sinh lớp 9 lên 10. Nhiều học trò đã đạt được thành
                tích cao. Nhận khá nhiều lớp bên trung tâm gia sư Uy Tín Biên
                Hòa của mình.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Nguyen_Yen_Thao"
                ez-toc-data-id="#Gia_su_Sinh_vien_Nguyen_Yen_Thao"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Nguyễn Yến Thảo
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Sinh viên Trường Đại học Đồng Nai{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: Có 3 năm kinh nghiệm
              <br />
              Gia sư dạy lớp: Lá ,1, 2, 3, 4, 5<br />
              Gia sư dạy môn: Toán, tiếng việt, anh văn. Báo bài theo thời khóa
              biểu.
              <br />
              Khu vực có thể dạy : Long Bình, An Bình, Long Bình Tân
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"dạy hoc là niềm đam mê, luôn cố gắng hết sức để giúp học sinh tiến bộ trong thời gian ngắn. hi vọng quý phụ huynh tin tưởng"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                dạy hoc là niềm đam mê, luôn cố gắng hết sức để giúp học sinh
                tiến bộ trong thời gian ngắn. không ngại đường xa. Có thể sắp
                xếp theo lịch của các em học sinh.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Ho_Thi_Thao_Nuong"
                ez-toc-data-id="#Gia_su_Giao_vien_Ho_Thi_Thao_Nuong"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Hồ Thị Thảo Nương
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : &nbsp;Đại Học sư phạm thành phố Hồ Chí Minh{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: Có kinh nghiệm dạy kèm nhiều năm, chuyên Văn
              <br />
              Gia sư dạy lớp:&nbsp;9, 10, 11, 12
              <br />
              Gia sư dạy môn:&nbsp;&nbsp;Ngữ văn
              <br />
              Khu vực có thể dạy : Trảng Dài, Thống Nhất, Quyết Thắng, khu vực
              trung tâm Biên Hòa
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình, có trách nhiệm, không ngại xa. Luôn đổi phương pháp và linh hoạt trong lúc dạy. "}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình, có trách nhiệm, không ngại xa. Luôn đổi phương pháp
                và linh hoạt trong lúc dạy. Có thể dạy luyện thi Văn lớp 12, tự
                tin với kiến thức của mình. Phương pháp dạy đơn giản dễ hiểu.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Dinh_Tai"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Dinh_Tai"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Đình Tài
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : Đại học khoa học tự nhiên thành phố hồ chí minh{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: đã dạy các lớp 10, 11, 12, Luyện thi
              <br />
              Gia sư dạy lớp: 10, 11, 12, Năng khiếu
              <br />
              Gia sư dạy môn:&nbsp;Toán lý hóa lớp 10 11. Toán 12
              <br />
              Khu vực có thể dạy : Tân hiệp, Tân Phong, Biên Hòa
              <br />
              Đặc Điểm Nổi Bật: Đã dạy được nhiều HS tiến bộ trong thời gian
              ngắn. Nhiệt tình, chịu khó, trong quá trình đi gia sư được nhiều
              em học sinh yêu mến.
            </p>
            <p>
              Hơn 7 năm đi làm gia sư và 5 năm luyện thi cho các em lớp 12. Nắm
              rõ cấu trúc ra đề và ôn tập tốt cho các em. Nhiều em học sinh đã
              đạt được thành tích cao trong các kì thi Đại học, cao đẳng.
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Tran_Thi_Bao_Ngan"
                ez-toc-data-id="#Gia_su_Sinh_vien_Tran_Thi_Bao_Ngan"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Trần Thị Bảo Ngân
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Sinh viên trường Đại học công nghệ Đồng Nai{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: 3 năm kinh nghiệm dạy kèm cho các em nhỏ.
              <br />
              Gia sư dạy lớp:&nbsp;1 đến lớp 6<br />
              Gia sư dạy môn: Toán, Tiếng việt, tiếng anh, Báo bài
              <br />
              Khu vực có thể dạy : Quyết Thắng, Tam Hòa, trung tâm
              <br />
              Đặc Điểm Nổi Bật: Nhiệt tình trong công việc và có trách nhiệm với
              học sinh của mình. Luôn tìm kiếm các phương pháp học tiến bộ để
              giúp các em tiếp thu bài tốt hơn. Siêng năng và chịu khó. Có
              phương pháp dạy cho các em nhỏ học yếu, mất căn bản
            </p>
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p> */}
            {/* <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Chiu_Van_Thuong"
                ez-toc-data-id="#Gia_su_Giao_vien_Chiu_Van_Thuong"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Chìu Văn Thương
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : Sư phạm Vật Lý Đại học Tphcm
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                . Tốt nghiệp năm 2011
              </span>
              <br />
              Kinh Nghiệm gia sư: hơn 10 năm kinh nghiệm
              <br />
              Gia sư dạy lớp: 6, 7, 8, 9, 10, 11, 12
              <br />
              Gia sư dạy môn: Toán, Lý, hóa lớp 6 7 8 9. Lý lớp 10, 11, 12
              <br />
              Khu vực có thể dạy : bán kính 10km lân cận An Bình
              <br />
              Đặc Điểm Nổi Bật:
              <span
                data-sheets-value='{"1":2,"2":"- Nhiệt tình, chịu khó, có trách nhiệm với công việc.\n- Có phương pháp giảng dạy phù hợp với từng đối tượng học sinh.\n- Luôn cập nhật kiến thức mới và đưa ra bài tập rèn luyện thường xuyên sau mỗi giờ học để giúp các em nhanh tiến bộ.\n"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                – Nhiệt tình, chịu khó, có trách nhiệm với công việc.
                <br />
                – Có phương pháp giảng dạy phù hợp với từng đối tượng học sinh.
                <br />
                – Luôn cập nhật kiến thức mới và đưa ra bài tập rèn luyện thường
                xuyên sau mỗi giờ học để giúp các em nhanh tiến bộ.
                <br />
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Nguyen_Nhat_Minh"
                ez-toc-data-id="#Gia_su_Sinh_vien_Nguyen_Nhat_Minh"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Nguyễn Nhật Minh
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : Sinh viên Đại học công nghệ miền đông
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: đã dạy qua lớp 6 7 8 và đang làm trợ giảng
              <br />
              Gia sư dạy lớp: Lớp 6, Lớp 7, Lớp 8<br />
              Gia sư dạy môn: Toán ,&nbsp;Lý, Hóa
              <br />
              Khu vực có thể dạy : Tân Hạnh, Hóa An , Bửu Hòa
              <br />
              Đặc Điểm Nổi Bật: Có sự chuẩn bị trước mọi tiết dạy, có trách
              nhiệm, nhiệt tình, không ngại đường xa. Đã có nhiều em tiến bộ và
              đạt điểm cao. Giúp các em yêu thích các môn tự nhiên Toán Lý Hóa.
              Lớp đầu tiên khi còn là sinh viên năm nhất nhận của trung tâm mình
              hiện tại em vẫn đang dạy. Cám ơn trung tâm đã giúp đỡ và tạo điều
              kiện cho em
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Tuong_Vu"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Tuong_Vu"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Tường Vũ
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : Đại học Y dược Huế
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: 12 năm kinh nghiệm
              <br />
              Gia sư dạy lớp:&nbsp;&nbsp;10, 11, 12
              <br />
              Gia sư dạy môn: Toán, Hóa
              <br />
              Khu vực có thể dạy : Thanh Bình, Quyết Thắng, Thống Nhất
              <br />
              Đặc Điểm Nổi Bật: Nhiệt tình, có trách nhiệm, có kiến thức chuyên
              môn tốt. Có thể dạy nhóm từ 2 đến 3 em nhưng vẫn đảm bảo chất
              lượng. Có khả năng quản lí lớp học, truyền đạt kiến thức, giao
              tiếp tốt với phụ huynh và học sinh, có thể tổng hợp kiến thức và
              ôn thi trong thời gian cấp tốc. Thường xuyên cho các em làm bài
              kiểm tra.
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Nguyen_Phi_Hoang"
                ez-toc-data-id="#Gia_su_Sinh_vien_Nguyen_Phi_Hoang"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Nguyễn Phi Hoàng
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : &nbsp;<span className="tutor-info">Sinh viên</span>
              &nbsp;khoa&nbsp;<span className="tutor-info">Sư Phạm Hóa</span>
              &nbsp;trường&nbsp;
              <span className="tutor-info">Trường ĐH Đồng Nai</span>
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: đã có kinh nghiệm dạy gia sư hơn 3 năm
              <br />
              Gia sư dạy lớp: 6, 7, 8, 9<br />
              Gia sư dạy môn: Toán, lý lớp 6 7, Hóa lớp 8 9<br />
              Khu vực có thể dạy : Phước tân, Tam Phước
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình hướng dẫn giảng giải cho học sinh, hòa đồng, thân thiện,trách nhiệm với công việc gia sư. Tận tâm giúp học sinh lấy lại kiến thức nền tảng nhất."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình hướng dẫn giảng giải cho học sinh, hòa đồng, thân
                thiện,trách nhiệm với công việc gia sư. Tận tâm giúp học sinh
                lấy lại kiến thức nền tảng nhất.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Le_Nguyen_Nhat_Thy"
                ez-toc-data-id="#Gia_su_Sinh_vien_Le_Nguyen_Nhat_Thy"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Lê Nguyễn Nhật Thy
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : Sinh viên trường Đại học Công nghệ Đồng Nai, chuyên
              ngành ngôn ngữ Anh{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Đã dạy qua lớp 9,10 . 2 năm kinh nghiệm"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Đã dạy qua lớp 3 5 6 . 3 năm kinh nghiệm
              </span>
              <br />
              Gia sư dạy lớp:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Lớp 6,7,8,9,10"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Lớp&nbsp;1, 2, 3, 4, 5, 6
              </span>
              <br />
              Gia sư dạy môn:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Tiếng anh"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Tiếng anh kèm thêm Toán tiếng việt tiểu học
              </span>
              <br />
              Khu vực có thể dạy : Long Hưng, Tam Phước, Long Bình Tân
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình hướng dẫn giảng giải cho học sinh, hòa đồng, thân thiện,trách nhiệm với công việc gia sư. Tận tâm giúp học sinh lấy lại kiến thức nền tảng nhất."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình hướng dẫn giảng giải cho học sinh, hòa đồng, thân
                thiện,trách nhiệm với công việc gia sư. Tận tâm giúp học sinh
                lấy lại kiến thức nền tảng nhất.
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Thi_Thanh_Thao"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Thi_Thanh_Thao"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Thị Thanh Thảo
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : chuyên ngành Tiểu học Đại học Thủ Dầu Một
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                . Tn năm 2008
              </span>
              <br />
              Kinh Nghiệm gia sư: 16 năm kinh nghiệm gia sư và đứng lớp
              <br />
              Gia sư dạy lớp: lớp 1 2 3 4 5<br />
              Gia sư dạy môn: Toán, Tiếng Việt, Báo bài các môn theo thời khóa
              biểu, Rèn chữ đẹp
              <br />
              Khu vực có thể dạy : Trảng Dài, Tân Hiệp khu vực lân cận
              <br />
              Đặc Điểm Nổi Bật: Nói giọng miền nam dễ nghe, nhiệt huyết với nghề
              có trách nhiệm với công việc. Đã có nhiều năm kinh nghiệm làm gia
              sư tại nhà, giúp các em tiến bộ qua từng bài kiểm tra. Tự tin với
              kiến thức của mình.
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Thi_Ngoc_Diep"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Thi_Ngoc_Diep"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Thị Ngọc Diệp
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường : &nbsp;<span className="tutor-info">Giáo viên</span>
              &nbsp;khoa&nbsp;<span className="tutor-info">Sư phạm Hoá</span>
              &nbsp;trường&nbsp;
              <span className="tutor-info">Đại học Đồng Nai</span>{" "}
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: kinh nghiệm gia sư 5 năm, chuyên luyện thi đại
              học và luyện thi chuyên Hóa.
              <br />
              Gia sư dạy lớp: 10, 11, 12, LTĐH
              <br />
              Gia sư dạy môn: môn Hóa.
              <br />
              Khu vực có thể dạy : Tân Phong, Tân Hiệp
              <br />
              Đặc Điểm Nổi Bật: Nhiệt tình, có trách nhiệm với công việc gia sư,
              không ngại đường xa. Đã dạy cho nhiều em tiến bộ trong thời gian
              ngắn. Có thể dạy cho các em học sinh giỏi và có năng khiếu. Có
              kinh nghiệm luyện thi cho các em học sinh thi Đại học cao đẳng cho
              các em học sinh lớp 12. Thời gian có thể sắp xếp tối sau 7h30 và
              cả ngày thứ 7, CN.
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Tran_Quang_Khanh"
                ez-toc-data-id="#Gia_su_Sinh_vien_Tran_Quang_Khanh"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Trần Quang Khánh
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường : Sinh viên trường Đại học công nghệ Đồng Nai
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Đã dạy qua lớp 3 4 5 8 9 10 11"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Đã dạy qua 2 hs lớp&nbsp;7 và 2 hs lớp 9. Hơn 2 năm kinh nghiệm
              </span>
              <br />
              Gia sư dạy lớp:&nbsp;
              <span
                data-sheets-value='{"1":2,"2":"3 4 5 6 7 8 9 10 11"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                6 7 8 9
              </span>
              <br />
              Gia sư dạy môn:&nbsp;
              <span
                data-sheets-value='{"1":2,"2":"Tiếng Anh, Hóa Học"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Toán lý hóa
              </span>
              <br />
              Khu vực có thể dạy : Phước Tân, An Bình
              <br />
              Đặc Điểm Nổi Bật: nhiệt tình, có trách nhiệm với công việc gia sư,
              không ngại đường xa. Đã dạy cho nhiều em tiến bộ, sắp xếp theo
              thời gian của phụ huynh.
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Sinh_vien_Truong_Khanh_Nguyen"
                ez-toc-data-id="#Gia_su_Sinh_vien_Truong_Khanh_Nguyen"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Sinh viên Trương Khánh Nguyên
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nam
              <br />
              Học trường :{" "}
              <span
                data-sheets-value='{"1":2,"2":"Đại học sư phạm Toán - Năm 2"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Đại học Đồng Nai, chuyên ngành sư phạm Toán – Năm 3
              </span>
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Kinh Nghiệm gia sư: Toán, Tin học
              <span
                data-sheets-value='{"1":2,"2":"Luyện thi ĐH. 1 năm kinh nghiệm."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                .
              </span>
              <br />
              Gia sư dạy lớp:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Lớp 8,9,10,11,12"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Lớp&nbsp;6 7 8 9
              </span>
              <br />
              Gia sư dạy môn:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Môn Toán"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Môn Toán và tin
              </span>
              <br />
              Khu vực có thể dạy : Bửu Long và khu vực lân cận
              <br />
              Đặc Điểm Nổi Bật:{" "}
              <span
                data-sheets-value='{"1":2,"2":"Nhiệt tình, trách nhiệm cao, tận tình..."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Nhiệt tình, trách nhiệm cao, tận tình…
              </span>
            </p>
            <h3>
              <span
                className="ez-toc-section"
                id="Gia_su_Giao_vien_Nguyen_Thi_Bao_Ngoc"
                ez-toc-data-id="#Gia_su_Giao_vien_Nguyen_Thi_Bao_Ngoc"
              ></span>
              <strong>
                <span style={{ color: "#008000" }}>
                  Gia sư : Giáo viên Nguyễn Thị Bảo Ngọc
                </span>
              </strong>
              <span className="ez-toc-section-end"></span>
            </h3>
            <p>
              Giới tính: Nữ
              <br />
              Học trường :{" "}
              <span
                data-sheets-value='{"1":2,"2":"Cử nhân SP vật lý tốt nghiệp 2016"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Cử nhân SP vật lý tốt nghiệp 2016 trường Đại học Đồng Nai
              </span>
              &nbsp;
              <span
                data-sheets-value='{"1":2,"2":"ĐH Cần Thơ - Đã tốt nghiệp."}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                . 6 Năm kinh nghiệm
              </span>
              <br />
              Kinh Nghiệm gia sư: 10 11 12
              <span
                data-sheets-value='{"1":2,"2":"6,7, 8 ,9 và luyện thi đại học"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                &nbsp;và luyện thi đại học
              </span>
              <br />
              Gia sư dạy lớp:&nbsp;
              <span
                data-sheets-value='{"1":2,"2":"6,7,8,9,10,11 và 12"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                10 11 12
              </span>
              <br />
              Gia sư dạy môn: Toán lý lớp 10 11.&nbsp;
              <span
                data-sheets-value='{"1":2,"2":"Toán - lý, tin học cơ bản"}'
                data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
              >
                Lý 12 và luyện thi Đại học
              </span>
              <br />
              Khu vực có thể dạy : Long Bình Tân, Long Hưng
              <br />
              Đặc Điểm Nổi Bật: Có phương pháp tiếp cận tốt với học sinh, tài
              liệu biên soạn cẩn thận phù hợp với từng đối tượng học sinh. Trong
              quá trình dạy được nhiều em học sinh yêu mến. Có phương pháp dạy
              cho các em học sinh tiếp thu chậm. Tự tin với kỹ năng sư phạm của
              mình.
            </p> */}
            {/* <figure
              id="attachment_1354"
              aria-describedby="caption-attachment-1354"
              style={{ width: "725px" }}
              className="wp-caption aligncenter"
            >
              <img
                loading="lazy"
                decoding="async"
                className="size-full wp-image-1354"
                src="http://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/liên-hệ-tư-vấn-gia-sư-Biên-Hoà.jpg"
                alt="Liên hệ tư vấn gia sư Biên Hoà"
                width="735"
                height="279"
                srcSet="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/liên-hệ-tư-vấn-gia-sư-Biên-Hoà.jpg 735w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2016/02/liên-hệ-tư-vấn-gia-sư-Biên-Hoà-300x114.jpg 300w"
                sizes="(max-width: 735px) 100vw, 735px"
              />
              <figcaption
                id="caption-attachment-1354"
                className="wp-caption-text"
                style={{ fontSize: "75%", paddingTop: "5px", opacity: ".8" }}
              >
                Liên hệ tư vấn gia sư Biên Hoà
              </figcaption>
            </figure> */}
            <br />
            <h2>
              <span
                className="ez-toc-section"
                id="11_Lien_he_Trung_Tam_Gia_Su_Bien_Hoa_de_duoc_tu_van_mien_phi"
                ez-toc-data-id="#11_Lien_he_Trung_Tam_Gia_Su_Bien_Hoa_de_duoc_tu_van_mien_phi"
              ></span>
              <span style={{ color: "#008000" }} id="Lien-he">
                4. Liên hệ (Zalo, Facebook, địa chỉ nhà){" "}
                {/* <a href="/" style={{ color: "#008000" }}>
                  Gia Sư Biên Hòa
                </a>{" "} */}
                {/* để được tư vấn miễn phí . */}
              </span>
            </h2>
            <br />
            {/* <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                – Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Uy Tín Tp Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. Nhấn link tại{" "}
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                    đây
                  </Link>
                </strong>
              </span>
            </p> */}
            <p>
              <span style={{ color: "#ff0000" }}>
                <strong>
                  <span style={{ fontSize: "25px" }}>Hotline tư vấn </span>
                </strong>
              </span>
              <span style={{ color: "#1b78e2", fontSize: "25px" }}>
                <a href="/">0975 248 259</a>
              </span>{" "}
              <strong>(Bấm vào số để gọi)</strong>
            </p>
            <p>(Làm việc 7h- 22h từ thứ 2 đến Chủ Nhật)</p>
            <p>
              Websites:{" "}
              <a
                href="https://www.giasugioibienhoa.com/"
                className="text-[#1b78e2] hover:text-cyan-800"
              >
                https://www.giasugioibienhoa.com/
              </a>
              <br />
              Mail: giasuuytinbienhoa@gmail.com
              <br />
              Địa chỉ trung tâm gia sư Uy Tín Biên Hòa – Đồng Nai:
              <br />
              <span style={{ color: "#ff0000" }}>
                <strong>Cơ sở 1:</strong>
              </span>{" "}
              1334/10 khu phố 3, phường Tân Tiến, Biên Hoà, Đồng Nai (gần
              Cooomart Biên Hoà)
              <br />
              <span style={{ color: "#ff0000" }}>
                <strong>Cơ sở 2:</strong>
              </span>{" "}
              132/7 Bình Chuẩn 19, Thuận An, Bình Dương
              <br />
              {/* <span style={{ color: "#ff0000" }}>
                <strong>Cơ sở 3:</strong>
              </span>{" "}
              66/107 Đường Nguyễn Thái Học, Trảng Dài, Thành phố Biên Hòa, Đồng
              Nai */}
            </p>
            {/* <p>
              <img
                loading="lazy"
                decoding="async"
                className="aligncenter wp-image-1461 size-full"
                src="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa.png"
                alt=""
                width="941"
                height="479"
                srcSet="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa.png 941w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa-300x153.png 300w, https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2023/10/trung-tam-gia-su-Bien-Hoa-768x391.png 768w"
                sizes="(max-width: 941px) 100vw, 941px"
              />
            </p> */}
          </div>
        </div>
        <div className={styles.carousel}>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div className={styles.slide}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHHhICo9Gm_mK_xoq0Sy6QXnxk_GoJFgK2Q&s"
                alt="Giáo viên giỏi toán"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.title}>Giáo viên giỏi toán</h3>
                <p className={styles.description}>
                  Đội ngũ giáo viên giỏi toán sẵn sàng giúp bạn vượt qua mọi bài
                  toán khó khăn.
                </p>
              </div>
            </div>
            <div className={styles.slide}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_OLhU8gnFJOP2LbkbDbjCD3CYaqYqVjnPg&s"
                alt="Giáo viên giỏi văn"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.title}>Giáo viên giỏi văn</h3>
                <p className={styles.description}>
                  Giáo viên văn học sẽ giúp bạn nắm vững mọi kiến thức văn học
                  từ cơ bản đến nâng cao.
                </p>
              </div>
            </div>
            <div className={styles.slide}>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEhIVFRUVGBUVFRUXFRUVFRUVFRUWFhUVFRYYHSggGBolHRUVITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGxAQGislICYwLS03LzUtLy0tLS0tLS0tLy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xABFEAABAwIDBQQGCAIHCQAAAAABAAIRAyEEEjEFQVFhcQYigZEHEzKhsdEUI0JSYpLB8ILhM1Nyc6LS8RVDRGODk6Oywv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAgEEAQMEAQUAAAAAAAAAAQIDEQQSITFREzJBBSNhcSIzYqGx8P/aAAwDAQACEQMRAD8A9PAWYCAFkuAbwCyCQCyCYgTQmmiIwnCSyCkAIQhAhoQhAwQhCABCaECEmhCYCQmkkMEIQgASTQgBITSSASITSSAxKE0JDMShMpJDEkmkUgEkmhAGIWQSCYUgMgmkmECGmEkwpCGmkmmAIQmgAQhNACTQqza238Lhf6aqAfujvP8Ayi48UwLNC4PEelTBtMNpVnc/qxPgXyr3sr2sobQDsgdTc3Vj8uaDo4FpIIT2tLIYL9CEJCBCEIAEIQkAkJoQMSEISASE0kAIoTSSASRTSUSQkk0kgEhEIQBiFkFiFkpACySQgQ0wkmpCGmEgmgBoQhMBoJQuU9J20nYfAVchh1SKQPAO9qP4QfNCGlk4/tn6SXPqOoYN+Wm2Q+sPaqHf6s/ZZ+IXO6BBPGYgOeBJiZJJuSTvPFUGGcA7NY8zu8PmrvDYwFtru3uPwn99FsjBRJZIeILGCIJ8B8CE9nbYdQeH0axpPEEESLjc4GxHK45LTtSnHEnW+7wVQ5pnT/RWqKfZW3g999Hvb12NcaOJDGVQJYW2FQb7E69OOi75fKeAlhBBLSCCIsZG8c19R7NxjK1NtRjg5rgLjesdsFF8D+MklCEKsiCEISGCEIQMEkISAEk0kACSaSQAkmsSkMEk0lEYoQhCAME1impAZJrEJoAyQkmmIacrFMFMRkmsUwgBryf03ba/o8IBpFZ53XD2taPInyXpm1NpUsNTdVquDWN1PwAGpPILwHt3tpmOxL6wloLWtaHRo3SYnUyfFW1LMhrycr60c/NWGFxjWC46DXx681VhsXkcljmJM/zW7aGTqKdanV1HMqM3BTndGug+60TZV1EPa3Po2fNSsNtEggHelkWDXTpnP0gdNV9A+jhsbPw5giWAwb20aRyLQ0ryDsxsZ+Oq5GghgIL3xYNHDmbwvfdmUG06VNjBDWsa0DgGiAPcslzy8E5LESShCFUVghCEgBCEIGJCEJACSaSABCEkgBIprFRGCSaSQxIQhAGqU1inKYGSEpQgDKU5WKcoAyTWErKUxGQVbtvbmHwjM1ao1k2aCe848GtF3HkFPqVA0EnQX/c6LyLt12va6oTR1a0N9Z3Wj7UZC9pc8d+ZAANt1zOMXJ4Q0vJU9tu2D8ZVyhrmU6dw11iSdC4bum5ee42u5zieJUytWJmXFziSXE6knieqr3CYG+66NUFFELJZ4Oh2rsOi2kypTc/NUYKgYYILSZgReQ256FbOynZ1+Kdpla3fx6K37MYxzcO2lWpk5CTSePaaCTLXA6iHOEg6GIIAXX7CoijMRczbgqpWPDRdGtNpnJ9ptjGk1rGNOUDrJWGwuxdaqWuqUqrWuMk5csNHDNFzdervwYqtlhDXagwDB6JYXCYkD6+rTLWzAaxwLjoJJcYG+I3KlTeC5xWTVkw+Dotose3DtMS4luczAGUutmJgSZ6Lp9jMa2hTDA4DKDDpzXuS7NeSZMnWVBZTa8M7oc7QEgEgjfyVy1sADhAVbZVazJCElEpBCEIAEIQkAISQgAQhBSAEkISGJJNJIYJISSAJSTSQBplErFEoGZyiVhKcoDBslCwBTBQIzTBWEraxu9X0UStlhFdtsa1lkHamDNdrWSMmYGo0iRUYA4hnQvyE8QCN68+7R+j5uStXfVqVKr3FwytAAF4YG3tfXluXqZcForCRC7VGkhWvLOVbq5y64R4TS9HlcgZnhsgSAO8PE/JbW9j2UTYTG8r13F7ODtDlI0PmqbE7IqHWDzC52pco2OK6O1o2p1RlLs4dmFIcBFgugwJA7pUirshwI7qjYvDuYFlUzXtL/BOLdDZZ47E03x9cwObPdJEX4iQZXObHx1Uk5x3Rod8c10VXDgjMQdw4TOgMLRXU7faim2+FPNjwTMBXflbBHIgRPHXcr6jUzDmqahTDSeDGgfq74BWGCeSY5X6ncuhqNLCNPHaOFVq5WX5fTJsoSQuMdUaEkIAaSEJACaxlBcAYkTrG/wAkYb5AaFWbT2/hMMYrVmMOuW5d+VslV2G7c7NqODBiWgkwM4cwE8JcAEbW+cAdGklmCFEYIQkkMCkhIpACEkIGRpRKwlOUAZyhYSnKQGcpysJSMmw8eitprdk1FELbFCLkzcwrbm4rUCGqNWxEz0XpKdPGuO2JwLr3J5kSPWXPABOmSVAw9fMXcIaPGMx9xarKgLK+SwZ4S3DpMB14LGpRAWxgTcVyNXDE8+TvaGzNePBEfQBUHEbPa7crYkLVUWFwydFWYKAbJAI636Dd+isHUZy8iD5X/Qealso+Z/cLTtDu0zFjZo6uIE+9dvR0+lDD7Z5z6hqPWs3fCMAC4xu9oxvO7oNFPwjYPgoWHFhGnH5KbhxBUta/tSK9EvuJkmUSlKJXnDvjQkhLIDUXaO0KWHpuq1XhrG6k+4AbyeCkErwvtz2pONxByOPqKRLaQ3OOjqpG8mIHAdSrK4b5YB8Hc0PSTQrVfUepqMY8tbTqnJZxdGZzfstEh030Oi8/7RekjaFV1SnTqtpMDnNBpCHvaCRmNS5vEy2NVLo4tuEoV6feFd/qsrwYLIkvgxIEWPVcPR2cc3e0C3ww44S4IzWzvslU6rg3M8kzedSTxM6rW0Z7yI8PIyni6hkN0HHcVKp0C0WYTPW46q3jop5Os7J9va+Eb6pzDWpDRsw9g/ATqORtzC9a2FteljKLa1Iy124xmaRq1wBseS8H2ThnBtYupOa00nZXOaYmRYE2vccV0foU2nU+lV8OfYew1YtZ7HNbI5EP9wWLUUrDki6EvhnsqRQkSsJYBSKCkgYIQhAEKU5WEqPSxrXPdTuHN3G0jcW8QpRhKWdq6FKajjPyS5QCsJTlQJGxolN1ZrNT8kBjgJAk8OI3hPK1wzMOu4/I713vp+mUI75LlnF12pcnsj0RKtabyOigbRxPqqb3nQNcZUyseXuVbjcKKtOpNmNY8ncC4NMA8gYJ6RxXSstjVHdI5ca5Wy2okdm3ZqFMk3LWuM6y4Zv1jwXQUXTZcpsDH4cta19iAAOEDRdU1o1aU5vJKpbeDc4LU9y2ZlHrED+VlQ61NYkjQrZVvMWa67BxPwTosHX98U2Mm7tFIo3vu3IjTXDpBO+23iTGGqu2o3MWNmwOc8w0QB+Zw8lZvKr6DC+q9+5sMb1El5/xAeBVkfJVYsraOi07xHlot9J8OjfC2OaVhTaJJ8PDX9Vl100qXk16KH3EbpRKxlMLzyy+EdwaFlliOv6KNtCrlYSPDmdAPOFthopNcvBW7Ecx6T9tHC4J4aYfV+qbx73tEfwz7l4N9I9WWmJylpj71wSPHRdl6TMa6piGUy4uyjedC7+QB8VyeyMH9IxFKnue8Dwkn4K2FSqTH7mkX2PrPrNFX1L4MmYO/QTEkAWVGMfFizTivffojKdGMogACI3LxLtdhCKtQkAEEiAI8Y3DmVGmeeC2+v5McPiGkWA6blC2h6xuhIB3AmFWYbFlhV8HB7LrSkY2yNgto1HNewuJBbpzFx8Auq9CTHOx1R8WbRcCb2zPZHLcdeHJc1g8OGXO/wCC9b9EeyvUYNzyBNao50/gYcrPg4+Kz6l7YY8llfLyd1KRRKRXMLwQhJADQsZQkBXytdSm0ua6BmbOU7xOo5hZSqrFbRoubLnlrXWa6csjc5pKnCLZNJN4ZcNOYSPET8Ew4tMluYb4dDh/CRB85VLgxVbdlZlVhFp7rvMSD7lJbtHvBtRpZmOW83PAEG600qNctzWf2Ru07sjhPBdUq9MzldpqLhw6tN1V43ENYc32HWfyJsHj4Hz4rTjMaA/I72mjMx29waBmA/EAQY3g87Rqo+kNc1hHebd2rQHSJ662XpHKMI75Pg8liVk/TXZLbRL3RJyjW58gt+0aAdReycgym+4AXM8rLZgcMWsawZnZQBMG/NaNslzab2eqquLmOHdpvIEtIEkCP1XntRqJ32prpPg9DptNGmvD7xyc5sASJLR14LrcHXgarj9j0KjhqQArRtV7TlbLzwaC4+QXolzHk8+1iTwdSK4IWo1GC5VD9McDBBB+64EHyKk0Xl2uiaiiMrH0WdNxqHkpbqwbYKlrbUa3uU7neeCKDHkZnGEOGewVmOuy0q4oAXsBqsNnPa2mCbZpdfWXHMbcbrmNpbTa+oyg0zndlcZ3akeQXWYfD/fMnho0cg35ylNKKCuUpSMziWHeR1DmjzIWFM3P7/eq2uw7dwy9Lf6+KguxIpgh2oJAA+0LEEcBBHTTgudr/wCi8HT0Kl6uJE9jCVua2FT7N2r9ZkqEAP8AYGkObJIvrIv/AAq1dXabAieCz6SuCjuXZ1LVJPDHWfaevwVPtivYToC0noIJ+a34/ElrXDx+aodsYsOLWA3dkj+IX9wctpWkePdr6+bG1jOjsviBlPvDlF7J1xTxdF53OE+8H4rpewO0Nn1sZiKOLpNd9Kz+rqu9puYuzMbua4gggi8gidFDp9kcRQxtaiWkimC+nUg5XtLhlIItMEyOMrNOGV+yVc/uYx0es4uuyrSIze0CD0K4PtRsapiac901QIDwf6Vo+9wP6qzwQqZQJJ3OYReNDEjUe/3qwxGLFRoDgGxqYifDcsahOL4R0pbJLDPCamHcLkEXIuDqNR1UjD4tzen70XX9s9sUKUsY3O47iPqxG8yNb7vNcW0Z76b4WuLbWWjnzgk8Jk52MLvFey+iDa3rsI+kdaFQgf2Hy5vvzjwXhpJGgv8ABeueg3CGnQxNZ9g57G3/AOWxzif/AC+5U3VuyOEEOD1FCiYfaNJ+joPB1j8j4FSiuWy9poEilKSiA0LFCAKfHBxpVAyMxY8NnTMWkCfGFz+zsTVY1oZENAaWFxDu6IIAiD5hdVh6BeYGm88FY0MJTYSWtAJ1MCT1K26eEpRx8EXYoSycscQIzPbB4jKHeOU36GVIwuGq1XAmTTBBHdBe4g/hIA6x5rp20wLwJ6Afot0nifNao0rPIpahtcIrNkbIZTzAte8Zi9nrg176ZI7wFQjMRc6ybm5VrSwzGiGsa0DcAAPcksgFp3ZWDHtSeTaGrErUabTyPESD5hZl8C5k6DQE/wA0ZHgibQ2fTrC7sjjHeaWh3MGbHxFlIwWBp0W5abco1OpJPFzjdx6rWKYNy0eN1sbSA0EdCR8Cn6jxgj6UU845Ntak14hzQ4cCAfiq/EbDoPEQ5v8AZe4fGynhxCefkmrGumRlTGXaKij2boM0L/Et/wAqh4+nTqQ0GoAdAC2XeGWQPFTds7ap0QQ6RuJkCJtKpW7Qe8TTYY+84lrT1eRJH9kFUXaufUZF+n0FWMyijPB7Cw9OoKoYQ9slpL3uiRGhOU68FYfTHtMZj+niNFppDRznZjuDZyjoNXHmfcteMeNSIjXf8FllbZLuTNcaKodRRcDEB4adMwNubYDgPzBcm/FA4utfQtaBwytAP+LMjEbddnwTWsINWsXZHAte3DltVj3ua67fZDoOkhbn9mX4rFVcRSrhjczGkFheHFtKnmIIcI3DwK22qU6kn2YadkL210WDS1wusKmDzCMxHAg3aeLTuKns2FVaPaY78zfmk7Z2IH2Wno/5gLEq7YdHQ9WuXbK6vgqj25TUnW5An3Qq7E7Be7SrEUvVA5JghpaH+1zmOWqvhQxAN6Lz0NM//S2OeYvSqD/pvPvAIVincRfp/g5fsd2IwmBdmY0vqR/SvILxybaGDoJ4krrK5rT9WWnix4iebXDS02g+Cgf7RpUycwe2d/qa0eeRM4lxaQwioCDldcFp3BxAv5Ta/FRUZN8g9q6MauCD5fEFxJPIyfBVG0dnPdZgI58RwMqxw+GxkWdSHLvx1JiVKdhMXq51LLaSC8kDeYgTZdJYisMzb8s8l7WdmHNc52UvOR5OVpMRF4Gg7y87NSpSdFRrmng5paQDvgr6kD2MjK3MDvkXPEz8FD2ph8PimZcRQY8SY9Y0EjpmHwWWVvPRJpP5Pm2ltMAHuiSbDgOC9g7P7UFLCUqDGkuPfqZQSATcgnrH5V0WE2LgaPsYamz8TaQH/qJVrhcNRd7Hva4e8gKmyx4aSLa4KLyygomo/wCxHX5BWuDNWn9qR906eHBWgwg3R+qyqYCG5ibcN4WJwS7Zolcnw0KjWDhI8RwKzJUJuJoMMZoJtoRPQxBWTsW0ECdbatSjRKfs5KZvZy08folIRl5t80KhtJ4bI+pHyRKfaCg0QKVYD+6csa/a3DMEuZXj+5efcAttLET1WOIrQPFdWE20sP8AwUtJdoranpEwLdW1/wDsVB8QtlLt7hHkhrKpI17kfErb64cFJpOBJsPJWPdjsX8fBFPbWh/VVfJn+ZaKnbVv2abuhA+OdWppMOrG+QWt2zqJ1YPh8FVm3yS/h4K3aPbcMpZqdFxqmQGvIYwEEiS4SSN9hv3Lybb+F2nj6wxFXFtzsM02s9YxlLh6uBY89ea9lx+Ao1G+rcwFo0HDmDuK4raPY7EioBQqnId7newPxDf4LTXl+5lNkse1F52S7V4kUsmPpk1GQG1acFtUcXC2V3G0H3K4b21wm/OP4f5qNsfYNPD0yz2y723OuXfIclK/2ZQ/qqf5G/JNpEd0n4Ee3ezxrVI/gd+izZ262Yf+IA6teP0SGAoD/dU/yN+SzGGoj/dU/wArfko8kkys2ztvZuIEtxVIOAMSPnoVyrdstDvrKzniL5MsT1urztDjA2WU2sbb7gF+RXL/AELM76xpHMSb8/5KicE3yaqrJRWDo9n7ep5JpuawTBzv78C2hvHkpmI2pQcGsY4uc/2nsN2galpB7vgufwuzQG9wB4k3Ive9zr5q72ZgKbGhwblJtHLkqJ4j0aE3KPJnTo/WUzOZtW0kd8XdYnf7Nwu22Y+lTYG5mgmbSByFugCo6WHa0U3RfvO8TIHuJPitVak14IcJ4z5rV6kq61J8nOUYyscUdZ9Kp/fZ+ZvzTFZh+038wXEYTY7A8vN7Q0HdPtE8eHmtz8K0GQBP70WiuTlFNkpVpPCZ2eZvEeYTkcV5ttLDEhxjl7lUbWY5hJYS0wAI5tgW6keSnjgjs/J7AgheN9ku0YrHJUgVI3TDhx5HkumrPqT9W3MeJNh0A1KoduH0WqjPTO9LOS11MO06j4rxnFbTrMe8ZzZxA7xGh33WmntfEyHCo6x3Pdu9yt3rBD0JHo+08CYzNsGSQc+4Tui+9acBiswhzhujcqVu3HAG5e38PeHiNyhs2rmeRTGUCNSRMibDRVZi30N1/LOlxja4vTaHcZJ5cTBU3C40Fn1lB0xctaLHq1c0NpVspyniN8j9Cns3a+LpFwyh5sbmCOo5quemjLnJGuuKluy/1k17UYHtY4vZTc10+sLScwj2XGwjQ3O5XmCx9YU25S14Ed8d6YG+CqnGYnE1qjqoaxuZuVzNREQXGQJJnmovZ/AYzDgCjUDuAqCbX3tjidYWTUaSh15j7vz0brNVGSUeMf6ZK2lWDjDxVJc/MwNhoLuLHSOOkp7Lo0MQ4lj3te1xBa+QQ4G4sSNVV4/CYnIBWLixr84LWnuOg3Jabaneqgvp06hAqBr3Gbsewv4ltTQ9YWnR6G6UeEsfgrn9Tqgtu7H/AHg7jFhtN5Y9zcw1vxvPvQqOnXeQCWk88zTPiktL0H9iMq+q6THaOjrDum8W1Gsi4VZtDbJawSyTI0IHxSQuRVNp8GtRT7McDtsb6fS8qwwW2KdSo8Na4AOIkxcgmd/JCFrc3tIuuKLP1rQJP7lbQ9NCvUVhGNzZVYvHBs3A8z7oHxUTDbZY0OnNBIaSQCe9o6OoNkIWtVx25MM75qeCzbVIExI3EG3kUfSRw95+SEKUK4tjsulGOUYvxI+771FG0LwWjzKELSqIeDDLVWv5Ie0aTXxmaI4j3SoJw7miAQWncdPDghCxayuMcYOr9OtnNNSecEmi0SABHjI81dYWgHQTccOP8kIWOqEZ2JM26icoQyiXWI1UKpYeN/IIQp6/iozaPmw1teQpTnSEIWfQzk8xfRtuS4ZDxbO5HD5hUO1qdxxmfIE/GEIXTRSzk+z20aOEbXcW5q1xTt3SNB0g3VPh8bUc+S50uMkhxFzdCFVN8IhVHE2XNHD75nkeJ3niplfDinF+qELPnk3NcG2pLSXBxINx+/BbaGJY53fBncR7XjuQhWOKM+eCfQxTZDQXQbDM0RM8jPiuX7Qdn3U6/wBJbWiX+z3gTILoztIIENI6AIQqpzcZJIjFJps67ZuPf9HFRzA4hwZnzGdJvvPW5VtgMZUzOim1otbMSZjWZQhUahLHKKIxW9k51SpOaLxHtHQ8eKhU6REdxgiwgaJIRp5uK44LowjnOCSAePuQhCt9SXkl6cfB/9k="
                alt="Giáo viên giỏi anh"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.title}>Giáo viên giỏi anh</h3>
                <p className={styles.description}>
                  Học tiếng Anh với đội ngũ giáo viên tận tâm, giúp bạn giao
                  tiếp tự tin và hiệu quả.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
      <Zalo />
    </>
  );
}
