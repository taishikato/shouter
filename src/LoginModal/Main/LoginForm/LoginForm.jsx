import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 35px;
`;

const InputField = styled.div`
    background-color: #1B698A;
    height: 58px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 3px solid #114156;
    margin-bottom: 20px;
`;

const InputLabelContainer = styled.div`
    width: 100%;
    height: 20px;
    color: #2C9BC9;
    font-weight: bold;
    font-size: 18px;
    position: relative;
`;

const InputLabelText = styled.span`
    position: absolute;
    top: 3px;
    left: 12px;
`;

const InputContainer = styled.div`
    width: 100%;
`;

const Input = styled.input`
    height: 24px;
    font-size: 22px;
    background-color: transparent;
    border: none;
    caret-color: #FFFFFF;
    &:focus {
        outline: none;
    }
    color: #FFFFFF;
`;

const LoginButtonContainer = styled.div`
    background-color: #29ABE2;
    height: 58px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLoginForm = () => {
    return (
        <form>
            <FormContainer>
                <InputField>
                    <InputLabelContainer>
                        <label htmlFor="username">
                            <InputLabelText>Username</InputLabelText>
                        </label>
                    </InputLabelContainer>
                    <InputContainer>
                        <Input type="text" id="username" size="52" />
                    </InputContainer>
                </InputField>
                <InputField>
                    <InputLabelContainer htmlFor="password">
                        <InputLabelText>Password</InputLabelText>
                    </InputLabelContainer>
                    <InputContainer>
                        <Input type="password" id="password" size="52" />
                    </InputContainer>
                </InputField>
                <LoginButtonContainer>
                    <div>LOG IN</div>
                </LoginButtonContainer>
            </FormContainer>
        </form>
    );
}