// import React, { useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to="/">
            <div className="page-name">⚽ FC 4포메이션</div>
          </Link>
          <div className="Head-menu">
            <Link to="/Formation-percent">
              <div className="menu-name">📉 포메이션 이용률 보기</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
