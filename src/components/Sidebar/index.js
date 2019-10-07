import React, { Component } from "react";
import { Link } from "react-router-dom";

import { menuItems } from "../../data/header";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };
  }

  render() {
    return (
      <div
        className="navbar-default sidebar"
        style={{ marginLeft: "-20px" }}
        role="navigation"
      >
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            {menuItems.map(i => (
              <li key={i.to}>
                <Link to={i.to}>
                  {i.icon} {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
