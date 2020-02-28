import React from "react";
import Sidebar from "./Sidebar";
import ProfilePageTop from "./profilePageTop/ProfilePageTop";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <Sidebar />
        <ProfileFeedSection>
            <ProfilePageTop />
        </ProfileFeedSection>
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
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ProfileFeedSection = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #304559;
  border-right: 1px solid #304559;
  display: flex;
  flex-direction: row;
`;

export default Profile;
