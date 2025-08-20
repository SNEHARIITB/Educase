
import styles from "./LoginPage.module.css";

const LoginPage = () => {

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Signin to your <br /> PopX account</h2>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <form className={styles.form}>
                <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter email address" />
                </div>

                <div className={styles.inputGroup}>
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
                </div>

                <button type="submit" className={styles.loginBtn}>
                Login
                </button>
            </form>
        </div>
    );

}
export default LoginPage;