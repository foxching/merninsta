import React from "react";
import { ReactComponent as Home } from "../../images/HomeIcon.svg";
import { ReactComponent as Inbox } from "../../images/MessengerIcon.svg";
import { ReactComponent as Explore } from "../../images/findPeopleIcon.svg";
import { ReactComponent as Notifications } from "../../images/activityIcon.svg";
import "../../styles/menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
    </div>
  );
};

export default Menu;
