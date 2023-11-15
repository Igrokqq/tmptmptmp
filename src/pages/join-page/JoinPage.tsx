import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';
import styles from './JoinPage.module.css';

const JoinPage = () => {
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate('/become-a-learner/registration');
    };

    return (
        <Layout title={"Join as a learner or an expert"}>
            <form onSubmit={handleJoin}>
                <div className={styles.row}>
                    <div className={styles.radio}>
                        <input type="radio" name="join-as" />
                        <span>I'm an expert, want to...</span>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" name="join-as" checked />
                        <span>I'm a learner, want to...</span>
                    </div>
                </div>
                <div>
                    <Button type="submit" className="wide accent">
                        Join
                    </Button>
                </div>
            </form>
            <p className={styles.already}>
                Already have an account? <a href="#">Log In</a>
            </p>
        </Layout>
    );
};

export default JoinPage;
