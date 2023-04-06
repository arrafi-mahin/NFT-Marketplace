import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Display from "../UI Elements/FeatureDisplay/Display";
import styles from "./Featured.module.css";
function Featured(props) {
  return (
    <div className={styles.feature}>
      <Container>
        <motion.h2
          initial={{ x: "-10vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Collection Featured NFTs
        </motion.h2>
        <Row>
          <Col>
            <Display />
          </Col>
          <Col>
            <Display />
          </Col>
          <Col>
            <Display />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Featured;
