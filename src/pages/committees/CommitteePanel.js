import React from "react";
import { ListGroup, ListGroupItem, OverlayTrigger, Panel, Tab, Tabs, Tooltip } from "react-bootstrap";
import { FaClock, FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";

const tooltip = (
  <Tooltip id="tooltip">
    <strong>Click to view the report!</strong>
  </Tooltip>
);

export default class CommitteePanel extends React.Component {
  render() {
    const mail = this.props.contact.webmail_id && (
      <div>
        <a
          href={`mailto:${this.props.contact.webmail_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="black-link"
        >
          <FaEnvelope />
          {this.props.contact.webmail_id}
        </a>
        <br />
        <br />
      </div>
    );
    const fb = this.props.contact.facebook && (
      <div>
        <a
          href={this.props.contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="black-link"
        >
          <FaFacebook />
          {this.props.contact.facebook}
        </a>
        <br />
        <br />
      </div>
    );
    const insta = this.props.contact.instagram && (
      <div>
        <a
          href={this.props.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="black-link"
        >
          <FaInstagram />
          {this.props.contact.instagram}
        </a>
        <br />
        <br />
      </div>
    );
    const youtube = this.props.contact.youtube && (
      <div>
        <a
          href={this.props.contact.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="black-link"
        >
          <FaYoutube />
          {this.props.contact.youtube}
        </a>
        <br />
        <br />
      </div>
    );
    const website = this.props.contact.website && (
      <div>
        <a
          href={this.props.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-link black-link"
        >
          <FaGlobe />
          {this.props.contact.website}
        </a>
        <br />
        <br />
      </div>
    );
    return (
      <Panel
        bsStyle={this.props.bsStyle}
        eventKey={this.props.eventKey}
        defaultExpanded={false}
      >
        <Panel.Heading>
          <Panel.Title toggle>{this.props.header}</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <Tabs id="tabs1" defaultActiveKey={1}>
              <Tab eventKey={1} title="Role">
                <br />
                <p>{this.props.role}</p>
              </Tab>
              <Tab eventKey={2} title="Contact Details">
                <br />
                <br />
                {mail}
                {website}
                {fb}
                {insta}
                {youtube}
                <p>
                  <FaPhone /> {this.props.contact.c_num} (
                  {this.props.contact.c_name}, Convener)
                </p>
                <p>
                  <FaPhone /> {this.props.contact.dc_num}(
                  {this.props.contact.dc_name}, Deputy Convener)
                </p>
                <br />
              </Tab>
              {this.props.reports && (
                <Tab eventKey={3} title="Activities">
                  <br />
                  <ListGroup>
                    {this.props.reports.map((item, i) => (
                      <OverlayTrigger key={i} placement="top" overlay={tooltip}>
                        <ListGroupItem
                          header={item.event}
                          href={item.link}
                          target={"_blank"}
                        >
                          <FaClock className="pr-icon" />
                          {item.date}
                        </ListGroupItem>
                      </OverlayTrigger>
                    ))}
                  </ListGroup>
                </Tab>
              )}
            </Tabs>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}
