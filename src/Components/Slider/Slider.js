import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Button from "../UI Elements/Button/Button";
import Card1 from "../UI Elements/Card1/Card1";
import styles from "./Slider.module.css";
import bg1 from "../../Assets/Image/bg1.png";
import bg2 from "../../Assets/Image/bg2.png";
import bg3 from "../../Assets/Image/bg3.png";
import stamp from "../../Assets/Image/stamp.png";
import TinderCard from "react-tinder-card";
function Slider(props) {
  const clickHandler = (e) => {
    // const active = { right: "-20%", transform: "scale(0.8)", zIndex: 1 };
    // const selected = e.target.parentElement.parentElement;
    // e.target.parentElement.parentElement.style = active;
    // console.log(e.target.parentElement.parentElement.style);
  };
  const onSwipe = (direction) => {};

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <Container className={styles.slider}>
      <Row>
        <Col md={8} lg={8} sm={12}>
          <motion.div
            initial={{ x: "-40vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={styles.detail}
          >
            <h3 className={styles.title}>
              Discover, and collect Digital Art NFTs
            </h3>
            <p className={styles.desc}>
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <Button
              title="Explore Now"
              style={{ margin: "0", fontSize: "22px", padding: "10px 25px" }}
            />
            <div className={styles.counters}>
              <div className={styles.counter}>
                <h1>
                  <CountUp end={98} duration={5} />
                </h1>
                <p>Artwork</p>
              </div>
              <div className={styles.counter}>
                <h1>
                  <CountUp end={12} duration={5} />
                </h1>
                <p>Auction</p>
              </div>
              <div className={styles.counter}>
                <h1>
                  <CountUp end={15} duration={5} />
                </h1>
                <p>Artist</p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col md={4} lg={4} sm={12}>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.stack}
          >
            <img
              className={`${styles.stamp} img-fluid d-none d-sm-block`}
              src={stamp}
              alt="stamp"
            />
            <TinderCard
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <div
                className={`${styles.stackCard} ${styles.card1}`}
                onClick={clickHandler}
              >
                <Card1 bg={bg3} />
              </div>
            </TinderCard>
            <TinderCard
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <div
                className={`${styles.stackCard} ${styles.card2}`}
                onClick={clickHandler}
              >
                <Card1 bg={bg2} />
              </div>
            </TinderCard>
            <TinderCard
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <div
                className={`${styles.stackCard} ${styles.card3}`}
                onClick={clickHandler}
              >
                <Card1 bg={bg1} />
              </div>
            </TinderCard>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
