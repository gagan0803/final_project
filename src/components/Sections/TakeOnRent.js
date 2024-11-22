import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Section.module.css";

const TakeOnRent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.section}>
      <h2>Take on Rent</h2>
      <p>
        Browse a wide variety of rental options including furniture,
        appliances, electronics, and more.
      </p>
      <button
        className={styles.actionButton}
        onClick={() => navigate("/login-take-on-rent")}
      >
        Explore Rentals
      </button>
    </div>
  );
};

export default TakeOnRent;
