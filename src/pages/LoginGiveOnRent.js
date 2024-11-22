import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

const LoginGiveOnRent = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Give on Rent - Login</h1>
      <form className={styles.form}>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <Link to="/" className={styles.backLink}>
        Back to Home
      </Link>
    </div>
  );
};

export default LoginGiveOnRent;
