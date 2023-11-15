import React from "react";

import Input from "../input/Input";

import "./PageOne.css";
import styles from "../../pages/onboarding-page/OnboardingPage.module.css";
import Button from "../button/Button";

const PageOne = ({ onButtonClick}) => {

  return (
      <>
        <Input
            required
            icon="email"
            type="select"
            name="selectedCountry"
            label="Country"
            placeholder="Choose"
            // value={selectedCountry}
            // @ts-ignore
            // onChange={handleCountryChange}
            onChange={(e) => console.log(e)}/>
        <div className={styles.buttons}>
          <Button
              className={styles.button}
              isWide
              hasBorder
          >Skip</Button>
          <Button
              className={styles.button}
              isAccent
              isWide
              onClick={() => onButtonClick("pagetwo")}
          >Next</Button>
        </div>
      </>
  );
};

export default PageOne;
