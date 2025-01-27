import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/z6260461294475_7ef552247c80c53ebb9b621cffa245ea.jpg"
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${styles.container}`}>
      <nav className={styles.mainNavigation}>
        <div className={`${styles.insideNavigation} ${styles.gridContainer}`}>
          <div className={styles.navigationBranding}>
            <div className={styles.siteLogo}>
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo Gia Sư Uy Tín"
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <h1 className={styles.siteTitle}>Trung tâm Gia Sư Giỏi Biên Hòa</h1>
          </div>
          <br />
          <div className={styles.navLinks}>
            <ul>
              <li className={styles.homeLink}>
                <Link to="/">Trang chủ</Link>
              </li>
              <li
                className={`${styles.dropdown} ${
                  isDropdownOpen ? styles.active : ""
                } ${styles.parentLink}`}
              >
                <Link
                  href="#parents"
                  className="text-white"
                  onClick={toggleDropdown}
                >
                  Dành cho quý phụ huynh{" "}
                  <span className={styles.dropdownArrow}>
                    {isDropdownOpen ? "▲" : "▼"}
                  </span>
                </Link>
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link to="/introduce" className="text-white">
                      Giới Thiệu Gia Sư Biên Hòa
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/register" className="pt-6 text-white">
                Đăng Kí Học Gia Sư
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="pt-6 text-white">
                  
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
