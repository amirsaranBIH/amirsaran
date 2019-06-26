import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="header">
      <p className="email">
        <a className="link" href="mailto:amir.saranbih@gmail.com">
          amir.saranbih@gmail.com
        </a>
      </p>

      <div className="select-language">
        <span id="flag--bih" className="flag">
          <NavLink to="/bh">
            <img src="/images/bosnia-flag.png" alt="bosnia-flag" />
          </NavLink>
        </span>
        <span id="flag--gb" className="flag">
          <NavLink to="/us">
            <img
              src="/images/great-britain-flag.png"
              alt="great-britain-flag"
            />
          </NavLink>
        </span>
      </div>
    </header>
  );
}

export default Navigation;
