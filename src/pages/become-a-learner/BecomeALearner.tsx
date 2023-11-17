import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "../../components/header/Header";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";
import WelcomePage from "../welcome-page/WelcomePage";
import JoinPage from "../join-page/JoinPage";
import LearnerRegistrationPage from "../learner-registration-page/LearnerRegistrationPage";
import LearnerVerifyEmailPage from "../learner-verify-email-page/LearnerVerifyEmailPage";
import LearnerEmailVerificationPage from "../learner-email-verification-page/LearnerEmailVerificationPage";
import LearnerCongratsPage from "../learner-congrats-page/LearnerCongratsPage";
import LearnerOnboardingPage from "../learner-onboarding-page/LearnerOnboardingPage";

import styles from './BecomeALearner.module.css'

function BecomeALearner() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <ModalWrapper>
                <Modal>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/join" element={<JoinPage isExpert={false}/>} />
                        <Route path="/registration" element={<LearnerRegistrationPage />} />
                        <Route path="/verify-email" element={<LearnerVerifyEmailPage />} />
                        <Route path="/email-verification" element={<LearnerEmailVerificationPage />} />
                        <Route path="/congrats" element={<LearnerCongratsPage />} />
                        <Route path="/onboarding" element={<LearnerOnboardingPage />} />
                    </Routes>
                </Modal>
            </ModalWrapper>
        </div>
    );
}

export default BecomeALearner;
