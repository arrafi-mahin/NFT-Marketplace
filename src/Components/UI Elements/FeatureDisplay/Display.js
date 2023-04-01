import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Display.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Display(props) {
  const [collection, setCollection] = useState([
    {
      id: 0,
      name: "Arkhan",
      title: "Amezing Collection",
      user: "https://source.unsplash.com/random/900×700/?face",
      stack: 10,
      item: [
        "https://source.unsplash.com/random/300×301/?art",
        "https://source.unsplash.com/random/300×300/?art",
        "https://source.unsplash.com/random/300×302/?art",
      ],
    },
  ]);
  const [display, setDisplay] = useState(collection[0]);
  const clickHandler = (id) => {};
  return (
    <div key={display.id} className={styles.card}>
      <div className={styles.display}>
        <img src={display.item[0]} alt="Display" />

        <div className={styles.sideBar}>
          {display.item.map((item, index) => {
            return (
              <img
                onClick={clickHandler}
                key={index}
                src={item}
                alt="Display"
              />
            );
          })}
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <h5>Amazing Collection</h5>
          <div>
            <img src={display.user} alt="User" />
            <span>{display.name}</span>
          </div>
        </div>
        <Button
          style={{ marginRight: "0px" }}
          small
          inverse
          title="Total 54 items"
        />
      </div>
    </div>
  );
}

export default Display;
