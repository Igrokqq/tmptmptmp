import React from 'react';
import styled from 'styled-components';

import Button from '../components/ui/Button';
import BcLrPage1 from '../components/bcm-a-lrnr-pages/BcLrPage1';
import BcLrPage2 from '../components/bcm-a-lrnr-pages/BcLrPage2';

import logoImg from '../assets/img/logo.png';

const Header = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #E4DEE7;
  box-shadow: 0 4px 10px #B2A0BB26;
  & > p {
    font-family: Nunito, Calibri, Arial, sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin-left: 130px;
  }
  & > div {
    margin-right: 40px;
    height: 40px;
    img {
      height: 100%;
      vertical-align: top;
    }
    button {
      height: 100% !important;
      color: #8419BB;
      border-color: #8419BB !important;
      margin-right: 32px;
    }
  }
`;
const Modal = styled.div`
  width: 528px;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 0 22px #B4BFD159;
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function BecomeALearner() {
    return (
        <Wrapper>
            <Header>
                <p>Wisdocity.ai</p>
                <div>
                    <Button className="wide border">Log In</Button>
                    <img src={logoImg} alt="Logo"/>
                </div>
            </Header>
            <ModalWrapper>
                <Modal>
                    <BcLrPage1 hidden />
                    <BcLrPage2 />
                </Modal>
            </ModalWrapper>
        </Wrapper>
    );
}

export default BecomeALearner;
