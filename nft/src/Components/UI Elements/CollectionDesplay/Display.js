import React from "react";

import styles from "./Display.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Display(props) {
  return (
    <div className={styles.display}>
      <img className={styles.img} src={bg1} alt="cardImage" />
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <img src={user} alt="user" />
          <div>
            <p className={styles.title}>The Futr Abstr</p>
            <p className={styles.stock}>10 in the stock</p>
          </div>
        </div>
        <div className={styles.bid}>
          <p>Highest Bid</p>
          <span>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_213)">
                <path
                  d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
                  fill="#3A3A3A"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_213">
                  <rect
                    width="13"
                    height="21.3333"
                    fill="white"
                    transform="translate(0 0.589722)"
                  />
                </clipPath>
              </defs>
            </svg>
            0.25ETH
          </span>
        </div>
      </div>
    </div>
  );
}

export default Display;
