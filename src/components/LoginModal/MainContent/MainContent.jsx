import React ,{ useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../contexts/AuthContext';
import firebase from '../../../plugins/firebase';

import { StyledLoginForm as LoginForm } from './LoginForm/LoginForm';
import { StyledHorizon as Horizon } from './Horizon/Horizon';
import { StyledGoogleLoginButton as GoogleLoginButton } from './GoogleLogin/GoogleLogin';

const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainContent = () => {
    const { auth} = useContext(AuthContext);
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
        <StyledMain onClick={handleLogin}>
            <LoginForm />
            <Horizon />
            <GoogleLoginButton />
        </StyledMain>
    );
}
