import React from 'react';
import styled from 'styled-components';

import Button from '../components/ui/Button';

import logoImg from '../assets/img/logo.png';
import googleImg from '../assets/img/social/google.png';
import facebookImg from '../assets/img/social/facebook.png';
import linkedinImg from '../assets/img/social/linkedin.png';

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

const Page = styled.div`
  width: 100%;
  height: 100%;
  .page-title {
    text-align: center;
    font-family: Nunito, Calibri, Arial, sans-serif;
    font-size: 24px;
  }
`;
const Page1 = styled(Page)`
  p.page-ltcranac {
    margin: 16px 0 32px;
    text-align: center;
    color: #6B6985;
  }
  .page-or {
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 38px 0;
    &:before,
    &:after {
      content: '';
      display: block;
      width: 172px;
      height: 1px;
      background: #B4BFD1;
      margin: 0 7px;
    }
  }
  ${Button}.page-cowiem {
    margin: 0 auto;
    display: block;
    width: 372px;
  }

  p.page-arhvanac {
    text-align: center;
    margin-top: 32px;

    a {
      color: var(--c-accent-purple);
      font-weight: 700;
    }
  }
`;
const Page2 = styled(Page)`
  ${Button}[type=submit] {
    margin: 0 auto;
    display: block;
  }

  p.page-arhvanac {
    text-align: center;
    margin-top: 32px;

    a {
      color: var(--c-accent-purple);
      font-weight: 700;
    }
  }
`;
const BlockRadio = styled.div`
  padding: 14px 16px;
  width: 158px;
  height: 72px;
  position: relative;
  border: 1px solid #D9D9EB;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: #6B6985;
  text-align: center;
  line-height: 1.36em;
  &.checked {
    color: var(--c-purple02);
    border-color: var(--c-purple02) !important;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
const RadioRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  margin: 32px 0;
`;
const SocAuth = styled.button`
  border: 1px solid #D9D9EB;
  width: 116px;
  height: 56px;
  border-radius: 16px;
  background: none;
  outline: none;
  &:active {
    border-color: var(--c-purple02) !important;
  }
`;
const SocAuthRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
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
                    <Page1>
                        <p className="page-title">Welcome to Wisdocity</p>
                        <p className="page-ltcranac">Let's create an account</p>
                        <SocAuthRow>
                            <SocAuth className="wide border">
                                <img src={googleImg} alt="Google"/>
                            </SocAuth>
                            <SocAuth className="wide border">
                                <img src={facebookImg} alt="Facebook"/>
                            </SocAuth>
                            <SocAuth className="wide border">
                                <img src={linkedinImg} alt="LinkedIn"/>
                            </SocAuth>
                        </SocAuthRow>
                        <p className="page-or">OR</p>
                        <div>
                            <Button className="wide accent page-cowiem">Continue with email</Button>
                        </div>
                        <p className="page-arhvanac">Already have an account? <a href="#">Log In</a></p>
                    </Page1>
                    <Page2 hidden>
                        <p className="page-title">Join as a learner or an expert</p>
                        <form action="#">
                            <RadioRow>
                                <BlockRadio>
                                    <input type="radio" name="join-as" />
                                    <span>I'm an expert, want to...</span>
                                </BlockRadio>
                                <BlockRadio className="checked">
                                    <input type="radio" name="join-as" checked />
                                    <span>I'm a learner, want to...</span>
                                </BlockRadio>
                            </RadioRow>
                            <div>
                                <Button type="submit" className="wide accent">Join</Button>
                            </div>
                        </form>
                        <p className="page-alhaanac">Already have an account? <a href="#">Log In</a></p>
                    </Page2>
                </Modal>
            </ModalWrapper>
        </Wrapper>
    );
}

export default BecomeALearner;
