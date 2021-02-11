import React from 'react';

const NavMenu: React.FC = () => {
  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <div className='container d-flex flex-column flex-md-row justify-content-between'>
        <a className="navbar-brand nav-item-style" href="/"><i className="fa fa-3x fa-home"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nav-item-style" href="/about">
                <i className="fa fa-1x fa-info-circle mr-2"></i>
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link nav-item-style" href="#">
                <i className="fa fa-bell mr-2">
                </i>
                Sign In
        </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-style" href="#">
                <i className="fa fa-globe mr-2">
                </i>
                Login
        </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;