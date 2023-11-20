import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Button from "../../components/button/Button";

import styles from "./Profile.module.css";
import Layout from "../../components/layout/Layout";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Input from "../../components/input/Input";
import AvatarUpload from "../../components/avatar-upload/AvatarUpload";
import CountrySelect from "../../components/country-select/CountrySelect";
import Buttons from "../../components/buttons/Buttons";
import Already from "../../components/already/Already";
import Modal from "../../components/modal/Modal";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>('personal');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabsContainer}>
        <div className={styles.tabButtons}>
          <ButtonTab
            onClick={() => handleTabClick('personal')}
            isActive={activeTab === 'personal'}
          >
            Personal Information
          </ButtonTab>
          <ButtonTab
            onClick={() => handleTabClick('achievements')}
            isActive={activeTab === 'achievements'}
          >
            Achievements
          </ButtonTab>
          <ButtonTab
            onClick={() => handleTabClick('billing')}
            isActive={activeTab === 'billing'}
          >
            Billing
          </ButtonTab>
        </div>
        <Button className={styles.saveButton}>Save changes</Button>
      </div>
      {activeTab === 'personal' && <PersonalInformation />}
      {activeTab === 'achievements' && <Achievements />}
      {activeTab === 'billing' && <Billing />}
    </div>
  );
};

export default ProfilePage;

const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
    errors: false
  });

  const { phone, email, name, password, errors } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !name || !phone || !email;
    if (!errors) {
      navigate('/become-a-learner/verify-email');
    }
  };

  const handleUpload = (file: File) => {
    console.log('Uploading file:', file);
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCountry: event.target.value,
    }));
  };

  return (
    <div className={styles.test}>
    <Modal>
      <Layout>
        <h2 className={styles.title}>Personal info</h2>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <AvatarUpload onUpload={handleUpload} />
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Jenny Wilson"
            className={styles.input}
            value={name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            label="Current email"
            placeholder="example@mail.com"
            value={email}
            errors={errors}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone number"
            placeholder="908 082 35 67"
            value={phone}
            onChange={handleChange}
          />
        </form>
      </Layout>
    </Modal>

      <Modal>
        <Layout>
          <h2 className={styles.title}>Address</h2>
          <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <CountrySelect onChange={handleCountryChange}/>
            <CountrySelect onChange={handleCountryChange}/>
            <CountrySelect onChange={handleCountryChange}/>
            <Input
              type="number"
              name="zip"
              label="ZIP code"
              placeholder="Enter"
              className={styles.input}
              value={name}
              onChange={handleChange}
            />
          </form>
        </Layout>
      </Modal>

      <Modal>
        <Layout>
          <h2 className={styles.title}>Change password</h2>
          <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <Input
              type="password"
              name="password"
              label="Current password"
              placeholder="***********"
              value={password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              label="New password"
              placeholder="Create new password"
              value={password}
              onChange={handleChange}
            />
          </form>
        </Layout>
      </Modal>

      <Modal>
        <Layout>
          <h2 className={styles.title}>Security settings</h2>
          <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <CountrySelect onChange={handleCountryChange}/>
            <Input
              type="text"
              name="name"
              label="Your answer"
              placeholder="Create answer"
              className={styles.input}
              value={name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              label="Alternate email address"
              placeholder="Add email"
              value={email}
              errors={errors}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              label="Alternate phone number"
              placeholder="Add number"
              value={phone}
              onChange={handleChange}
            />
          </form>
        </Layout>
      </Modal>
    </div>
  );
};

const Achievements: React.FC = () => {
  // ... your Achievements component
  return (
    <div className={styles.test}>
      <Modal>
        <Layout>
          <h2 className={styles.title}>Certifications</h2>

        </Layout>
      </Modal>
    </div>
  );
};

const Billing: React.FC = () => {
  // ... your Billing component
  return <div>Billing</div>;
};


// ButtonTab.tsx
// import React from 'react';
// import Button from '../../components/button/Button';
// import styles from './Learner.module.css';

interface ButtonTabProps {
  onClick: () => void;
  isActive: boolean;
  children: any
}

const ButtonTab: React.FC<ButtonTabProps> = ({ onClick, isActive, children }) => (
  <div className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}>
    <Button onClick={onClick}>{children}</Button>
  </div>
);

// export default ButtonTab;
