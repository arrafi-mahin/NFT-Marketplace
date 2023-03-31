import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./Sell.module.css";
import Button from "../UI Elements/Button/Button";
import Card from "../UI Elements/SellCard/Card";
function Sell(props) {
  return (
    <div className={styles.sell}>
      <Container>
        <Row>
          <Col sm={12} md={7} className={styles.gallary}>
            <Row>
              <Col className="text-end">
                <motion.div
                  initial={{ x: -40 }}
                  animate={{ x: 40 }}
                  transition={{
                    // type: "spring",
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    // repeatDelay: 0.1,
                  }}
                  className={styles.card1}
                >
                  <Card />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 0.7 }}
                  transition={{
                    // type: "spring",
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    // repeatDelay: 0.1,
                  }}
                  className={styles.card2}
                >
                  <Card />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 50 }}
                  transition={{
                    // type: "spring",
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    // repeatDelay: 0.1,
                  }}
                  className={styles.card3}
                >
                  <Card />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={5} className={styles.textContent}>
            <div className={styles.info}>
              <h3 className={styles.title}>Create and sell your NFTs</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi ac phasellus placerat a pellentesque tellus sed
                egestas. Et tristique dictum sit tristique sed non. Lacinia
                lorem id consectetur pretium diam ut. Pellentesque eu sit
                blandit fringilla risus faucibus.
              </span>
              <Button style={{ margin: 0 }} title="Sign Up Now" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sell;
