import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";
import CongratsPage from "../expert-congrats-page/ExpertCongratsPage";
import LearnerOnboardingPage from "../learner-onboarding-page/LearnerOnboardingPage";
import ExpertRegistrationPageTwo from "../expert-registration-page-two/ExpertRegistrationPage";
import ExpertRegistrationPageThree from "../expert-registration-page-three/ExpertRegistrationPage";
import ExpertRegistrationPageFour from "../expert-registration-page-four/ExpertRegistrationPage";
import ExpertRegistrationPage from "../expert-registration-page/ExpertRegistrationPage";
import ExpertVerifyEmailPage from "../expert-verify-email-page/ExpertVerifyEmailPage";
import ExpertEmailVerificationPage from "../expert-email-verification-page/ExpertEmailVerificationPage";
import WelcomePage from "../welcome-page/WelcomePage";
import JoinPage from "../join-page/JoinPage";

import styles from "./BecomeAnExpert.module.css";
import ExpertReviewPage from "../expert-review-page/ExpertReviewPage";
import BecomeHeader from "../../components/become-header/BecomeHeader";

const totalSteps = 6;

function BecomeAnExpert() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const nextPageNumber = (pageNumber: string) => {
    const numericPageNumber = parseInt(pageNumber, 10);
    if (
      !isNaN(numericPageNumber) &&
      numericPageNumber >= 1 &&
      numericPageNumber <= totalSteps
    ) {
      setCurrentPage(numericPageNumber);
    } else {
      setCurrentPage(1);
    }
  };

  const commonProps = {
    isExpert: true,
    currentPage,
    setCurrentPage,
    nextPageNumber,
    totalSteps,
  };

  // useEffect(() => {
  //     const renderCurrentPage = () => {
  //         switch (currentPage) {
  //             case 1:
  //                 return navigate('/become-an-expert/registration');
  //             case 2:
  //                 return navigate('/become-an-expert/verify-email');
  //             case 3:
  //                 return navigate('/become-an-expert/email-verification');
  //             case 4:
  //                 return navigate('/become-an-expert/congrats');
  //             case 5:
  //                 return navigate('/become-an-expert/registration');
  //             case 6:
  //                 return navigate('/become-an-expert/registration');
  //             default:
  //                 return null;
  //         }
  //     };
  //     renderCurrentPage()
  // }, [currentPage, navigate])

  return (
    <div className={styles.wrapper}>
      <BecomeHeader />
      <ModalWrapper>
        <Modal>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            {/* <Route path="/join" element={<JoinPage isExpert={true} />} /> */}
            <Route
              path="/registration"
              element={<ExpertRegistrationPage {...commonProps} />}
            />
            <Route
              path="/verify-email"
              element={<ExpertVerifyEmailPage {...commonProps} />}
            />
            <Route
              path="/email-verification"
              element={<ExpertEmailVerificationPage {...commonProps} />}
            />
            <Route path="/congrats" element={<CongratsPage />} />
            <Route
              path="/registration-two"
              element={<ExpertRegistrationPageTwo {...commonProps} />}
            />
            <Route
              path="/registration-three"
              element={<ExpertRegistrationPageThree {...commonProps} />}
            />
            <Route
              path="/registration-four"
              element={<ExpertRegistrationPageFour {...commonProps} />}
            />
            <Route path="/review" element={<ExpertReviewPage />} />
          </Routes>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

export default BecomeAnExpert;
