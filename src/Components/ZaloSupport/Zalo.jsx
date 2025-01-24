import React, { useState } from 'react'
import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas or QRCodeSVG
import styles from "./Zalo.module.scss";
import img from "../../assets/z6258155643613_ae9c93f4ddeb02be093acdcdc24e3eec.jpg";
export default function Zalo() {
  const [showQRCode, setShowQRCode] = useState(false);
    const handleClick = () => {
      setShowQRCode(true);
    };
    const handleClose = () => {
      setShowQRCode(false);
    };
  return (
    <div className={styles.zalosupport}>
        <div className={styles.zaloicon} onClick={handleClick}>
          <img src={img} alt="Zalo Support" className={styles.zaloimage} />
          <span className={styles.zalotext}>Hỗ Trợ Ngay</span>
        </div>
        {showQRCode && (
          <div className={styles.qrmodal}>
            <div className={styles.qrcontent}>
              <h3>Quét mã Zalo</h3>
              <QRCodeCanvas
                value="https://id.zalo.me/account?continue=http%3A%2F%2Fzalo%2Eme%2F0706671682"
                size={200}
              />
              <button className={styles.closebutton} onClick={handleClose}>
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
  )
}
