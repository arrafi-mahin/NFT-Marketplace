import React from "react";
import Button from "../Button/Button";
import styles from "./Display.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Display(props) {
  return (
    <div className={styles.card}>
      <div className={styles.display}>
        <img src={bg1} alt="Display" />
        <div className={styles.sideBar}>
          <img src={bg1} alt="Display" />
          <img src={bg1} alt="Display" />
          <img src={bg1} alt="Display" />
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <h5>Amazing Collection</h5>
          <div>
            <img src={user} alt="User" />
            <span>by Arkhan</span>
          </div>
        </div>
        <Button small inverse title="Total 54 items" />
      </div>
    </div>
  );
}

export default Display;
