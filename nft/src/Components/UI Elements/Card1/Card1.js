import React from "react";
import styles from "./Card1.module.css";
import user from "../../../Assets/Image/user.png";

function Card1(props) {
  return (
    <div className={styles.card}>
      <img className="img-fluid" src={props.bg} alt="card" />

      <div className={styles.content}>
        <h3 className={styles.title}>Abstr Gradient NFT</h3>
        <div className={styles.user}>
          <img src={user} alt="user" />
          <span>Arkhan17</span>
        </div>
        <div className={styles.status}>
          <div className={styles.innerItem}>
            <p>Current Bid</p>
            <span>
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_143)">
                  <path
                    d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_143">
                    <rect
                      width="13"
                      height="21.3333"
                      fill="white"
                      transform="translate(0 0.512939)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              0.25 ETH
            </span>
          </div>
          <div className={styles.innerItem}>
            <p>Ends in</p>
            <span>12h 48m 42s</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.content}>
        <h3 className={styles.title}>Abstr Gradient NFT</h3>
        <div className={styles.user}>
          <img src={user} alt="user" />
          <span>Arkhan17</span>
        </div>
        <div className={styles.status}>
          <div className={styles.innerItem}>
            <p>Current Bid</p>
            <span>
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_143)">
                  <path
                    d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_143">
                    <rect
                      width="13"
                      height="21.3333"
                      fill="white"
                      transform="translate(0 0.512939)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              0.25 ETH
            </span>
          </div>
          <div className={styles.innerItem}>
            <p>Ends in</p>
            <span>12h 48m 42s</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Card1;
