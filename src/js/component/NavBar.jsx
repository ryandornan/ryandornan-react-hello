import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand" href="#">React JS Landing Page</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse d-flex justify-content-end py-3" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Contact</a>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
    );
};

export default NavBar;
