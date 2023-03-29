import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Sell.module.css";
import Button from "../UI Elements/Button/Button";
function Sell(props) {
  return (
    <div className={styles.sell}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            showcase
          </Col>
          <Col sm={12} md={6}>
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
