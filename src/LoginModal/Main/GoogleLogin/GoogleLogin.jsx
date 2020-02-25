import React from 'react';
import styled from 'styled-components';

import { StyledGoogleIcon as GoogleIcon } from './GoogleIcon';

const GoogleLoginButton = styled.div`
    background-color: #FFFFFF;
    height: 68px;
    border-radius: 10px;
    position: relative;
    &:hover {
        cursor: pointer;
    }
`;

const GoogleIconContainer = styled.div`
    position: absolute;
    top: 8px;
    left: 30px;
    height: 51px;
    width: 51px;
`;

const TextBox = styled.div`
    color: #000000;
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledGoogleLoginButton = () => {
    return (
        <GoogleLoginButton>
            <GoogleIconContainer>
                <GoogleIcon />
            </GoogleIconContainer>
            <TextBox>Continue with Google</TextBox>
        </GoogleLoginButton>
    );
}