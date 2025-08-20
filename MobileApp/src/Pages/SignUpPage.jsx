

import React from "react";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Create your <br /> PopX account
      </h2>

      <form className={styles.form}>
        <div className={styles.contentSection}>
            <div className={styles.inputGroup}>
                <label>
                    Full Name<span className={styles.required}>*</span>
                </label>
                <input type="text" placeholder="Enter full name" />
            </div>

            <div className={styles.inputGroup}>
                <label>
                    Phone number<span className={styles.required}>*</span>
                </label>
                <input type="tel" placeholder="Enter phone number" />
            </div>

            <div className={styles.inputGroup}>
                <label>
                    Email address<span className={styles.required}>*</span>
                </label>
                <input type="email" placeholder="Enter email address" />
            </div>

            <div className={styles.inputGroup}>
                <label>
                    Password<span className={styles.required}>*</span>
                </label>
                <input type="password" placeholder="Enter password" />
            </div>

            <div className={styles.inputGroup}>
                <label>Company name</label>
                <input type="text" placeholder="Enter company name" />
            </div>

            <div className={styles.inputGroup}>
                <label>
                    Are you an Agency?<span className={styles.required}>*</span>
                </label>
                <div className={styles.radioGroup}>
                    <label>
                        <input type="radio" name="agency" value="yes" defaultChecked />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="agency" value="no" />
                        No
                    </label>
                </div>
            </div>

        </div>

        <div className={styles.buttonSection}>
            <button type="submit" className={styles.signupBtn}>
                Create Account
            </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
