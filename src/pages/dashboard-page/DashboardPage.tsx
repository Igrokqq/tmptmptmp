import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Dashboard.module.css'
import DateButtons from './components/DateButtons';

const DashboardPage: React.FC = () => {

  return <Container className={styles.container}>
    <DateButtons />
  </Container>
};

export default DashboardPage;
