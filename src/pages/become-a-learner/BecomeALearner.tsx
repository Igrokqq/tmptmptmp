import React from 'react';
import {Outlet} from "react-router-dom";

import BecomeHeader from "../../components/become-header/BecomeHeader";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";

import styles from './BecomeALearner.module.css'

function BecomeALearner() {
    return (
        <div className={styles.wrapper}>
            <BecomeHeader />
            <ModalWrapper>
                <Modal>
                    <Outlet/>
                </Modal>
            </ModalWrapper>
        </div>
    );
}

export default BecomeALearner;
