import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import styles from './EmailVerificationPage.module.css';

const EmailVerificationPage = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        code: "",
        errors: false
    });

    const { code, errors } = state;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = !code;
        setState((prevState) => ({
            ...prevState,
            errors
        }));
        if (!errors) {
            navigate('/become-a-learner/congrats');
        }
    };

    return (
        <Layout
            title={"Verification"}
            subtitle={"Please check you email inbox for a verification code to confirm your identity"}
        >
            <form onSubmit={handleSubmit}>
                <Input
                    required
                    icon="email"
                    type="number"
                    name="code"
                    label="Verification code"
                    placeholder="Enter 6 digit code"
                    value={code}
                    errors={errors}
                    onChange={handleChange}
                />
                <div>
                    <Button type="submit" className="wide accent">Join</Button>
                </div>
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default EmailVerificationPage;
