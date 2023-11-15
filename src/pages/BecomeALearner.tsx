import React from 'react';
import styled from 'styled-components';

import Header from "../components/header/Header";
import ModalWrapper from "../components/modal-wrapper/ModalWrapper";
import Modal from "../components/modal/Modal";
import WelcomePage from "./welcome-page/WelcomePage";
import JoinPage from "./join-page/JoinPage";
import RegistrationFormPage from "./registration-form-page/RegistrationFormPage";
import VerifyEmailPage from "./verify-email-page/VerifyEmailPage";
import EmailVerificationPage from "./email-verification-page/EmailVerificationPage";
import CongratsPage from "./congrats-page/CongratsPage";
import { Routes, Route } from "react-router-dom";
import OnboardingPage from "./onboarding-page/OnboardingPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function BecomeALearner() {
    return (
        <Wrapper>
            <Header />
            <ModalWrapper>
                <Modal>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/join" element={<JoinPage />} />
                        <Route path="/registration" element={<RegistrationFormPage />} />
                        <Route path="/verify-email" element={<VerifyEmailPage />} />
                        <Route path="/email-verification" element={<EmailVerificationPage />} />
                        <Route path="/congrats" element={<CongratsPage />} />
                        <Route path="/onboarding" element={<OnboardingPage />} />
                    </Routes>
                </Modal>
            </ModalWrapper>
        </Wrapper>
    );
}

export default BecomeALearner;
