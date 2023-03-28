import React from "react";

import styles from "./Display.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Display(props) {
  return (
    <div className={styles.display}>
      <img className={styles.img} src={bg1} alt="cardImage" />
      <div className={styles.info}>
        <div>
          <img src={user} alt="user" />
          <div>
            <p>The Futr Abstr</p>
            <p>10 in the stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
