import React from "react";
import styled from "styled-components";

const postForm = () => {
  return (
    <Container>
      <UserIcon src="#" alt="user-img" />
      <ShoutArea
        placeholder="What's Up?"
      />
      <SmallIcons>
        <UploadIcon src="#" alt="upload" />
        <EmojiIcon src="#" alt="emoji" />
      </SmallIcons>
      <Button >
        shout
      </Button>
    </Container>
  );
};

export default postForm;

const Container = styled.div`
  position: relative;
  height:150px;
  width:300px;
  padding:10px;
  background-color: #16202A; 
`;

const UserIcon = styled.img`
  position: absolute;
  top: 0px;
  left:0px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const ShoutArea = styled.textarea`
  position: absolute;
  left: 55px;
  width: 250px;
  height: 100px;
  outline: none;
  resize: none;
  border: none;
  color:#44607B;
  font-size:15px;
  background-color:#16202A;
  ::placeholder {
    font-size: 15px;
    font-weight:600;
    color:#44607B;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 115px;
  left: 260px;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 5px;
  background-color: #74a1cc;
  color: white;
  border: none;
`;

const SmallIcons = styled.div`
  position: absolute;
  top: 120px;
  left: 55px;
`;

const UploadIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const EmojiIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;