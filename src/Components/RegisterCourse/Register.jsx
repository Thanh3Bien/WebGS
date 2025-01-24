import React from "react";
import styles from "./Register.module.scss";
import Header from "../../Header/Header";
export default function Register() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div className={styles.registerForm}>
          <h1>Chào mừng bạn đến Form Đăng Kí</h1>
        </div>
      </div>
    </>
  );
}
