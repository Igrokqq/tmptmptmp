import React, { ReactNode } from 'react';

import styles from './Layout.module.css';

interface LayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
    return (
        <div className={styles.layout}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            {children}
        </div>
    );
};

export default Layout;
