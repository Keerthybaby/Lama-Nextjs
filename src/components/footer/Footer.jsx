import React from 'react';
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> 
      {/* lamadev */}
      Pixo
      </div>
      <div className={styles.text}>
        {/* Lama creative thoughts agency  All rights reserved. */}
        ©Keerthy Baby
      </div>
    </div>
  );
};

export default Footer;