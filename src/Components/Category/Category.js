import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../UI Elements/Button/Button";
import Card from "../UI Elements/GalleryCard/Card";
import styles from "./Category.module.css";
function Category(props) {
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
            <h3 className={styles.title}>Discover more NFTs</h3>
            <div className={styles.buttons}>
              <div>
                <Button
                  onClick={filterItem}
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
              </div>
              <div>
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
              </div>
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
