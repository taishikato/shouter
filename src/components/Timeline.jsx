/* eslint-disable no-undef */
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
  const {setLocation} = useContext(LocationContext);
  const [shoutData, setShoutData] = useState([]);
  const [shoutSubmit, setShoutSubmit] = useState(false);

  useEffect(() => {
    setLocation('/timeline');

    const users = [];
    firebase
      .firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          users.push({
            id: doc.id,
            userData: doc.data(),
          });
        });
      })
      .catch(err => console.log(err));

    const shouts = [];
    firebase
      .firestore()
      .collection('shouts')
      .limit(20)
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          shouts.push({
            data: doc.data(),
            userData: users.map(entry => {
              if (entry.id === doc.data().userId) {
                return entry.userData;
              }
            }),
            id: doc.id,
          });
        });
        setShoutData(shouts);
      })
      .catch(err => console.log(err));

    return () => {
      setShoutSubmit(false);
    };
  }, [shoutSubmit]);

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

  const handleSubmit = e => {
    e && setShoutSubmit(true);
  };

  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Sidebar handleClick={handleLogout} />
        <TimelineSection>
          <PostForm submitHandler={handleSubmit} />
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
