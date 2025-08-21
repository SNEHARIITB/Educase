import { useLocation } from 'react-router-dom';
import styles from "./AccountPage.module.css";

const AccountPage = () => {
    const location = useLocation();
  const matcheduser = location.state || {};
  console.log(matcheduser);
  return (
    <div className={styles.container}>

      <div className={styles.topSection}>
        <h4>Account Settings</h4>
      </div>


      <div className={styles.mainSection}>

        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.profileImage}
              src="https://placehold.co/100x100"
              alt="Profile"
            />
            <span className={styles.editIcon}>👤</span>
          </div>
          <div className={styles.profileInfo}>
            <h2 className={styles.name}>{matcheduser.fullName}</h2>
            <h3 className={styles.email}>{matcheduser.email}</h3>
          </div>
        </div>

        <p className={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
        <div className={styles.bottomSection}></div>
      </div>

      {/* Bottom Section */}
      
    </div>
  );
};

export default AccountPage;
