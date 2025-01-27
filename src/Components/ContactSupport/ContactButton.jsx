import React from 'react';
import styles from './ContactButton.module.scss';

const ContactButton = () => {
  return (
    <div className={styles.fixedPhoneLink}>
      <a href="tel:0815062700" className={styles.phoneText}>Liên Hệ Ngay</a>
    </div>
  );
};

export default ContactButton;