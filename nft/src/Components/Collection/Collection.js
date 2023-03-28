import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CollectionCard from "../UI Elements/CollectionCard/CollectionCard";
import Display from "../UI Elements/CollectionDesplay/Display";
import styles from "./Collection.module.css";
function Collection(props) {
  return (
    <div className={styles.collection}>
      <Container>
        <Row>
          <Col md={8} sm={12} className="">
            <Row>
              <Col md={6} sm={12}>
                <Display />
              </Col>
              <Col md={6} sm={12}>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collection;
