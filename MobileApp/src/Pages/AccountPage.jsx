
import styles from "./AccountPage.module.css"

const AccountPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.topSection}>
                <h4>Account Settings</h4>
            </div>
            <div className={styles.mainSection}>
                <div className={styles.profileSection}>
                    <div>
                        <img className={styles.profileImage} src="https://placehold.co/100" alt="Profile Image" />
                    </div>
                    <div>
                        <h2>Fullname</h2>
                        <h3>Email</h3>
                    </div>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae, 
                    architecto mollitia repellendus 
                    dolorem quas blanditiis enim eius laboriosam modi! Eos voluptatem debitis 
                    similique corporis voluptatum eius modi fugiat ut.
                </p>
            </div>
            <div className={styles.bottomSection}></div>
        </div>
    );
}
export default AccountPage;