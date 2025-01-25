import React from "react";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.sitefooter}>
      <footer className={styles.siteinfo}>
        <div className={`${styles.insidesiteinfo} ${styles.gridcontainer}`}>
          <div className={styles.copyrightbar}>
            <span className={styles.copyright}>
              Trung tâm Gia sư Giỏi Biên Hòa – Nơi kiến thức thăng hoa, thành
              công bắt đầu!
            </span>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}
