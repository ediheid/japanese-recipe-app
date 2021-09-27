import React from "react";

import noodles from "../Static/noodles.gif";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="heading-ramen-container">
        <h1 onClick={props.resetPage} className="heading">
          Itadakimasu
        </h1>
        <img
          className="ramen-animation"
          src={noodles}
          alt="red lantern with japanese text"
        ></img>
      </div>

      <h4 className="sub-heading">(“to eat and receive”)</h4>
      <div className="hover-circle"></div>
    </div>
  );
};

export default Header;
