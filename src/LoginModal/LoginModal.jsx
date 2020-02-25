import React from 'react';
import styled from 'styled-components';

import { StyledHeader as Header } from './Header/Header';
import { StyledMain as Main } from './Main/Main';

const LoginModal = styled.div`
    background-color: #0C2631;
    min-width:480px;
    display: flex;
    justify-content: center;
    @media screen and (min-width:480px) and ( max-width:1024px) { 
        height: 100vh;
        width: 100vw;
    }
    @media screen and (min-width:1024px) {
        height: 553px;
        width: 810px;
        border-radius: 30px;
    }
`
const Container = styled.div`
    @media screen and (min-width:480px) and ( max-width:1024px) {
        width: 554px;
    }
    @media screen and (min-width:1024px) {
        width: 554px;
    }
`

export const StyledLoginModal = () => {
    return (
        <LoginModal>
            <Container>
                <Header />
                <Main />
            </Container>
        </LoginModal>
    );
}