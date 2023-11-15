import React from 'react';

import Layout from '../../components/layout/Layout';
import Button from "../../components/button/Button";

import styles from './CongratsPage.module.css';

const CongratsPage = () => {
    return (
        <Layout
            title={"Congrats"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiysmod tempor incididunt ut labore"}
        >
            <Button type="submit" className="wide accent">Start</Button>
        </Layout>
    );
};

export default CongratsPage;