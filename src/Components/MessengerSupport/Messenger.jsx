import React from 'react';
import styles from "./Messenger.module.scss";
import img from "../../assets/messengerIconNoBackGround.png";
export default function Messenger() {
    const handleClick = () => {
        window.open("https://m.me/61572238568640", "_blank"); // Đổi với tên người dùng của bạn
    };

    return (
        <div className={styles.messengerSupport}>
            <div className={`${styles.messengerImage} ${styles.shake}`} onClick={handleClick}>
                <img src={img} alt="Messenger Support" className={styles.messengerImage} />
                <span className={styles.messengerText}>Nhắn Tin Ngay</span>
            </div>
        </div>
    );
}