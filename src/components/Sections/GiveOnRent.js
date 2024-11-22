import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Section.module.css";

const GiveOnRent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.section}>
      <h2>Give on Rent</h2>
      <p>
        Rent out your unused items and start earning passive income today.
        It’s easy and hassle-free!
      </p>
      <button
        className={styles.actionButton}
        onClick={() => navigate("/login-give-on-rent")}
      >
        List Your Items
      </button>
    </div>
  );
};

export default GiveOnRent;
