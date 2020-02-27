import React from "react";
import Sidebar from "./Sidebar";
import ProfilePageTop from "./profilePageTop/ProfilePageTop";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <Sidebar />
        <ProfilePageTop />
      </ProfileContainer>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
`;

export default Profile;
