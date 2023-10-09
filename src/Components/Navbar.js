import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid" style={{backgroundColor:"black"}}>
          <a className="navbar-brand" href="/" style={{color:"white"}}>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>
                Home
              </a>
              <a className="nav-link" href="/" style={{color:"white"}}>
                About
              </a>
            </div>
          </div>
          <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{color:"white"}}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:"white"}}>
                {props.btn}
              </label>
            </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {title: PropTypes.string}
Navbar.defaultProps = {title: "Set title here"}