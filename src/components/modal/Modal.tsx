import React from 'react';

import styles from './Modal.module.css';

interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    );
};

export default Modal;