import React, {useState} from 'react';
import styled from 'styled-components';
import firebase from '../../../../plugins/firebase';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;
`;

const InputField = styled.div`
  background-color: #1b698a;
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
  color: #2c9bc9;
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
  caret-color: #ffffff;
  &:focus {
    outline: none;
  }
  color: #ffffff;
  width: 92%;
`;

const LoginButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #29abe2;
  color: #ffffff;
  height: 58px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleOnChange = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  const handleLogIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setUser({
          email: '',
          password: '',
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleLogIn}>
      <FormContainer>
        <InputField>
          <InputLabelContainer>
            <label htmlFor="email">
              <InputLabelText>Email</InputLabelText>
            </label>
          </InputLabelContainer>
          <InputContainer>
            <Input type="email" id="email" size="52" onChange={handleOnChange} value={user.email} />
          </InputContainer>
        </InputField>
        <InputField>
          <InputLabelContainer htmlFor="password">
            <InputLabelText>Password</InputLabelText>
          </InputLabelContainer>
          <InputContainer>
            <Input type="password" id="password" size="52" onChange={handleOnChange} value={user.password} />
          </InputContainer>
        </InputField>
        <LoginButtonContainer type="submit">
          <div>LOG IN</div>
        </LoginButtonContainer>
      </FormContainer>
    </form>
  );
};
