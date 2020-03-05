import React, {useContext} from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import firebase from '../plugins/firebase';

const Timeline = () => {
  const {logout} = useContext(AuthContext);
  const handleLogout = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        logout();
      })
      .catch(err => console.log(err));
  };
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Sidebar />
        <TimelineFeedSection></TimelineFeedSection>
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

const TimelineFeedSection = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #304559;
  border-right: 1px solid #304559;
  display: flex;
  flex-direction: row;
`;

export default Timeline;
