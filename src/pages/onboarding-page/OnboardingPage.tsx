import React, {ChangeEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';

import styles from './OnboardingPage.module.css';
import PageFour from "../../components/PageFour/PageFour";
import PageOne from "../../components/PageOne/PageOne";
import PageThree from "../../components/PageThree/PageThree";
import PageTwo from "../../components/PageTwo/PageTwo";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import Input from "../../components/input/Input";

const OnboardingPage = () => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState(false);

    const handleRadioChange = () => {
        setChecked(!isChecked);
    };

    const [page, setPage] = useState("pageone");

    const nextPage = (page: any) => {
        setPage(page);
    };

    const nextPageNumber = (pageNumber: any) => {
        switch (pageNumber) {
            case "1":
                setPage("pageone");
                break;
            case "2":
                setPage("pagetwo");
                break;
            case "3":
                setPage("pagethree");
                break;
            case "4":
                alert("Ooops! Seems like you did not fill the form.");
                break;
            default:
                setPage("1");
        }
    };

    const [formData, setFormData] = useState({
        selectedCountry: "",
    });

    const { selectedCountry } = formData;

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <Layout
            title={"Onboarding"}
            subtitle={"We want to get to know you"}
        >
            <form onSubmit={() => {}}>
                <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
                {
                    {
                        pageone: <PageOne onButtonClick={nextPage} />,
                        pagetwo: <PageTwo onButtonClick={nextPage} />,
                        pagethree: <PageThree onButtonClick={nextPage} />,
                        pagefour: <PageFour />,
                    }[page]
                }
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default OnboardingPage;
