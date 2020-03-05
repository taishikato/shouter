import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {ShouterLogoSvg} from './ShouterLogoSvg';
import {LoginModal} from '../LoginModal/LoginModal';
import {SigninModal} from '../SigninModal/SigninModal';

const LoginPageContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const LeftPic = styled.div`
  flex-basis: 60%;
  background: url(login_shout_boy.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const RightMenu = styled.div`
  flex-basis: 40%;
  background-color: rgb(24, 32, 41);
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  left: 70px;
  color: #5f86ad;
`;

const ShouterLogoContainer = styled.div`
  width: 300px;
  margin-top: 80px;
  margin-bottom: 200px;
`;

const SubTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 30px;
`;

const SignUp = styled.div`
  color: #ffffff;
  text-align: left;
  line-height: 30px;
`;

const JoinTitle = styled.span`
  font-weight: light;
  font-size: 20px;
`;

const SignUpButton = styled.div`
  color: #ffffff;
  width: 310px;
  height: 36px;
  background-color: #0038ff;
  border-radius: 50px;
  text-align: center;
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogInButton = styled.div`
  color: #ffffff;
  width: 310px;
  height: 36px;
  border: 2px solid #0038ff;
  border-radius: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BackGroundMask = styled.div`
  /* display:none; */
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPage = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    console.log('From EF', clicked);
  }, [clicked]);
  return (
    <LoginPageContainer>
      {clicked === 'SignUp' && (
        <BackGroundMask onClick={() => setClicked(false)}>
          <SigninModal />
        </BackGroundMask>
      )}
      {clicked === 'LogIn' && (
        <BackGroundMask onClick={() => setClicked(false)}>
          <LoginModal />
        </BackGroundMask>
      )}
      <LeftPic />
      <RightMenu>
        <Main>
          <ShouterLogoContainer>
            <ShouterLogoSvg />
          </ShouterLogoContainer>
          <SubTitle>Let the world hear you shout!</SubTitle>
          <SignUp>
            Join Shouter Now!
            <SignUpButton onClick={() => setClicked('SignUp')}>
              <JoinTitle>SIGN UP</JoinTitle>
            </SignUpButton>
            <LogInButton onClick={() => setClicked('LogIn')}>
              <JoinTitle>LOG IN</JoinTitle>
            </LogInButton>
          </SignUp>
        </Main>
        <Footer>©︎ shouter Service | Term of Service | Announcement | About</Footer>
      </RightMenu>
    </LoginPageContainer>
  );
};
