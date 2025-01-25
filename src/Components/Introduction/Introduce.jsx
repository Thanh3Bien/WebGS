import React from "react";
import styles from "./Introduce.module.scss";
import Header from "../../Header/Header";
import Footer from "../Footer/Footer";
import Zalo from "../ZaloSupport/Zalo";
export default function Introduce() {
  return (
    <>
      <Header />
      <div className={styles.insidearticle}>
        <header className={styles.entryheader}>
          <h1 className={styles.entrytitle}>
            Trung tâm Gia sư Giỏi Biên Hòa – Giải pháp toàn diện cho con bạn
            chinh phục tri thức
          </h1>
        </header>
        <div className={styles.entrycontent}>
          <p>
            <a href="/" className="text-[#1b78e2] hover:text-[#242226]">
              Bạn đang tìm kiếm một trung tâm gia sư uy tín tại Biên Hòa?
            </a>{" "}
            Trung tâm Gia sư Giỏi Biên Hòa là lựa chọn lý tưởng để giúp con bạn
            cải thiện kết quả học tập nhanh chóng và bền vững. Với dịch vụ gia
            sư 1 kèm 1 chuyên nghiệp, chúng tôi mang đến lộ trình học tập được
            cá nhân hóa, phù hợp với từng học viên.
            <img
              src="https://giasudaykemtainha.vn/uploads/posts/cach-tim-lop-day-gia-su-khong-qua-trung-tam.jpg"
              alt=""
            />
          </p>
          <p>
            <strong>
              Dịch vụ gia sư 1 kèm 1 chuyên nghiệp – Chìa khóa giúp con bạn tiến
              bộ vượt bậc
            </strong>{" "}
            <ul className="list-disc ml-5">
              <li>
                Dành cho học sinh từ lớp 1 đến lớp 12, từ cơ bản đến nâng cao.
              </li>
              <li>
                Luyện thi chuyên sâu: Đầu vào lớp 10 trường THPT chuyên Lương
                Thế Vinh, trường điểm (Ngô Quyền, Trấn Biên, Nam Hà,...); ôn
                luyện thi đại học các khối vào các trường Đại học lớn.
              </li>
              <li>
                Cam kết tiến bộ rõ rệt chỉ sau 1 tháng học với phương pháp cá
                nhân hóa.
              </li>
              <li>
                Học ngay tại nhà, lịch học linh hoạt, phù hợp với học sinh và
                gia đình
              </li>
              <li>
                Giáo viên giỏi, giàu kinh nghiệm từ các trường học uy tín tại
                Biên Hòa.
              </li>
              <li>
                Sinh viên xuất sắc đến từ các đại học danh tiếng, tận tâm và
                nhiệt huyết.
              </li>
              <li>
                Phương pháp giảng dạy hiện đại, cập nhật giúp học sinh tiếp thu
                nhanh, học tập hiệu quả.
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
                Báo cáo tiến độ hàng tháng: Giúp phụ huynh dễ dàng theo dõi sự
                tiến bộ của con.
              </li>
              <li>
                Tư vấn miễn phí: Lộ trình học cá nhân hóa phù hợp với năng lực
                và mục tiêu của học viên.
              </li>
            </ul>
            <img
              src="https://giasugiatri.edu.vn/wp-content/uploads/2024/08/Trung-Tam-Gia-Su-Bien-Hoa-1024x589.jpg"
              alt=""
            />
          </p>
          {/* <p>
            Năm 2007 mình bắt đầu đăng ký đi dạy kèm tại các trung tâm gia sư,
            không biết tại số mình xui hay sao mà toàn gặp mấy lớp gì đâu. Nào
            là trung tâm báo giá một đằng còn phụ huynh thì nói một nẻo, lớp thì
            gọi hoài không liên lạc được, lớp thì phụ huynh chưa chốt học nhưng
            trung tâm lại giao người qua… Đủ mọi chuyện trên đời.
          </p>
          <p>
            Các lớp&nbsp;mình&nbsp;phải đóng trước phí nhận lớp cho trung tâm là
            30% kèm theo bản hợp đồng toàn những điều bất lợi cho các bạn gia sư
            như trong quá trình dạy phụ huynh muốn đổi người thì không được nhận
            lại phí. Nếu không liên lạc được với phụ huynh phải báo lại cho
            trung tâm trong vòng 30 phút nếu không thì cũng bị mất phí. Lớp đã
            có người nhận rồi nhưng vẫn giao cho một bạn khác, có lớp giao cho 4
            đến 5 bạn nhận, báo lại thì trung tâm nói do mấy bạn nhân viên không
            biết đã giao rồi…
          </p>
          <p>
            Mãi sau này mình mới biết các trung tâm đa phần đăng lớp ảo, gia sư
            sau khi đóng phí và nhận lớp sẽ không liên lạc được với phụ huynh.
            Báo cho trung tâm thì trung tâm nói sẽ liên lạc rồi báo lại hoặc đổi
            1 lớp khác (thường các lớp xa hoặc lương thấp) nếu gia sư không nhận
            thì trung tâm sẽ gây khó khăn và không hoàn lại phí. Đó là một trong
            những chiêu trò của các trung tâm gia sư lừa đảo.
          </p>
          <p>
            Sau nhiều lần mất phí và cũng nhiều bạn cũng bị giống mình. Mình đã
            quyết tâm tự mình đứng ra thành lập 1{" "}
            <strong>trung tâm gia sư Uy Tín chất lượng</strong> cho cả phụ huynh
            và các bạn gia sư.
          </p>
          <p>
            Vì <strong>trung tâm gia sư của mình làm uy tín</strong> nên các bạn
            truyền tai nhau sau một thời gian không lâu thì lượng gia sư giỏi
            của trung tâm mình rất nhiều. Trung tâm mình cách làm hoàn toàn khác
            với các trung tâm gia sư kia, bên mình sẽ cho các bạn gia sư liên hệ
            trực tiếp với phụ huynh hẹn ngày giờ qua gặp. Sau khi dạy thử nếu
            thấy lớp phù hợp và phụ huynh đồng ý thì bên mình mới tiến hành thu
            phí.
          </p>
          <p>
            Hoặc trong quá trình dạy nếu có vấn đề gì bên trung tâm cũng hoàn
            lại phí, không gây khó khăn cho các bạn gia sư nhận lớp như các
            trung tâm gia sư khác. Với phong cách làm việc như vậy nên trung tâm
            gia sư Biên Hòa của mình đã được đông đảo các bạn{" "}
            <strong>gia sư Sinh viên và gia sư Giáo viên giỏi</strong> biết đến
            cộng tác với trung tâm.
          </p>
          <p>
            Về mặt của phụ huynh chúng tôi cũng làm việc uy tín không kém gì gia
            sư. Trong lúc tư vấn chúng tôi sẽ tư vấn rất kỹ về các bạn gia sư
            cũng như chất lượng. Nếu phụ huynh yêu cầu giáo viên thì chúng tôi
            sẽ giao giáo viên hoặc yêu cầu sinh viên giỏi thì sẽ giao các bạn
            sinh viên có nhiều năm kinh nghiệm chứ{" "}
            <strong>không gian dối như các trung tâm gia sư</strong> kia.
          </p>
          <p>
            Vấn đề mình thường gặp đó là các <strong>trung tâm gia sư</strong>{" "}
            làm việc không uy tín sẽ cho các bạn sinh viên chưa tốt nghiệp ra
            trường nhận các lớp giáo viên hoặc tư vấn là sinh viên giỏi kinh
            nghiệm nhiều năm kinh nghiệm thì lại giao mấy bạn sinh viên năm nhất
            hay các bạn sinh viên mới tập đi dạy lần đầu.
          </p> */}
          <p>
            <span style={{ color: "#0000ff" }}>
              <a
                style={{ color: "#0000ff" }}
                href="http://giasuuytinbienhoa.edu.vn/chinh-sach-bao-mat"
              >
                Đăng ký ngay hôm nay – Cơ hội học thử miễn phí
              </a>
            </span>
            <ul className="list-disc">
              <li>Hotline tư vấn: 0975 248 259</li>
              <li>
                Hãy để Trung tâm Gia sư Giỏi Biên Hòa đồng hành cùng con bạn
                trên con đường chinh phục tri thức và xây dựng tương lai tươi
                sáng.
              </li>
            </ul>
            Địa chỉ: 1334/10 khu phố 3, phường Tân Tiến, Biên Hoà, Đồng Nai (gần
            Cooomart Biên Hoà) 132/7 Bình Chuẩn 19, Thuận An, Bình Dương
          </p>
        </div>
      </div>
      <Footer />
      <Zalo />
    </>
  );
}
