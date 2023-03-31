import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import Button from "../UI Elements/Button/Button";
import menu from "../../Assets/icons/menu.svg";
import "react-modern-drawer/dist/index.css";
import styles from "./NavDrawer.module.css";
function NavDrawer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar className={`${styles.navbar} d-md-none `} fixed="top">
      <div className={styles.navContain}>
        <NavLink className={styles.brand} to="/">
          NFTERS
        </NavLink>
        <span onClick={drawerHandler}>
          <img src={menu} alt="menu" />
        </span>
      </div>
      <Drawer
        open={isOpen}
        onClose={drawerHandler}
        direction="right"
        className="bla bla bla"
      >
        <Container className={styles.drawer}>
          <Navbar.Brand>
            <NavLink onClick={drawerHandler} className={styles.brand} to="/">
              NFTERS
            </NavLink>
          </Navbar.Brand>
          <div className={styles.links}>
            <NavLink onClick={drawerHandler} className={styles.navLink} to="/">
              Marketplace
            </NavLink>
            <NavLink
              onClick={drawerHandler}
              className={styles.navLink}
              to="/resource"
            >
              Resource
            </NavLink>
            <NavLink
              onClick={drawerHandler}
              className={styles.navLink}
              to="/about"
            >
              About
            </NavLink>
          </div>
        </Container>
      </Drawer>
    </Navbar>
  );
}

export default NavDrawer;
