import React, { useState } from "react";
import Header from "../../Header/Header";
import styles from "../Home/Home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";  
import Zalo from "../ZaloSupport/Zalo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Register from '../../Components/RegisterCourse/Register';
import { Carousel } from "react-responsive-carousel";
import img2 from "../../assets/bien-hoa-vo-van-kieu-toc-dep-tre-trung-cho-phu-nu-trung-nien-6.png";
import img1 from "../../assets/QC1-1024x1024.jpg";
import img3 from "../../assets/imgathomepageconfirm.jpg";
import img4 from "../../assets/doingugiasuathomepage.jpg";
import img5 from "../../assets/belowdangkideduoctuvanmienphi.jpg";
export default function Home() {
  const tableData = [
    {
      class: "Lớp lá 1,2,3,4",
      studentPrice: "1.1 – 1.5 triệu/tháng",
      teacherPrice: "1.2 – 1.6 triệu/tháng"
    },
    {
      class: "Lớp 5,6,7,8",
      studentPrice: "1.2 – 1.6 triệu/tháng",
      teacherPrice: "1.8 – 2.2 triệu/tháng"
    },
    {
      class: "Lớp 9,10,11,12",
      studentPrice: "1.4 – 1.8 triệu/tháng",
      teacherPrice: "2 – 2.4 triệu/tháng"
    },
    {
      class: "LTĐH",
      studentPrice: "2 – 2.4 triệu/tháng",
      teacherPrice: "2.4 – 2.8 triệu/tháng"
    }
  ];
  const tableData1 = [
    {
      class: "Lớp lá 1,2,3,4",
      studentPrice: "1.7 – 2.3 triệu/tháng",
      teacherPrice: "1.8 – 2.4 triệu/tháng"
    },
    {
      class: "Lớp 5,6,7,8",
      studentPrice: "1.8 – 2.4 triệu/tháng",
      teacherPrice: "2.7 – 3.4 triệu/tháng"
    },
    {
      class: "Lớp 9,10,11,12",
      studentPrice: "2.2 – 2.8 triệu/tháng",
      teacherPrice: "3 – 3.6 triệu/tháng"
    },
    {
      class: "LTĐH",
      studentPrice: "3 – 3.6 triệu/tháng",
      teacherPrice: "3.6 – 4.2 triệu/tháng"
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
          <h1>TRUNG TÂM GIA SƯ GIỎI BIÊN HÒA</h1>
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
                  {/* <li>
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
                  </li> */}
                  <li>
                    <a
                      href="#3"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById("Quy-trinh-dang-ki-thue-gia-su");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      3. Quy trình đăng kí thuê gia sư 
                    </a>
                  </li>
                  <li>
                    <a
                      href="#4"
                      onClick={(e) => {
                        e.preventDefault();
                        const section =
                          document.getElementById("Lien-he");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      4. Liên hệ
                    </a>
                  </li>

                  <li>
                    <a
                      href="#5"
                      onClick={(e) => {
                        e.preventDefault();
                        const section =
                          document.getElementById("Danh-gia-phu-huynh");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      5. Đánh giá của phụ huynh
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
              <strong style={{ color: "#0000ff" }}>
                Dành cho học sinh từ lớp 1 đến lớp 12, từ cơ bản đến nâng cao.
              </strong>{" "}
              <span style={{ color: "#0000ff" }}>
                <strong>
                  <em>
                    Luyện thi chuyên sâu: Đầu vào lớp 10 trường THPT chuyên
                    Lương Thế Vinh, trường điểm (Ngô Quyền, Trấn Biên, Nam
                    Hà,...); luyện thi đại học các khối, vào các trường Đại
                    học lớn, luyện thi các chứng chỉ MOS, IELTS, TOIEC,...
                  </em>
                  ….
                </strong>
              </span>
            </p>
            <p>
              Với dịch vụ gia sư 1 kèm 1 chuyên nghiệp, chúng tôi cam kết tiến
              bộ rõ rệt chỉ sau 1 tháng với lộ trình học tập được cá nhân hóa,
              phù hợp với từng học sinh. Học ngay tại nhà, lịch học linh hoạt,
              phù hợp với học sinh và gia đình.{" "}
              <span style={{ color: "#0000ff" }}>
                <strong>
                  Tư vấn miễn phí lộ trình học cá nhân hóa phù hợp với năng lực
                  và mục tiêu của học sinh.
                </strong>
              </span>
              <img
              src={img3}
              alt=""
              />
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
            {/* <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Giỏi Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới. 
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                  
                  </Link>
                </strong>
              </span>
            </p> */}
            <h2 id="Doi-ngu-gia-su">
              <span
                className="ez-toc-section"
                id="2_Doi_ngu_giao_vien_va_sinh_vien_lam_gia_su_tai_trung_tam_day_kem_Bien_Hoa"
                ez-toc-data-id="#2_Doi_ngu_giao_vien_va_sinh_vien_lam_gia_su_tai_trung_tam_day_kem_Bien_Hoa"
              ></span>
              <span style={{ color: "#008000" }}>2. Đội ngũ gia sư</span>
            </h2>
            <p>
              <ul className="list-disc ml-0">
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
                {/* <li>
                  Báo cáo tiến độ hàng tháng giúp phụ huynh dễ dàng theo dõi sự
                  tiến bộ của con.
                </li> */}
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
            <img
              src={img4}
              alt=""
              />
              <br/>
            <h2 id="single">
              <span
                className="ez-toc-section"
                id="%E2%80%93_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
                ez-toc-data-id="#–_Dang_Ky_De_Duoc_Tu_Van_va_Hoc_Thu_Mien_Phi"
              ></span>
              <span style={{ color: "#800080" }}>
                Đăng Ký Để Được Tư Vấn và Học Thử Miễn Phí:
              </span>
              <img
              src={img5}
              alt=""
              />
            </h2>
            <p>
              <span style={{ color: "#0000ff" }}>
                <strong style={{ fontWeight: 700 }}>
                  Quý phụ huynh điền đầy đủ thông tin bên dưới. Trung Tâm gia sư
                  Giỏi Biên Hòa sẽ liên hệ tư vấn cho quý phụ huynh trong
                  vài phút tới.
                  <Link
                    to="/register"
                    className={styles.linkto}
                    style={{ color: "#0000ff" }}
                  >
                  
                  </Link>
                  <div>
                <Register showHeader={false} /> {/* Không hiển thị header */}
              </div>
                </strong>
              </span>
            </p>
            {/* <h2>
              <span
                className="ez-toc-section"
                id="4_Bang_gia_gia_su_Bien_Hoa_%E2%80%93_Lien_he_tu_van_0961_328_357"
                ez-toc-data-id="#4_Bang_gia_gia_su_Bien_Hoa_–_Lien_he_tu_van_0961_328_357"
              ></span>
              <span style={{ color: "#008000" }} id="bang-gia-tham-khao">
                3. Bảng giá tham khảo
              </span>{" "}
            </h2> */}
            {/* <p>
              Bài viết này Trung tâm gia sư Giỏi Biên Hòa xin cung cấp tới
              phụ huynh học sinh bảng giá thuê Gia sư dạy kèm
              tại nhà Tp Biên Hòa uy tín dạy giỏi năm 2025. Quý phụ huynh tham
              khảo để lựa chọn gia sư giỏi cho con mình phù hợp nhất:
            </p> */}
            {/* <h3>
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
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                  >
                    Khối Lớp
                  </th>
                  <th
                    colSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      textAlign: "center"
                    }}
                  >
                    2 buổi /tuần
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      textAlign: "center"
                    }}
                  >
                    Sinh Viên
                  </th>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#0000ff",
                      textAlign: "center"
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
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                  >
                    Khối Lớp
                  </th>
                  <th
                    colSpan="2"
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      textAlign: "center"
                    }}
                  >
                    3 buổi /tuần
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#008000",
                      textAlign: "center"
                    }}
                  >
                    Sinh Viên
                  </th>
                  <th
                    style={{
                      border: "1px solid #eee",
                      color: "#0000ff",
                      textAlign: "center"
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
            </table> */}
            <br />

            <h2 id="Quy-trinh-dang-ki-thue-gia-su">
              <span
                className="ez-toc-section"
                id="4_Quy_trinh_dang_ki_thue_gia_su"
                ez-toc-data-id="#4_Quy_trinh_dang_ki_thue_gia_su"
              ></span>
              <span style={{ color: "#008000" }} >3. Quy trình đăng kí thuê gia sư</span>
            </h2>
            <p>
              <ul className="list-disc ml-0">
                <li>
                  <strong>Bước 1:</strong> Trung tâm tiếp nhận thông tin đăng kí tư vấn
                </li>
                <li>
                  <strong>Bước 2:</strong> Trung tâm gặp mặt tư vấn trực tiếp tại nhà
                </li>
                <li>
                  {" "}
                  <strong>Bước 3:</strong> Sắp xếp giáo viên dạy thử 1 đến 2 buổi
                </li>
                <li>
                  <strong>Bước 4:</strong> Tiếp nhận kí hợp đồng để học chính thức
                </li>
                <li>
                  <strong>Bước 5:</strong> Thanh toán học phí vào cuối tháng
                </li>
                <li>
                  <strong>Bước 6:</strong> Trung tâm hỗ trợ dịch vụ trong suốt quá trình học
                </li>
                {/* <li>
                  Báo cáo tiến độ hàng tháng giúp phụ huynh dễ dàng theo dõi sự
                  tiến bộ của con.
                </li> */}
              </ul>
            </p>

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
                4. Liên hệ{" "}
                {/* <a href="/" style={{ color: "#008000" }}>
                  Gia Sư Biên Hòa
                </a>{" "} */}
                {/* để được tư vấn miễn phí . */}
              </span>
            </h2>
            {/* <br /> */}
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
                <a href="tel:0393687033">0393687033</a>
              </span>{" "}
              <strong  style={{ color: 'red', fontSize: '20px' }}>(Thầy Thành)</strong>
            </p>
            <p>(Làm việc 24/7)</p>
            <p>
              {/* Websites:{" "}
              <a
                href="https://www.giasugioibienhoa.com/"
                className="text-[#1b78e2] hover:text-cyan-800"
              >
                https://www.giasugioibienhoa.com/
              </a> */}
              {/* <br />
              Mail: giasubienhoa42@gmail.com
              <br /> */}
              {/* <br/> */}
              <span style={{ color: "#0000ff" }}>
                          <Link
                            style={{ color: "#0000ff" }}
                            to="/register"
                          >
                            Đăng ký ngay hôm nay – Cơ hội học thử miễn phí
                          </Link>
                          </span>
              <br/>
              
              
              Địa chỉ trung tâm gia sư Giỏi Biên Hòa – Đồng Nai:
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
        <h1 className="ml-9 text-[#008000] text-3xl" id="Danh-gia-phu-huynh">
          5. Đánh giá của phụ huynh
        </h1>
        <div className={styles.carousel}>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div className={styles.slide}>
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHHhICo9Gm_mK_xoq0Sy6QXnxk_GoJFgK2Q&s"
                src={img1}
                alt="Giáo viên giỏi toán"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.title}>Trần Văn Chính</h3>
                <h6 className={styles.subtitle}>Kĩ sư</h6>
                <p className={styles.description}>
                  Từ ngày có gia sư kèm 1-1 tại nhà, con tôi học tập tiến bộ hẳn
                  lên, ngoan và chăm chỉ hơn. Tôi rất hài lòng về Trung tâm
                </p>
              </div>
            </div>
            <div className={styles.slide}>
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_OLhU8gnFJOP2LbkbDbjCD3CYaqYqVjnPg&s"
                src={img2}
                alt="Giáo viên giỏi văn"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.title}>Trần Tuyết Xuân</h3>
                <h6 className={styles.subtitle}>Nhân viên kế toán</h6>
                <p className={styles.description}>
                  Cháu nhà chị mất căn bản tiếng anh, nhưng nhờ Trung tâm mà nay
                  điểm số cháu đã cải thiện nhiều và cũng đã giao tiếp được
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
      {/* <Zalo /> */}
    </>
  );
}
