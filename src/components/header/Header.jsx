import React from 'react';

import './header.scss';

const Header = ({ changeToLastWeek, changeToNextWeek, changeToThisWeek }) => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={changeToThisWeek}>Today</button>
        <button className="icon-button navigation__nav-icon" onClick={changeToLastWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={changeToNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;
