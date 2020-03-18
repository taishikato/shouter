import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import firebase from '../plugins/firebase';
import getCurrentTimeStamp from '../plugins/getCurrentTimeStamp';

const PostForm = () => {
  const [text, setText] = useState('');
  const {auth} = useContext(AuthContext);

  const addShout = async () => {
    try {
      await firebase
        .firestore()
        .collection('shouts')
        .add({
          text,
          createdAt: getCurrentTimeStamp(),
          picture: '',
          userId: auth.uid,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    await addShout(text);
    setText('');
  };

  console.log('User: ', auth);

  return (
    <Container>
      <UserIcon src={auth.photoURL} alt="user-img" />
      <ShoutArea value={text} onChange={e => setText(e.target.value)} placeholder="What's Up?" />
      <SmallIcons>
        <Icon className="fas fa-image"></Icon>
        <Icon className="fas fa-smile-beam"></Icon>
      </SmallIcons>
      <Button onClick={handleSubmit} disabled={!text}>
        shout
      </Button>
    </Container>
  );
};

export default PostForm;

const Container = styled.div`
  position: relative;
  height: 150px;
  width: 100%;
  padding: 10px;
  background-color: #16202a;
`;

const UserIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const ShoutArea = styled.textarea`
  position: absolute;
  left: 75px;
  width: 85%;
  height: 100px;
  outline: none;
  resize: none;
  border: none;
  color: #bcd3ff;
  font-size: 15px;
  background-color: #16202a;
  ::placeholder {
    font-size: 15px;
    font-weight: 600;
    color: #44607b;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 115px;
  right: 20px;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 20px;
  border-radius: 50px;
  background-color: #74a1cc;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  :disabled {
    background-color: #1d3246;
    color: #7b7b7b;
    :hover {
      cursor: auto;
    }
  }
`;

const SmallIcons = styled.div`
  position: absolute;
  top: 120px;
  left: 75px;
`;

const Icon = styled.i`
  color: #74a1cc;
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;
