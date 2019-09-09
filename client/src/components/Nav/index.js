import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Logo Img
      </a>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="/camera">Camera Icon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">QR Code Icon</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
