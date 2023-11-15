import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AvatarUpload from "../../components/avatar-upload/AvatarUpload";
import styles from './RegistrationFormPage.module.css';

const RegistrationFormPage = () => {
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
        const errors = !email || !password;
        setState((prevState) => ({
            ...prevState,
            errors
        }));

        if (!errors) {
            navigate('/become-a-learner/verify-email');
        }
    };

    const handleUpload = (file: File) => {
        // Handle the file upload, for example, send it to a server
        console.log('Uploading file:', file);
    };

    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryErrors, setCountryErrors] = useState(false);

    const handleCountryChange = () => {
        // name: string, value: string
        // setSelectedCountry(value);
        // Add validation logic if needed
    };

    return (
        <Layout title={"Welcome"}>
            <form onSubmit={handleSubmit}>
                <Input
                    required
                    icon="email"
                    type="text"
                    name="email"
                    label="Full name"
                    placeholder="Jenny Wilson"
                    value={email}
                    errors={errors}
                    onChange={handleChange}
                />
                <AvatarUpload onUpload={handleUpload}/>
                {/* Include logic to populate country options */}
                <Input
                    required
                    icon="email"
                    type="select"
                    name="email"
                    label="Country"
                    placeholder="Choose"
                    value={selectedCountry}
                    errors={countryErrors}
                    onChange={handleCountryChange}
                />
                <Input
                    required
                    icon="email"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Create password"
                    value={password}
                    errors={errors}
                    onChange={handleChange}
                />
                <div>
                    <Button type="button" className="wide accent">Cancel</Button>
                </div>
                <div>
                    <Button type="submit" className="wide accent">Next</Button>
                </div>
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default RegistrationFormPage;
