import React from "react";

import Button from "../button/Button";
import Header from "../header/Header";

import logo from "../header/assets/logo.svg";

import styles from "./BecomeHeader.module.css";

const BecomeHeader: React.FC = () => {
  return (
    <Header>
      <a className={styles.logo} href="#">
        Wisdocity.ai
      </a>
      <div>
        {/* <Button
                isWide
                hasBorder
                onClick={() => {}}
            >Log In</Button> */}
        <img src={logo} alt="Logo" />
      </div>
    </Header>
  );
};

export default BecomeHeader;
