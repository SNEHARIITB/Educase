import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.appWrapper}>
        <div className={styles.container}>
            <div className={styles.contentSection}>
                <h1 className={styles.title}>Welcome to PopX</h1>
                <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <div className={styles.buttonGroup}>
                <button className={styles.createBtn}>Create Account</button>
                <button className={styles.loginBtn}>
                    Already Registered? Login
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;
