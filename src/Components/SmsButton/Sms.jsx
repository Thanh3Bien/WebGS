import React from 'react';
import styles from "./Sms.module.scss";
import img from "../../assets/smsinconblue.jpg";
export default function SmsButton() {
    const phoneNumber = "0393687033"; // Thay thế bằng số điện thoại bạn muốn gửi SMS
    const message = "Hello!"; // Tin nhắn mặc định (nếu có)

    const handleClick = () => {
        const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        window.open(smsUrl, "_blank");
    };

    return (
        <div className={styles.smsButton} onClick={handleClick}>
            <img src={img} alt="SMS Support" className={styles.smsImage} />
            <span className={styles.smsText}>Nhắn Tin SMS</span>
        </div>
    );
}