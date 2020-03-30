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
  const {setLocation} = useContext(LocationContext);
  const [shoutData, setShoutData] = useState([]);
  const [messageDeleted, setMessageDeleted] = useState(false);

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  useEffect(() => {
    setLocation('/profile');
    const getUserShouts = async () => {
      const shoutsQuerySnapshot = await firebase
        .firestore()
        .collection('shouts')
        .where('userId', '==', auth.uid)
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get();
      const shouts = [];
      await asyncForEach(shoutsQuerySnapshot.docs, async doc => {
        shouts.push({
          data: doc.data(),
          userData: {
            userName: auth.displayName,
            photoURL: auth.photoURL,
          },
          id: doc.id,
        });
      });
      setShoutData(shouts);
    };
    getUserShouts();

    return () => {
      setMessageDeleted(false);
    };
  }, [messageDeleted]);

  const deleteHandler = id => {
    firebase
      .firestore()
      .collection('shouts')
      .doc(id)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
        setMessageDeleted(true);
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
