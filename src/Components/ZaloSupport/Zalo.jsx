import React from 'react'
import styles from "./Zalo.module.scss";
import img from "../../assets/zaloNoBackGround.png";
export default function Zalo() {
    const handleClick = () => {
      window.location.href = "https://zalo.me/0393687033";
    };
  return (
    <div className={styles.zalosupport}>
        <div className={`${styles.zaloicon} ${styles.shake}`} onClick={handleClick}>
          <img src={img} alt="Zalo Support" className={styles.zaloimage} />
          {/* <span className={styles.zalotext}>Hỗ Trợ Ngay</span> */}
        </div>
      </div>
  )
}
