import React , { useState ,useContext }from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import bg from './bg.png';
import profileImg from './profileImg.jpg';
import { ReactComponent as SVG } from './calender.svg';
import { AuthContext } from '../../contexts/AuthContext';

const theme = {
    primBlue: "#15202b",
    lightBlue: "#3c5366",
    grey: "#8899A6"
}

const Wrapper = styled.section`
    width: 100%;
    height: 380px;
    position: relative;
    background-color: ${props => props.theme.primBlue};
`
const TopSection = styled.div`
    width: 100%;
    height: 50%;
    background-color: ${props => props.theme.lightBlue};
`
const TopImg = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.url}) no-repeat;
    background-size: cover;
    background-position: center;
    ${props => props.url && css`
        cursor: pointer;
    `}
`
const ProfileImg = styled.div`
    width: 134px;
    height: 134px;
    position: absolute;
    top: 50%;
    margin-left: 15px;
    transform: translateY(-50%);
    border-radius: 100%;
    border: 4px solid ${props => props.theme.primBlue};
    background: url(${props => props.url}) no-repeat;
    background-size: cover;
    background-position: center;
`

const BotSection = styled.div`
    width: 100%;
    height: 50%;
`
const Title = styled.h1`
    all: unset;
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
`
const SubTitle = styled.h2`
    all: unset;
    color: ${props => props.color? props.color : props.theme.grey};
    font-size: 0.95rem;
    font-weight: ${props => props.color? 700 : 500};
    ${ props => props.margin && css`
        margin-left: 5px;
    `}
`
const NameWrapper = styled.div`
    margin-top: 70px;
    margin-left: 15px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
`
const DateWrapper = styled.div`
    margin-left: 15px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
`
const FollowWrapper = styled.div`
    margin-left: 15px;
    width: 100%;
    height: 20px;
    display: flex;
`
const FollowInnerWrapper = styled.div`
    display: flex;
    align-items:center;
    width: 100px;
    height: 100%;
    display: flex; 
`

const ProfilePageTop = () => {
    const { auth } = useContext(AuthContext);
    const [profile, setProfile] = useState({
        bgImg: bg,
        profileImg: auth.photoURL,
        userName: auth.displayName,
        userId: auth.email,
        joined: auth.metadata.creationTime.split(" ", 4).join(' '),
        following: 0,
        followers: 0
    });    
    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <TopSection>
                    <TopImg url={profile.bgImg} />
                </TopSection>
                <ProfileImg url={profile.profileImg} />
                <BotSection>
                    <NameWrapper>
                        <Title>{profile.userName}</Title>
                        <SubTitle>{profile.userId}</SubTitle>
                    </NameWrapper>
                    <DateWrapper>
                        <SVG width='16px'/>
                        <SubTitle margin>Joined {profile.joined}</SubTitle>
                    </DateWrapper>
                    <FollowWrapper >
                        <FollowInnerWrapper>
                            <SubTitle color='white'>{profile.following}</SubTitle>
                            <SubTitle margin>Following</SubTitle>
                        </FollowInnerWrapper>
                        <FollowInnerWrapper>
                            <SubTitle color='white'>{profile.followers}</SubTitle>
                            <SubTitle margin>Followers</SubTitle>
                        </FollowInnerWrapper>
                    </FollowWrapper>
                </BotSection>
            </Wrapper>
        </ThemeProvider>
    )
}

export default ProfilePageTop;