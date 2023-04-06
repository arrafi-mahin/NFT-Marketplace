import React from "react";
import styles from "./CollectionCard.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
function CollectionCard(props) {
  const { id, title, user, stack, item, price } = props.data;
  const clickHandler = (e) => {
    props.onClick(e.target.parentElement.id);
  };
  return (
    <motion.div
      initial={{ x: 20 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      id={id}
      key={id}
      className={styles.card}
    >
      <img
        onClick={clickHandler}
        className={`${styles.img} img-fluid`}
        src={item}
        alt="img"
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
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
            {price} ETH
          </span>
          <span className={styles.total}>1 of {stack}</span>
        </div>
        <Button inverse title="Place Bid" style={{ marginTop: "15px" }} />
      </div>
    </motion.div>
  );
}

export default CollectionCard;
