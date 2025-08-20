import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {

    const navigate = useNavigate();

    const [loginCredentials, setLoginCredentials] = useState({
        email:"",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginCredentials({...loginCredentials, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
       
        const matchedUser = existingUsers.find(
            (user) =>
                user.email === loginCredentials.email &&
                user.password === loginCredentials.password
            );

            if (matchedUser) {
            setError("");
            alert("Login successful ✅");
            
            localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

            navigate("/account");
            } else {
            setError("Invalid email or password ❌");
            alert(error);
        }
        
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Signin to your <br /> PopX account</h2>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <form className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                    type="email" 
                    placeholder="Enter email address" 
                    name= "email"
                    value={loginCredentials.email}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className={styles.inputGroup}>
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    name="password"
                    value={loginCredentials.password}
                    onChange={handleChange}
                    required
                />
                </div>

                <button type="submit" className={styles.loginBtn}>
                Login
                </button>
            </form>
        </div>
    );

}
export default LoginPage;