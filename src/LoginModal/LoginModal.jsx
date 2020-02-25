import React from 'react';
import styled from 'styled-components';

import { StyledHeader as Header } from './Header/Header';
import { StyledMain as Main } from './Main/Main';

const LoginModal = styled.div`
    background-color: #0C2631;
    display: flex;
    justify-content: center;
    @media screen and (max-width:1024px) { 
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    @media screen and (min-width:1024px) {
        height: 553px;
        width: 810px;
        border-radius: 30px;
    }
`
const Container = styled.div`
    @media screen and ( max-width:1024px) {
        max-width: 594px;
        width: 100%;
    }
    @media screen and (min-width:1024px) {
        width: 594px;
    }
`
const MarginContainer = styled.div`
    @media screen and ( max-width:1024px) {
        max-width: 554px;
        margin: 0 20px;
    }
    @media screen and (min-width:1024px) {
        width: 554px;
        margin: 0 20px;
    }
`

export const StyledLoginModal = () => {
    return (
        <LoginModal>
            <Container>
                <MarginContainer>
                    <Header />
                    <Main />
                </MarginContainer>
            </Container>
        </LoginModal>
    );
}