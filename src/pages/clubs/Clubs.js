import _ from "lodash";
import React from "react";
import { PageHeader, PanelGroup } from "react-bootstrap";
import { FaCogs } from "react-icons/fa";

import clubsInfo from "./clubsInfo.js";
import ClubsPanel from "./ClubsPanel.js";

class Clubs extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaCogs />
              SBG Clubs
            </PageHeader>
          </div>
        </div>
        <PanelGroup id="clubs">
          {clubsInfo.map((item, i) => (
            <ClubsPanel
              key={i}
              header={item.header}
              role={item.role}
              contact={item.contact}
              reports={_.get(item, "reports", null)}
              bsStyle={item.style}
              eventKey={i}
            />
          ))}
        </PanelGroup>
        <br />
        <br />
      </div>
    );
  }
  handleClick() {}
}

export default Clubs;
