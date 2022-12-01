import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Test4.css"

 const Test4 = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/#">
        Salads
      </a>
      <a className="menu-item" href="/#">
        Pizzas
      </a>
      <a className="menu-item" href="/#">
        Desserts
      </a>
    </Menu>
  );
};

export default Test4;