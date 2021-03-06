import React from 'react';
import styled from 'styled-components';
import {StyledLoginForm as LoginForm} from './LoginForm/LoginForm';
import {StyledHorizon as Horizon} from './Horizon/Horizon';
import {StyledGoogleLoginButton as GoogleLoginButton} from './GoogleLogin/GoogleLogin';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainContent = () => {
  return (
    <StyledMain>
      <LoginForm />
      <Horizon />
      <GoogleLoginButton />
    </StyledMain>
  );
};
