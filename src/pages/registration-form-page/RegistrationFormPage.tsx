import React, {ChangeEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AvatarUpload from "../../components/avatar-upload/AvatarUpload";

import styles from './RegistrationFormPage.module.css';

const RegistrationFormPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        selectedCountry: "",
    });
    console.log(formData);
    const { fullname, password, selectedCountry } = formData;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = !fullname || !password || !selectedCountry;
        if (true) {
            navigate('/become-a-learner/verify-email');
        }
    };

    const handleUpload = (file: File) => {
        // Handle the file upload, for example, send it to a server
        console.log('Uploading file:', file);
    };

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <Layout title={"Welcome"}>
            <form className={styles.registrationForm} onSubmit={handleSubmit}>
                <Input
                    required
                    type="text"
                    name="fullname"
                    label="Full name"
                    placeholder="Jenny Wilson"
                    className={styles.input}
                    value={fullname}
                    onChange={handleChange}
                />
                <AvatarUpload onUpload={handleUpload}/>
                <Input
                    required
                    icon="email"
                    type="select"
                    name="selectedCountry"
                    label="Country"
                    placeholder="Choose"
                    value={selectedCountry}
                    // @ts-ignore
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
                    onChange={handleChange}
                />
                <div className={styles.buttons}>
                    <Button
                        className={styles.button}
                        isWide
                        hasBorder
                        type="button"
                    >Cancel</Button>
                    <Button
                        className={styles.button}
                        isAccent
                        isWide
                        type="submit"
                    >Next</Button>
                </div>
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default RegistrationFormPage;
