import React, { FormEvent, useCallback, useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router";
import styles from "./WelcomePage.module.css";

const LoginView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log("Submitted:", e);

      // Perform your form validation here
      if (!email || !password) {
        // Display an error message or handle validation accordingly
        console.log("Please fill in all required fields.");
        return;
      }

      // If validation is successful, navigate to the dashboard
      navigate("/learner/profile");
    },
    [navigate, email, password]
  );

  return (
    <Layout>
      <ModalHeader
        title={"Welcome back"}
        subtitle={"Please enter your details"}
      />
      <form onSubmit={onSubmit}>
        <Input
          required
          type="email"
          label="Email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          label="Password"
          type="password"
          showPasswordToggle
          placeholder="************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" isLong isCenter isAccent isWide>
          join
        </Button>
      </form>

      <div className={styles.socialButtons}></div>
    </Layout>
  );
};

export default LoginView;
