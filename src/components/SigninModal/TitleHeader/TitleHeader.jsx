import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    height: 29px;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
`;

export const TitleHeader = () => {
    return (
        <StyledHeader>
            <Title>Sign in to Shouter</Title>
        </StyledHeader>
    );
}
