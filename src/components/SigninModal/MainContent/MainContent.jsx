import React from 'react';
import styled from 'styled-components';
import { StyledSigninForm as SigninForm } from './SigninForm/SigninForm';


const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainContent = () => {
    return (
        <StyledMain>
            <SigninForm />
        </StyledMain>
    );
}
