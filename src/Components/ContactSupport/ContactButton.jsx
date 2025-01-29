import React from "react";
import styles from "./ContactButton.module.scss";
import phoneIcon from "../../assets/phoneicon.png";


export default function ContactButton() {
    const handleClick = () => {
        window.location.href = "tel:0393687033"; // Số điện thoại của bạn
    };

    return (
      <div>
        <div className={styles.fixedPhoneLink}>
      <a href="tel:0393687033" className={styles.phoneText}>Liên Hệ Ngay</a>
    </div>
        <div className={styles.contactsupport}>
            <div className={styles.contacticon} onClick={handleClick}>
                <img src={phoneIcon} alt="Contact Support" className={styles.contactimage} />
                <span className={styles.contacttext}>Liên Hệ Ngay</span>
            </div>
        </div>
        </div>
    );
}
