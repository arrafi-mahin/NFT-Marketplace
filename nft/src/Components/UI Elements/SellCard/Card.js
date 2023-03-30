import React from "react";
import styles from "./styles.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Card(props) {
  return (
    <div className={styles.card}>
      <img className={`${styles.img} img-fluid`} src={bg1} alt="Display" />
      <img className={styles.user} src={user} alt="user" />
    </div>
  );
}

export default Card;
