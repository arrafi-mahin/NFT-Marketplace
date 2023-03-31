import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import bg from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageSec}>
        <img className={styles.cardImg} src={bg} alt="Gallery" />
        <div className={styles.users}>
          <img src={user} alt="User" />
          <img src={user} alt="User" />
          <img src={user} alt="User" />
          <img src={user} alt="User" />
        </div>
      </div>
      <div className={styles.cardText}>
        <p className={styles.title}>ArtCrypto</p>
        <div className={styles.info}>
          <span className={styles.eth}>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z"
                fill="#00AC4F"
              />
            </svg>{" "}
            ETH
          </span>
          <span className={styles.total}>1 of 231</span>
        </div>
        <div className={styles.footer}>
          <Button
            style={{
              backgroundColor: "#F2F2F4",
              color: "#371C87",
              border: "none",
              padding: "5px",
              margin: "0px",
            }}
            small
            inverse
            title="3h 50m 2s left"
          />
          <a href="#">Place a bid</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
