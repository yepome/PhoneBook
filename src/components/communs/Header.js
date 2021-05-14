import React from 'react';

import '../../css/header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
