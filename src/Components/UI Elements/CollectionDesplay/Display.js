import React from "react";
import styles from "./Display.module.css";
import { motion } from "framer-motion";
function Display(props) {
  const { id, title, user, stack, item, price } = props.data;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.3 }}
      id={id}
      className={styles.display}
    >
      <img className={styles.img} src={item} alt="cardImage" />
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <img src={user} alt="user" />
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.stock}>{stack} in the stock</p>
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
              <g clipPath="url(#clip0_0_213)">
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
            {price}ETH
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Display;
