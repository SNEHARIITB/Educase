import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {

    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(formData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully ✅");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "yes",
    });
    navigate("/");

  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Create your <br /> PopX account
      </h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contentSection}>
          <div className={styles.inputGroup}>
            <label>
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Phone number<span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Email address<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Password<span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Are you an Agency?<span className={styles.required}>*</span>
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
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

export default SignUpPage;
