import React from "react";
import styles from "./CollectionCard.module.css";
import Button from "../Button/Button";
import img from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function CollectionCard(props) {
  return (
    <div className={styles.card}>
      <img className={`${styles.img} img-fluid`} src={img} alt="img" />
      <div className={styles.info}>
        <h3 className={styles.title}>The Futr Abstr</h3>
        <div className={styles.subInfo}>
          <img src={user} alt="user" />
          <span className={styles.badge}>
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_224)">
                <path
                  d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z"
                  fill="#00AC4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_224">
                  <rect width="8.53125" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            0.25 ETH
          </span>
          <span className={styles.total}>1 of 8</span>
        </div>
        <Button inverse title="Place Bid" style={{ marginTop: "15px" }} />
      </div>
    </div>
  );
}

export default CollectionCard;
