import React from "react";
import { PageHeader } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";

import coreTeam from "../../data/team/coreTeam";

export default function Team() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>
            <FaUsers />
            SBG Core Team
          </PageHeader>
        </div>
      </div>
      <div className="row">
        {coreTeam.map((member, i) => (
          <div key={i} className="col-xs-12 col-sm-6 col-md-3">
            <div className="thumbnail">
              <img
                src={`/page/team/${member.image}`}
                style={{
                  height: 250,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "0 0"
                }}
                alt={member.name}
              />
              <div className="caption">
                <h3>{member.role}</h3>
                <p>
                  <b>{member.name}</b> [{member.current}]
                  <br />
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>
        We are open to feedback and suggestions. Just drop us an email at{" "}
        <a href="mailto:sbg@daiict.ac.in">sbg@daiict.ac.in</a>
      </p>
    </div>
  );
}
