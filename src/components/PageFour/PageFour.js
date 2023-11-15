import React from "react";
import Input from "../input/Input";
import styles from "../../pages/onboarding-page/OnboardingPage.module.css";
import Button from "../button/Button";

const PageFour = () => {
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
                >Next</Button>
            </div>
        </>
    );
}

export default PageFour;