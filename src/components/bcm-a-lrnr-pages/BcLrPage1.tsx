import React from 'react';
import styled from 'styled-components';

import Button from '../ui/Button';
import BcLrPage from './BcLrPage.styled';

import googleImg from '../../assets/img/social/google.png';
import facebookImg from '../../assets/img/social/facebook.png';
import linkedinImg from '../../assets/img/social/linkedin.png';

const Wrapper = styled(BcLrPage)`
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
`;
const SocAuthRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
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

function BcLrPage1(props: { hidden?: boolean }) {
  return (
    <Wrapper {...props}>
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
        <p className="page-already-acc">Already have an account? <a href="#">Log In</a></p>
    </Wrapper>
  );
}

export default BcLrPage1;
