import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import Navbar, { Brand } from "react-bootstrap/lib/Navbar";

import { brandInfo, menuItems } from "../../data/header";
import Sidebar from "../Sidebar";

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid style={{ margin: 0 }}>
        <ButtonToolbar className="dropdown-home" style={{ marginTop: 10 }}>
          <DropdownButton
            bsStyle="default"
            noCaret
            title={
              <span>
                <i className="fa fa-th-list" /> =
              </span>
            }
            id="dropdown-size-large"
          >
            {menuItems.map(i => (
              <React.Fragment key={i.to}>
                <MenuItem href={i.to}>{i.title}</MenuItem>
                <MenuItem divider />
              </React.Fragment>
            ))}
          </DropdownButton>
        </ButtonToolbar>
        <Brand>
          <img
            className="brand-logo"
            src={brandInfo.logo}
            alt={brandInfo.title}
            title={brandInfo.title}
          />
          <span>{brandInfo.title}</span>
        </Brand>
        <Sidebar />
      </Navbar>
    </div>
  );
}

export default Header;
