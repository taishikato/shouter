import React from "react";
import styled from "styled-components";

const menus = [
  {
    name: "",
    icon: "fab fa-twitter"
  },
  {
    name: "Home",
    icon: "fas fa-home"
  },
  {
    name: "Search",
    icon: "fas fa-search"
  },
  {
    name: "Notifications",
    icon: "fas fa-bullhorn"
  },
  {
    name: "Messages",
    icon: "far fa-envelope"
  },
  {
    name: "Bookmarks",
    icon: "far fa-bookmark"
  },
  {
    name: "Profile",
    icon: "far fa-user"
  },
  {
    name: "More",
    icon: "fas fa-list"
  }
];

const List = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 7px 0;
`;

const Span = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;

const Div = styled.div`
  width: 200px;
  height: 300px;
  background-color: #16202a;
  color: #fff;
  display: flex;
  cursor: pointer;
`;

const Icon = styled.i`
  color: #74a1cc;
`;

const renderMenu = () => {
  return menus.map(menu => (
    <List key={menu.name}>
      <Icon className={menu.icon}></Icon>
      <Span>{menu.name}</Span>
    </List>
  ));
};

const Sidebar = () => {
  return (
    <Div>
      <ul>{renderMenu()}</ul>
    </Div>
  );
};

export default Sidebar;
