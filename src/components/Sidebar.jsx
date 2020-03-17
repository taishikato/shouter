import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const menus = [
  {
    name: "",
    icon: "fab fa-twitter"
  },
  {
    name: "Home",
    icon: "fas fa-home",
    path: "/timeline"
  },
  {
    name: "Profile",
    icon: "far fa-user",
    path: "/profile"
  },
  {
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    handler: "out"
  }
];

const renderMenu = (handleClick) => {
  return menus.map(menu => (
    <List key={menu.name}>
      <Icon className={menu.icon}></Icon>
      {menu.path ? (
        <Link 
          to={menu.path} 
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Span>{menu.name}</Span>
        </Link>
      ) : (menu.handler) ?(
        <Link 
          to={menu.path} 
          onClick={(e) => handleClick(e)} 
          style={{ textDecoration: "none", color: "#fff" }}
        >
            <Span>{menu.name}</Span>
        </Link>
      ):(
        <Span>{menu.name}</Span>
      )}
    </List>
  ));
};

const Sidebar = ({handleClick}) => {
  return (
    <>
    <Div>
      <ul>{renderMenu(handleClick)}</ul>
    </Div>
    <Footer>
      <Link>Terms</Link>
      <Link>Privacy policy</Link>
      <Link>Cookies</Link>
      <Copyright>© 2020 Shouter</Copyright>
    </Footer>
    </>
  );
};

export default Sidebar;

const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  list-style: none;
  padding: 7px 0;
`;

const Span = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;

const Div = styled.div`
  width: 180px;
  height: 300px;
  background-color: #16202a;
  color: #fff;
  display: flex;
  cursor: pointer;
`;

const Footer = styled.div`
  border-top: 1px solid #304559;
  color: #8998a6;
  padding-top: 10px;
  height: 50px;
  width: 180px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 80%;
  a {
    color: #8998a6;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  display: flex;
`;


const Icon = styled.i`
  color: #74a1cc;
`;
