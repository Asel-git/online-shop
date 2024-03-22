import styles from "./Footer.module.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.footer_copyright}>
          Copyright Brandly. 2024. Bishkek
        </p>
      </div>
    </footer>
  );
};

export default Footer;
