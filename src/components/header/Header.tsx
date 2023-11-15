import React from 'react';

import Button from "../button/Button";

import logoImg from './assets/logo.png';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <p>Wisdocity.ai</p>
                <div>
                    <Button className="wide border">Log In</Button>
                    <img src={logoImg} alt="Logo"/>
                </div>
        </header>
    );
};

export default Header;
