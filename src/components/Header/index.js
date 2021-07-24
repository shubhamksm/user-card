import React from 'react';
import './Header.css';

const Header = ({ onClickHandler }) => {
  return <div className="header">
    <div className="h1">User Cards</div>
    <button onClick={onClickHandler} className="get-user">Get User</button>
  </div>
}

export default Header;