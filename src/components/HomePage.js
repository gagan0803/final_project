import React from "react";
import styles from "../styles/HomePage.module.css";
import TakeOnRent from "./Sections/TakeOnRent";
import GiveOnRent from "./Sections/GiveOnRent";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Welcome to Rentit4me</h1>
        <p>Choose to Take on Rent or Give on Rent</p>
      </header>
      <div className={styles.sections}>
        <TakeOnRent />
        <GiveOnRent />
      </div>
    </div>
  );
};

export default HomePage;
