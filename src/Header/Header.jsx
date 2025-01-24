import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <nav className={styles.mainNavigation}>
        <div className={`${styles.insideNavigation} ${styles.gridContainer}`}>
          <div className={styles.navigationBranding}>
            <div className={styles.siteLogo}>
              <a href="/">
                <img
                  src="https://giasuuytinbienhoa.edu.vn/wp-content/uploads/2022/10/Logo-gia-su-Uy-Tin.jpg"
                  alt="Logo Gia Sư Uy Tín"
                  className={styles.logoImage}
                />
              </a>
            </div>
            <h1 className={styles.siteTitle}>Trung tâm Gia Sư Biên Hòa</h1>
          </div>
          <br />
          <div className={styles.navLinks}>
            <ul>
              <li className={styles.homeLink}>
                <a href="/">Trang chủ</a>
              </li>
              <li
                className={`${styles.dropdown} ${
                  isDropdownOpen ? styles.active : ""
                } ${styles.parentLink}`}
              >
                <a
                  href="#parents"
                  className={styles.dropdownToggle}
                  onClick={toggleDropdown}
                >
                  Dành cho quý phụ huynh{" "}
                  <span className={styles.dropdownArrow}>
                    {isDropdownOpen ? "▲" : "▼"}
                  </span>
                </a>
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a href="/introduce">
                      Giới Thiệu Gia Sư Biên Hòa
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/privacy-policy" className="pt-6">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="pt-6">
                  Đăng Kí Học Gia Sư
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
