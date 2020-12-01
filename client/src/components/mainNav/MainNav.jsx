import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './../Logout';
import '../../styles/index.css';
import djIcon from '../../assets/profileIcons/dj-icon.png';

const MainNav = () => {
  return (
    <nav className="main-nav-1">
      <div className="main-nav-2">
        <div className="main-nav-3">
          <Link to="/" className="main-nav-pro">
            BackStage
          </Link>
          <button className="main-nav-button-1" type="button"></button>
        </div>
        <div className="main-nav-4">
          <ul className="main-nav-ul"></ul>
        </div>
        <div>
          <div className="drop-down hover">
            <button className="group-hover:bg-gray-dark">
              <img
                className="profile-icon"
                src={djIcon}
                alt="dj icon"
                style={{ height: '100%' }}
              />
            </button>

            <ul className="drop-down-menu" id="show">
              <li>
                <Link
                  to="/login"
                  className="group-hover:bg-gray-dark text-white p-2"
                >
                  Login
                </Link>
              </li>
              <li className="group-hover:bg-gray-dark p-2">
                <Logout>Logout</Logout>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
