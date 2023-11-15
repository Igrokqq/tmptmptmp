import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";

import iconGoogle from './assets/icon_google.svg';
import iconFacebook from './assets/icon_facebook.svg';
import iconLinkedin from './assets/icon_linkedin.svg';

import styles from './WelcomePage.module.css';

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
            <div className={styles.socialButtons}>
                <Button className={styles.socialButton}>
                    <img src={iconGoogle} alt="Google"/>
                </Button>
                <Button className={styles.socialButton}>
                    <img src={iconFacebook} alt="Facebook"/>
                </Button>
                <Button className={styles.socialButton}>
                    <img src={iconLinkedin} alt="LinkedIn"/>
                </Button>
            </div>
            <p className={styles.or}>OR</p>
            <Button
                className={styles.buttonContinue}
                isAccent
                isWide
                onClick={handleContinueWithEmail}
            >Continue with email</Button>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default WelcomePage;
