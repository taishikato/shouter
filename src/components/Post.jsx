import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 600px;
  background-color: #16202a;
`;

const PostInner = styled.div`
  width: 570px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  margin: 0 5px;
`;

const Right = styled.div`
  margin: 0 5px;
  text-align: left;
`;

const Photo = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
`;

const NameLink = styled.a`
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Name = styled.a`
  font-size: 15px;
`;

const UserName = styled.span`
  font-size: 15px;
  color: #fff;
`;

const PublishedDate = styled.span`
  font-size: 15px;
  color: #fff;
`;

const Content = styled.p`
  font-size: 15px;
  color: #fff;
`;

const postObj = {
  photo:
    'https://qph.fs.quoracdn.net/main-qimg-31c70f9bd3956912a4e7f17fbfc0aa10.webp',
  name: 'Shouter',
  username: 'shouter',
  publishedDate: 'Feb 25',
  content:
    "The person that I don't like to be close: All I need is MONEY!!! MONEY IS EVERYTHING!!! GIVE ME MONEY!!!💰💰💰"
};

const Post = () => {
  return (
    <PostContainer>
      <PostInner>
        <Left>
          <a href="/profile">
            <Photo src={postObj.photo} alt="profile" />
          </a>
        </Left>
        <Right>
          <NameLink href="/profile">
            <Name>{postObj.name}</Name>
          </NameLink>
          <UserName>
            {' '}
            {'  '}@{postObj.username}
          </UserName>
          <PublishedDate>・ {postObj.publishedDate}</PublishedDate>

          <Content>{postObj.content}</Content>
        </Right>
      </PostInner>
    </PostContainer>
  );
};

export default Post;
