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
  const [showMessage, setShowMessage] = useState(false);

  getLocation('/profile');

  useEffect(() => {
    getUserShouts();
  }, [shoutData]);

  const getUserShouts = () => {
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
      })
      .catch(err => console.log(err));
  };

  const deleteHandler = id => {
    firebase
      .firestore()
      .collection('shouts')
      .doc(id)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
        setShowMessage(true);
        getUserShouts();
      })
      .catch(function(error) {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <Sidebar />
        <ProfileSection>
          <ProfilePageTop />
          <ProfileFeedSection>
            <ShoutComponent shoutData={shoutData} deleteShout={deleteHandler} />
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
