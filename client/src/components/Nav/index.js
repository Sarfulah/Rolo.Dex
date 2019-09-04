import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Logo Img
      </a>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Camera Icon</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">QR Code Icon</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
