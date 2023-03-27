import React from "react";
import styles from "./Button.module.css";
function Button(props) {
  return (
    <button
      className={`${props.inverse ? styles.inverse : styles.btn}`}
      style={props.style}
    >
      {props.title || "Button"}
    </button>
  );
}

export default Button;
