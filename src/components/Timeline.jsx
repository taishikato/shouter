import React, {useContext} from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import firebase from '../plugins/firebase';
import PostForm from './PostForm';

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
        <Sidebar handleClick={handleLogout}/>
        <TimelineFeedSection>
          <PostForm />
        </TimelineFeedSection>
      </TimelineContainer>
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
  width: 720px;
  height: 100%;
  border-left: 1px solid #304559;
  border-right: 1px solid #304559;
  display: flex;
  flex-direction: row;
`;

export default Timeline;
