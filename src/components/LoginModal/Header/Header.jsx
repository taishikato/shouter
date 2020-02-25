import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    height: 29px;
    font-weight: bold;
    font-size: 24px;
`;

export const StyledHeader = () => {
    return (
        <Header>
            <TextBox>Login to Shouter</TextBox>
        </Header>
    );
}