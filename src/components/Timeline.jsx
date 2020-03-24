import React, {useContext, useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import {LocationContext} from '../contexts/LocationContext';
import firebase from '../plugins/firebase';
import PostForm from './PostForm';
import ShoutComponent from './ShoutComponent';

const Timeline = () => {
  const {logout} = useContext(AuthContext);
  const {getLocation} = useContext(LocationContext);
  const [shoutData, setShoutData] = useState([]);

  getLocation('/timeline');

  useEffect(() => {
    let shouts = [];
    firebase
      .firestore()
      .collection('shouts')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          shouts.push({
            data: doc.data(),
            id: doc.id,
          });
        });
        setShoutData(shouts);
        console.log('shouts: ', shouts);
      })
      .catch(err => console.log(err));
  }, []);

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
        <Sidebar handleClick={handleLogout} />
        <TimelineSection>
          <PostForm />
          <TimelineFeedSection>
            <ShoutComponent shoutData={shoutData} />
          </TimelineFeedSection>
        </TimelineSection>
      </TimelineContainer>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 100%;
`;

const TimelineSection = styled.div`
  width: 720px;
  height: 100%;
  border-left: 1px solid #304559;
  border-right: 1px solid #304559;
  display: flex;
  flex-direction: column;
`;

const TimelineFeedSection = styled.div`
  width: 720px;
  clear: both;
`;

export default Timeline;
