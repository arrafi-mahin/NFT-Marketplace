import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Display.module.css";
import bg1 from "../../../Assets/Image/bg1.png";
import user from "../../../Assets/Image/user.png";
function Display(props) {
  const [collection, setCollection] = useState({
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
  });
  const [display, setDisplay] = useState(collection.item[0]);
  const clickHandler = (id) => {
    setDisplay(collection.item[id]);
    console.log(collection.item[id]);
  };
  return (
    <div key={display.id} className={styles.card}>
      <div className={styles.display}>
        <img src={display} alt="Display" />

        <div className={styles.sideBar}>
          {collection.item.map((item, index) => {
            return (
              <img
                onClick={() => {
                  clickHandler(index);
                  console.log(index);
                }}
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
            <img src={collection.user} alt="User" />
            <span>{collection.name}</span>
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
