import React, {useContext, useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import ProfilePageTop from './profilePageTop/ProfilePageTop';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import {LocationContext} from '../contexts/LocationContext';
import firebase from '../plugins/firebase';
import ShoutComponent from './ShoutComponent';

const Profile = () => {
  const {auth} = useContext(AuthContext);
  const {getLocation} = useContext(LocationContext);
  const [shoutData, setShoutData] = useState([]);

  getLocation('/profile');

  useEffect(() => {
    let shouts = [];
    firebase
      .firestore()
      .collection('shouts')
      .where('userId', '==', auth.uid)
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
        console.log('user shouts: ', shouts);
      })
      .catch(err => console.log(err));
  }, [auth.uid]);

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <Sidebar />
        <ProfileSection>
          <ProfilePageTop />
          <ProfileFeedSection>
            <ShoutComponent shoutData={shoutData} />
          </ProfileFeedSection>
        </ProfileSection>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100%;
`;

const ProfileContainer = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ProfileSection = styled.div`
  width: 720px;
  height: 100%;
  border-left: 1px solid #304559;
  border-right: 1px solid #304559;
  display: flex;
  flex-direction: column;
`;

const ProfileFeedSection = styled.div`
  width: 720px;
  clear: both;
`;

export default Profile;
