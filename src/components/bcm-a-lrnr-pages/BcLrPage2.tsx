import React from 'react';
import styled from 'styled-components';

import Button from '../ui/Button';
import BcLrPage from './BcLrPage.styled';

const Wrapper = styled(BcLrPage)`
  ${Button}[type=submit] {
    margin: 0 auto;
    display: block;
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

function BcLrPage2(props: { hidden?: boolean }) {
    return (
        <Wrapper {...props}>
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
            <p className="page-already-acc">Already have an account? <a href="#">Log In</a></p>
        </Wrapper>
    );
}

export default BcLrPage2;
