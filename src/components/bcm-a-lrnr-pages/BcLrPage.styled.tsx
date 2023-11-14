import React from 'react';
import styled from 'styled-components';

const BcLrPage = styled.div`
  width: 100%;
  height: 100%;
  .page-title {
    text-align: center;
    font-family: Nunito, Calibri, Arial, sans-serif;
    font-size: 24px;
  }
  p.page-already-acc {
    text-align: center;
    margin-top: 32px;

    a {
      color: var(--c-accent-purple);
      font-weight: 700;
    }
  }
`;

export default BcLrPage;
