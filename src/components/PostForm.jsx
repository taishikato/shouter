/* eslint-disable no-undef */
import React, {useState, useContext, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import firebase from '../plugins/firebase';
import getCurrentTimeStamp from '../plugins/getCurrentTimeStamp';
import Picker from 'emoji-picker-react';

const PostForm = () => {
  const [text, setText] = useState('');
  const [isPickerOpen, setPickerOpen] = useState(false);
  const {auth} = useContext(AuthContext);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setPickerOpen(false));

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

  const handleChange = e => {
    setText(e.target.value);
  };

  const onEmojiClick = () => {
    setPickerOpen(true);
  };

  const addEmoji = (event, emojiObject) => {
    setText(text => text + emojiObject.emoji);
  };

  return (
    <Container>
      <UserIcon src={auth.photoURL} alt="user-img" />
      <ShoutArea value={text} onChange={e => handleChange(e)} placeholder="What's Up?" />
      <SmallIcons>
        <Icon className="fas fa-image"></Icon>
        <Icon className="fas fa-smile-beam" onClick={onEmojiClick}></Icon>
        {isPickerOpen ? (
          <PickerContainer ref={ref}>
            <Picker onEmojiClick={addEmoji} />
          </PickerContainer>
        ) : null}
      </SmallIcons>
      <Button onClick={handleSubmit} disabled={!text}>
        shout
      </Button>
    </Container>
  );
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default PostForm;

const Container = styled.div`
  position: relative;
  height: 150px;
  width: 100%;
  padding: 10px 0;
  background-color: #16202a;
  border-bottom: 10px solid #304559;
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
  top: 30px;
  left: 75px;
  width: 85%;
  height: 70px;
  outline: none;
  border: none;
  resize: none;
  color: #bcd3ff;
  font-size: 15px;
  background-color: #16202a;
  ::placeholder {
    font-size: 15px;
    font-weight: 600;
    color: #44607b;
  }
`;

const PickerContainer = styled.div`
  background-color: black;
  position: absolute;
  left: 40px;
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
  :hover {
    cursor: pointer;
  }
`;
