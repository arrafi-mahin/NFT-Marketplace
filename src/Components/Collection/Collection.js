import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CollectionCard from "../UI Elements/CollectionCard/CollectionCard";
import Display from "../UI Elements/CollectionDesplay/Display";
import TopCard from "../UI Elements/TopCollectionCard/TopCard";
import styles from "./Collection.module.css";
function Collection(props) {
  return (
    <div className={styles.collection}>
      <Container>
        <Row>
          <Col md={8} sm={12} className="">
            <Row>
              <Col md={6} sm={12} className="mb-4">
                <Display />
              </Col>
              <Col md={6} sm={12} className={styles.collectionCard}>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12} className={styles.recent}>
            <h2 className={styles.title}>Top Collections over</h2>
            <p className={styles.duration}>Last 7 days</p>
            <div>
              <TopCard verified={true} />
              <TopCard />
              <TopCard />
              <TopCard verified={true} />
              <TopCard />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collection;
