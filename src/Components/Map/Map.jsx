import React from 'react';
import styles from "./Map.module.scss";
import img from "../../assets/google-maps.png";
export default function Map() {
    const handleClick = () => {
        window.location.href = "https://www.google.com/maps/dir/?api=1&destination=1334/10+khu+phố+3,+phường+Tân+Tiến,+Biên+Hoà,+Đồng+Nai"; // Địa chỉ của bạn
    };

    return (
        <div className={styles.mapsupport}>
            <div className={styles.mapicon} onClick={handleClick}>
                <img src={img} alt="Google Maps Support" className={styles.mapimage} />
                <span className={styles.maptext}>Chỉ Đường</span>
            </div>
        </div>
    )
}