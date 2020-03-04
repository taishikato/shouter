import React from 'react';
import styled from 'styled-components';
import { GoogleIconSvg } from './GoogleIconSvg';
import firebase from '../../../../plugins/firebase';

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
    left: 5%;
    height: 51px;
    width: 51px;
`;

const TextDiv = styled.div`
    color: #000000;
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width:320px) {
        font-size: 18px;
    }
`;

export const StyledGoogleLoginButton = () => {
    // For firebase Google Auth
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then( user => {
                console.log('user from login button: ',user)
            })
            .catch(err => console.log(err))
    }
    return (
        <GoogleLoginButton onClick={handleLogin}>
            <GoogleIconContainer>
                <GoogleIconSvg />
            </GoogleIconContainer>
            <TextDiv>Continue with Google</TextDiv>
        </GoogleLoginButton>
    );
}