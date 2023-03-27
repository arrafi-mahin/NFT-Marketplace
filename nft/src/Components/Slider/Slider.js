import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useDragControls } from "framer-motion";
import CountUp from "react-countup";
import Button from "../UI Elements/Button/Button";
import Card1 from "../UI Elements/Card1/Card1";
import styles from "./Slider.module.css";
import bg1 from "../../Assets/Image/bg1.png";
import bg2 from "../../Assets/Image/bg2.png";
import bg3 from "../../Assets/Image/bg3.png";

function Slider(props) {
  return (
    <Container className={styles.slider}>
      <Row>
        <Col md={8} lg={8} sm={12}>
          <div className={styles.detail}>
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
          </div>
        </Col>
        <Col md={4} lg={4} sm={12}>
          <div className={styles.stack}>
            <div
              className={styles.stackCard}
              style={{ right: "-20%", transform: "scale(0.8)", zIndex: 1 }}
            >
              <Card1 bg={bg3} />
            </div>
            <div
              className={styles.stackCard}
              style={{ right: "-10%", transform: "scale(0.9)", zIndex: 2 }}
            >
              <Card1 bg={bg2} />
            </div>
            <div
              className={styles.stackCard}
              style={{ right: "0%", transform: "scale(1)", zIndex: 3 }}
            >
              <Card1 bg={bg1} />
            </div>
          </div>

          {/* <div className={styles.wrapper}>
            <ul className={styles.cardWrap}>
              <motion.li
                style={{
                  ...cardStyle,
                  // backgroundColor: color,
                  cursor: true ? "grab" : "auto",
                }}
                animate={{
                  top: 1 * -CARD_OFFSET,
                  scale: 1 - 1 * SCALE_FACTOR,
                  zIndex: 3 - 1,
                }}
                drag={true ? "y" : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                // onDragEnd={() => moveToEnd(index)}
              >
                <Card1 bg={bg2} />
              </motion.li>
              <motion.li
                animate={{
                  top: 1 * -CARD_OFFSET,
                  scale: 1 - 1 * SCALE_FACTOR,
                  zIndex: 3 - 1,
                }}
                drag={true ? "y" : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                // onDragEnd={() => moveToEnd(index)}
              >
                <Card1 bg={bg2} />
              </motion.li>
            </ul>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none",
  backgroundColor: "#efefef",
  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.25)",
};
