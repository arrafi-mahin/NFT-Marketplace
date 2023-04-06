import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Button from "../UI Elements/Button/Button";
import Card from "../UI Elements/GalleryCard/Card";
import styles from "./Category.module.css";
function Category(props) {
  const [data, setData] = useState({
    title: "ArtCrypto",
  });
  const filterItem = (e) => {
    document
      .getElementById("filterBtn")
      .querySelector(".filterActive")
      .classList.remove("filterActive");
    document
      .getElementById(`${e.currentTarget.id}`)
      .classList.add("filterActive");
  };
  return (
    <div className={styles.category}>
      <Container>
        <Row>
          <Col>
            <motion.h2
              initial={{ x: "-10vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className={styles.title}
            >
              Discover more NFTs
            </motion.h2>

            <div className={styles.buttons}>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                id="filterBtn"
                className={styles.categoryBtn}
              >
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="All Categories"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Art"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Celebrites"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Gaming"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Sports"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Music"
                />
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#000000",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="Crypto"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F2F2F4",
                    color: "#371C87",
                    border: "none",
                    padding: "5px",
                  }}
                  small
                  inverse
                  title="All Filter"
                />
              </motion.div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={styles.gallery}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button inverse title="More NTFs" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
