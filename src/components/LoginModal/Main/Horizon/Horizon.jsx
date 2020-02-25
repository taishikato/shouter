import React from 'react';
import styled from 'styled-components';

const HorizonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const HorizonLine = styled.div`
    width: 45%;
    height: 3px;
    background-color: white;
    margin-top: 6px;
`;

const TextBox = styled.div`
    font-weight: bold;
    font-size: 24px;
`;

export const StyledHorizon = () => {
    return (
        <HorizonContainer>
            <HorizonLine />
            <TextBox>or</TextBox>
            <HorizonLine />
        </HorizonContainer>
    );
}