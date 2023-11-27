import React from 'react';
import { Badge } from 'react-bootstrap';
import styles from './DateButtons.module.css'

// type Props = {label: string; isActive: boolean;};

type ButtonData = {
  isActive: boolean;
  title: string;
}

const DateButtons = () => {
  const buttons: ButtonData[] = [
    {
      isActive: false,
      title: '24 hours'
    },
    {
      isActive: true,
      title: '3 days'
    },
    {
      isActive: false,
      title: 'Last week'
    },
    {
      isActive: false,
      title: 'Last month'
    },
    {
      isActive: false,
      title: 'Custom date'
    }
  ];

  return (
    <div className='d-flex'>
      {buttons.map((button: ButtonData) => (
        <div className={`${styles.button} mx-2 ${button.isActive ? styles.active : ''}`}>
          {button.title}
        </div>
      ))}
    </div>
  );
};

export default DateButtons;
