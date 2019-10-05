import _ from "lodash";
import React from "react";
import { PageHeader, PanelGroup } from "react-bootstrap";
import { FaTachometerAlt } from "react-icons/fa";

import committeesInfo from "../../data/committees/committeesInfo";
import CommitteePanel from "./CommitteePanel";

class Committees extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaTachometerAlt />
              SBG Committees
            </PageHeader>
          </div>
        </div>
        <PanelGroup id="committees">
          {committeesInfo.map((item, i) => {
            return (
              <CommitteePanel
                key={i}
                header={item.header}
                role={item.role}
                contact={item.contact}
                reports={_.get(item, "reports", null)}
                bsStyle={item.style}
                eventKey={i}
              />
            );
          })}
        </PanelGroup>
        <br />
        <br />
      </div>
    );
  }
}

export default Committees;
