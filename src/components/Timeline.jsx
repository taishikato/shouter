import React , { useContext }from "react";
import Sidebar from "./Sidebar";
import ProfilePageTop from "./profilePageTop/ProfilePageTop";
import styled from "styled-components";
import { AuthContext } from '../contexts/AuthContext';
import firebase from '../plugins/firebase';

const Timeline = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(()=> {
        logout();
        console.log('signOut')
      })
      .catch(err => console.log(err))
  }
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Sidebar />
        <ProfilePageTop />
      </TimelineContainer>
      <button onClick={handleLogout}>LOG ME OUT!!!!!!</button>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
`;

export default Timeline;
