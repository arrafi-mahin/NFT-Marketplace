import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Display from "../UI Elements/FeatureDisplay/Display";
import styles from "./Featured.module.css";
function Featured(props) {
  return (
    <div className={styles.feature}>
      <Container>
        <h2>Collection Featured NFTs</h2>
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
