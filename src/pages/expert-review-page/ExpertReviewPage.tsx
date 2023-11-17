import React, {useState} from 'react';

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";

import styles from './ExpertReviewPage.module.css';

interface ExpertRegistrationPageProps {
    currentPage?: number;
    setCurrentPage?: any;
    nextPageNumber?: (pageNumber: string) => void;
    totalSteps?: number;
    isExpert?: boolean;
}

const ExpertReviewPage: React.FC<ExpertRegistrationPageProps> = ({
    currentPage= 0,
    nextPageNumber = () => {},
    totalSteps = 0,
    setCurrentPage,
    isExpert
}) => {

    const [isToggled1, setIsToggled1] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <Layout>
            <ModalHeader
                title={'Review'}
            />
            <form className={styles.registrationForm} onSubmit={handleSubmit}>
                <br/>
                <h3>My category</h3>
                <p>Al x Career x Design</p>
                <br/>
                <br/>
                    <h3>Contacts</h3>
                    <p>@ W. Gray St. Utica, Pennsylvania
                        & (270) 555-0117
                        jenny.wilson@example.com</p>
                <br/>
                <br/>
                    <h3>Bio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet,
                        ¡consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit amet,
                        consectetur, Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            jamet, consectetur?</p>
                <br/>
                <br/>
                    <h3>Links to social media</h3>
                    <p>https://www.linkedin.com/in/sylvain-duranton/</p>
                <br/>
                <h3>Your additional services</h3>
                <ToggleSwitch
                    label="1:1 meetings"
                    isToggled={isToggled1}
                    onToggle={() => setIsToggled1(!isToggled1)}
                />
                <ToggleSwitch
                    label="Workshops"
                    isToggled={isToggled2}
                    onToggle={() => setIsToggled2(!isToggled2)}
                />
                <Buttons>
                    <Button
                        isWide
                        hasBorder
                    >Cancel</Button>
                    <Button
                        type="submit"
                        isAccent
                        isWide
                    >Next</Button>
                </Buttons>
            </form>
        </Layout>
    );
};

export default ExpertReviewPage;