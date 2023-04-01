import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CollectionCard from "../UI Elements/CollectionCard/CollectionCard";
import Display from "../UI Elements/CollectionDesplay/Display";
import TopCard from "../UI Elements/TopCollectionCard/TopCard";
import styles from "./Collection.module.css";
import bg from "../../Assets/Image/bg1.png";
import user from "../../Assets/Image/user.png";
import { useEffect } from "react";
function Collection(props) {
  const [collection, setCollection] = useState([
    {
      id: 1,
      title: "The Futr Abstr",
      user: "https://source.unsplash.com/random/900×700/?face",
      stack: 10,
      item: "https://source.unsplash.com/random/300×300",
      price: 0.25,
    },
    {
      id: 2,
      title: "The Futr Abstr",
      user: { user },
      stack: 10,
      item: { bg },
      price: 0.25,
    },
    {
      id: 3,
      title: "The Futr Abstr",
      user: { user },
      stack: 10,
      item: { bg },
      price: 0.25,
    },
  ]);
  const [display, setDisplay] = useState(collection[0]);
  useEffect(() => {
    setDisplay(collection[0]);
    console.log(display);
  }, []);
  return (
    <div className={styles.collection}>
      <Container>
        <Row>
          <Col md={8} sm={12} className="">
            <Row>
              <Col md={6} sm={12} className="mb-4">
                <Display data={display} />
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
