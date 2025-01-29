import React from 'react'
import styles from "./Zalo.module.scss";
import img from "../../assets/z6258155643613_ae9c93f4ddeb02be093acdcdc24e3eec.jpg";
export default function Zalo() {
    const handleClick = () => {
      window.location.href = "https://zalo.me/0393687033";
    };
  return (
    <div className={styles.zalosupport}>
        <div className={styles.zaloicon} onClick={handleClick}>
          <img src={img} alt="Zalo Support" className={styles.zaloimage} />
          <span className={styles.zalotext}>Hỗ Trợ Ngay</span>
        </div>
      </div>
  )
}
