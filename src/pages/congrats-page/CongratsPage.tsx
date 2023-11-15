import React from 'react';
import {useNavigate} from "react-router-dom";

import Layout from '../../components/layout/Layout';
import Button from "../../components/button/Button";

import styles from './CongratsPage.module.css';

const CongratsPage = () => {
    const navigate = useNavigate();

    const handleButtonStart = () => {
        navigate('/become-a-learner/onboarding');
    };
    return (
        <Layout
            title={"Congrats"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiysmod tempor incididunt ut labore"}
        >
            <Button
                className={styles.buttonStart}
                isAccent
                isWide
                onClick={handleButtonStart}
            >Start</Button>
        </Layout>
    );
};

export default CongratsPage;