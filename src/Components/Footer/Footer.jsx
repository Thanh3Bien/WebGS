import React from 'react'
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.sitefooter}>
    <footer className={styles.siteinfo}>
      <div className={`${styles.insidesiteinfo} ${styles.gridcontainer}`}>
        <div className={styles.copyrightbar}>
          <span className={styles.copyright}>
            © 2025 Trung Tâm Gia Sư Biên Hòa
          </span>{" "}
          • Tạo ra với <a href="/">GeneratePress</a>
        </div>
      </div>
    </footer>
  </div>
  )
}
