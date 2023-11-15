import React from 'react';

import Button from "../button/Button";

import logo from './assets/logo.svg';

import styles from './Header.module.css';
import button from "../button/Button";

const Header = () => {
    const handleClick = (e: any) => {
        console.log(e);
    };

    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#">Wisdocity.ai</a>
            <div>
                <Button
                    isWide
                    hasBorder
                    onClick={() => {}}
                >Log In</Button>
                <img src={logo} alt="Logo"/>
            </div>
        </header>
    );
};

export default Header;
