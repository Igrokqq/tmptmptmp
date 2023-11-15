import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";

import styles from './VerifyEmailPage.module.css';

const VerifyEmailPage = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        password: "",
        errors: false
    });

    const { email, errors, password } = state;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = !email;
        setState((prevState) => ({
            ...prevState,
            errors
        }));

        if (!errors) {
            navigate('/become-a-learner/email-verification');
        }
    };

    return (
        <Layout
            title={"Verify email address"}
            subtitle={"Select a sign up option below. If you continue with email address, we’ll send you a verification code via email."}
        >
            <form onSubmit={handleSubmit}>
                <Input
                    required
                    icon="email"
                    type="email"
                    name="email"
                    label="Current email"
                    placeholder="example@mail.com"
                    value={email}
                    errors={errors}
                    onChange={handleChange}
                />
                <Button
                    className={styles.buttonJoin}
                    isAccent
                    isWide
                    type="submit"
                >Join</Button>
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default VerifyEmailPage;
