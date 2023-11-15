import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/layout/Layout";

import iconGoogle from './assets/icon_google.png';
import iconFacebook from './assets/icon_facebook.png';
import iconLinkedin from './assets/icon_linkedin.png';

import styles from './WelcomePage.module.css';
import Button from "../../components/button/Button";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleContinueWithEmail = () => {
        navigate('/become-a-learner/join');
    };

    return (
        <Layout
            title={"Welcome to Wisdocity"}
            subtitle={"Let's create an account"}
        >
            {/*<Wrapper {...props}>*/}
            <div className={styles.buttons}>
                <button className={styles.button}>
                    <img src={iconGoogle} alt="Google"/>
                </button>
                <button className={styles.button}>
                    <img src={iconFacebook} alt="Facebook"/>
                </button>
                <button className={styles.button}>
                    <img src={iconLinkedin} alt="LinkedIn"/>
                </button>
            </div>
            <p className={styles.or}>OR</p>
            <Button className="wide accent page-cowiem" onClick={handleContinueWithEmail}>
                Continue with email
            </Button>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default WelcomePage;
