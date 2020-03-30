import React, {useContext} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';

const ShoutComponent = ({shoutData, deleteShout}) => {
  const {auth} = useContext(AuthContext); //temporary set up as user

  return (
    <>
      {shoutData.map((shout, index) => (
        <Container key={index}>
          {/* user data only contains email and username :( */}
          <UserIcon
            src={!shout.userData.photoURL ? process.env.PUBLIC_URL + '/Shouter_logo.png' : shout.userData.photoURL}
            alt="user-img"
          />
          <ShoutArea>
            <ShouterName>{!shout.userData ? 'No name' : shout.userData.userName}</ShouterName>
            <ShouterContext>{shout.data.text}</ShouterContext>
            <ShouterImage></ShouterImage>
            <SmallIcons>
              <Icon className="fas fa-comment"></Icon>
              <Icon className="far fa-heart"></Icon>
              <Icon className="fas fa-share-alt"></Icon>
              <Icon className="fas fa-trash" alt="Delete" onClick={() => deleteShout(shout.id)}></Icon>
            </SmallIcons>
          </ShoutArea>
        </Container>
      ))}
    </>
  );
};

export default ShoutComponent;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 150px;
  padding: 10px 0;
  background-color: #16202a;
  border-top: 1px solid #304559;
  border-bottom: 1px solid #304559;
  display: flex;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 20px;
`;

const ShoutArea = styled.div`
  width: 85%;
  color: #bcd3ff;
  font-size: 15px;
  background-color: #16202a;
  display: flex;
  flex-direction: column;
`;

const ShouterName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  height: 40px;
  display: flex;
  align-items: flex-end;
`;

const ShouterContext = styled.div`
  padding-top: 10px;
  height: 50px;
`;

const ShouterImage = styled.div`
  padding-top: 10px;
`;

const SmallIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.i`
  color: #74a1cc;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;
