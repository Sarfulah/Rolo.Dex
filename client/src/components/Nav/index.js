import React from "react";
import icon from "../../assets/images/LOGOTL.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src={icon}></img>
      </a>
      <ul className="nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/camera"><FontAwesomeIcon icon="camera" size="lg" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/qr"><FontAwesomeIcon icon="qrcode" size="lg" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
