import React from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    
        <div className={styles.container}>
            <div className={styles.contentSection}>
                <h1 className={styles.title}>Welcome to PopX</h1>
                <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <div className={styles.buttonGroup}>
                <button className={styles.createBtn}
                    onClick={() => navigate("/signup")}
                >
                    Create Account
                </button>
                <button className={styles.loginBtn}
                    onClick={() => navigate("/login")}
                >
                    Already Registered? Login
                </button>
                </div>
            </div>
        </div>
    
  );
};

export default LandingPage;
