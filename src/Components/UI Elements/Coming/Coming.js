import React from "react";
import styles from "./Coming.module.css";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
export default function Coming() {
  return (
    <Container>
      <Row>
        <h2 className="text-center">Coming Soon...</h2>
      </Row>
    </Container>
  );
}
