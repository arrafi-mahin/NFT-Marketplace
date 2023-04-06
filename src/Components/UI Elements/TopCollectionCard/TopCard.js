import React from "react";
import { motion } from "framer-motion";
import styles from "./TopCard.module.css";
import user from "../../../Assets/Image/user2.png";
function TopCard(props) {
  return (
    <motion.div
      layout
      initial={{ translateY: 60 }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.6 }}
      style={props.style}
      className={styles.card}
    >
      <span>1</span>
      <div className={styles.img}>
        {props.verified ? (
          <div className={styles.verify}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="10" width="16" height="11" fill="white" />
              <path
                d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z"
                fill="#1E93FF"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        <img src={user} alt="user" />
      </div>
      <div className={styles.info}>
        <p>CryptoFunks</p>
        <div className="d-flex align-items-center">
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_267)">
              <path
                d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_267">
                <rect width="15" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span> 19,769.39</span>
        </div>
      </div>
      <p className={styles.status}>+26.52%</p>
    </motion.div>
  );
}

export default TopCard;
