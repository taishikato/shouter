import React from 'react';
import styled from 'styled-components';
import {TitleHeader} from './TitleHeader/TitleHeader';
import {MainContent} from './MainContent/MainContent';

const LoginModalSection = styled.section`
  background-color: #0c2631;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    height: 100vh;
    width: 100vw;
    padding: 0 20px;
    overflow: hidden;
  }
  @media screen and (min-width: 1024px) {
    height: 553px;
    width: 810px;
    border-radius: 30px;
  }
`;

const Container = styled.div`
  @media screen and (max-width: 660px) {
    max-width: 90%;
    width: 100%;
  }
  @media screen and (min-width: 660px) and (max-width: 1024px) {
    max-width: 594px;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 594px;
  }
`;

export const LoginModal = () => {
  return (
    <LoginModalSection className="LoginModal">
      <Container className="Container">
        <TitleHeader />
        <MainContent />
      </Container>
    </LoginModalSection>
  );
};
