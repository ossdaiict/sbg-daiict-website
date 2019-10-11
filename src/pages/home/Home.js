import _ from "lodash";
import React from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  PageHeader,
  Panel,
  Tab,
  Tabs
} from "react-bootstrap";
import Graph from "react-graph-vis";
import {
  FaChartBar,
  FaCheck,
  FaCogs,
  FaEdit,
  FaHome,
  FaInfo,
  FaShieldAlt,
  FaSignal,
  FaSun,
  FaTachometerAlt,
  FaUser,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import Donut from "../../components/Donut";
import LabeledPie from "../../components/LabeledPie";
import StatWidget from "../../components/Widget";
import annualFests from "../../data/home/annualFests";
import culturalEvents from "../../data/home/culturalEvents";
import donutPGData from "../../data/home/donutPGData";
import donutUGData from "../../data/home/donutUGData";
import otherBodies from "../../data/home/otherBodies";
import recentUpdates from "../../data/home/recentUpdates";
import sbgBudget from "../../data/home/sbgBudget";
import {
  sgbHierarchyEvents,
  sgbHierarchyGraph,
  sgbHierarchyOptions
} from "../../data/home/sbgHierarchy";
import weeklySession from "../../data/home/weeklySession";

// const title = "SBG | DA-IICT";

const opts = {
  height: "200",
  width: "380",
  playerVars: {
    autoplay: 0
  }
};

const MySmallModal = props => (
  <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">{props.heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      modalShow: false,
      header: "",
      body: ""
    };
    this.modalClose = this.modalClose.bind(this);
    this.onClickAR = this.onClickAR.bind(this);
    this.onClickSM = this.onClickSM.bind(this);
    this.onClickDAC = this.onClickDAC.bind(this);
    this.onClickGC = this.onClickGC.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  onClickAR() {
    this.setState({
      modalShow: true,
      header: otherBodies.AR.header,
      body: otherBodies.AR.body
    });
  }
  onClickSM() {
    this.setState({
      modalShow: true,
      header: otherBodies.SM.header,
      body: otherBodies.SM.body
    });
  }
  onClickDAC() {
    this.setState({
      modalShow: true,
      header: otherBodies.DAC.header,
      body: otherBodies.DAC.body
    });
  }
  onClickGC() {
    this.setState({
      modalShow: true,
      header: otherBodies.GC.header,
      body: otherBodies.GC.body
    });
  }
  modalClose() {
    this.setState({
      modalShow: false
    });
  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaHome />
              Home - SBG, DA-IICT
            </PageHeader>
          </div>
        </div>

        <div className="small row">
          <div className="col-lg-3 col-md-4">
            <StatWidget
              theme="panel-primary"
              icon={FaUser}
              count="4"
              headerText="SBG Core Members"
              footerText="View Details"
              linkTo="/sbgTeam"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              theme="panel-green"
              icon={FaTachometerAlt}
              count="8"
              headerText="Committees"
              footerText="View Details"
              linkTo="/committees"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              theme="panel-red"
              icon={FaCogs}
              count="22"
              headerText="Hobby Driven Clubs"
              footerText="View Details"
              linkTo="/clubs"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              theme="panel-yellow"
              icon={FaUsers}
              count="122"
              headerText="Elected Members"
              footerText="View Details"
              href="https://docs.google.com/spreadsheets/d/1pOG6HOdyIJZkVVJIn9Sg_sPScM39fyDPlAVZVxpwFRw/edit?usp=sharing"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <Panel>
              <Panel.Heading>
                <FaShieldAlt /> Student Body Government Vision
              </Panel.Heading>
              <Panel.Body>
                <div className="col-md-3">
                  <img alt="Logo" src="logo.png" height={130} width={130} />
                </div>
                <div className="col-md-9">
                  <p>
                    We, the students of DA-IICT, resolve to constitute a self
                    governing democratic organization called DA-IICT Student
                    Body Government for the purposes of:
                  </p>
                  <ul>
                    <li>Monitoring and regulation of all student activities</li>
                    <li>
                      Ensuring justice and equality in all aspects of student
                      life and
                    </li>
                    <li>Enhancing the overall development of students</li>
                  </ul>
                  <Link style={{ float: "right" }} to="/constitution">
                    Constitution
                  </Link>
                </div>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <FaChartBar /> Activities Statistics
              </Panel.Heading>
              <Panel.Body>
                <div className="row">
                  <div className="col-md-6">
                    <LabeledPie
                      data={annualFests}
                      color="#8884d8"
                      innerRadius="50%"
                      outerRadius="90%"
                    />
                    <h5 style={{ color: "#8884d8" }}>
                      <center>{annualFests[0].name}</center>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <LabeledPie
                      data={culturalEvents}
                      color="#f39c12"
                      outerRadius="90%"
                      innerRadius="50%"
                    />
                    <h5 style={{ color: "#f39c12" }}>
                      <center>{culturalEvents[0].name}</center>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <LabeledPie
                      moreThan
                      data={weeklySession}
                      color="#008080"
                      innerRadius="50%"
                      outerRadius="90%"
                    />
                    <h5 style={{ color: "#008080" }}>
                      <center>{weeklySession[0].name}</center>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <LabeledPie
                      data={sbgBudget}
                      color="#f15854"
                      innerRadius="50%"
                      outerRadius="90%"
                    />
                    <h5 style={{ color: "#f15854" }}>
                      <center>{sbgBudget[0].name}</center>
                    </h5>
                  </div>
                </div>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <FaShieldAlt /> The Election Commission
              </Panel.Heading>
              <Panel.Body>
                <p>The Election Commission resolves to</p>
                <ul>
                  <li>
                    be an independent and autonomous body, responsible for
                    organising and conducting fair elections.
                  </li>
                  <li>
                    ensure that the election management is transparent with no
                    scope of partiality.
                  </li>
                  <li>
                    deal with any grievances and issues raised during the
                    process nonetheless.
                  </li>
                </ul>
                <br />
                <h5>Election Commissioners</h5>
                <ol>
                  <li>Gaurav Sofat</li>
                  <li>Neha Jain</li>
                  <li>Rohin Nanavati</li>
                </ol>
                <a
                  style={{ float: "right" }}
                  target={"_blank"}
                  href="https://docs.google.com/document/d/1sHfnu0Tpv6xn-VXDvZIyjVl1UYrmP_8JGJG-42AKP5E/edit?usp=sharing"
                >
                  Constitution (First Draft)
                </a>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <FaUsers /> Other Active Student Bodies
              </Panel.Heading>
              <Panel.Body>
                <div>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-badge">
                        <FaCheck />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Anti-Ragging Committee
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <Button
                            size="small"
                            bsStyle="link"
                            className="no-padding"
                            onClick={this.onClickAR}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <FaCheck />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Student Mentorship Programme
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <Button
                            size="small"
                            bsStyle="link"
                            className="no-padding"
                            onClick={this.onClickSM}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge danger">
                        <FaCheck />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Disciplinary Action Committee
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <Button
                            size="small"
                            bsStyle="link"
                            className="no-padding"
                            onClick={this.onClickDAC}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge warning">
                        <FaCheck />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Gender Cell</h4>
                        </div>
                        <div className="timeline-body">
                          <Button
                            size="small"
                            bsStyle="link"
                            className="no-padding"
                            onClick={this.onClickGC}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <MySmallModal
                    heading={this.state.header}
                    body={this.state.body}
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                  />
                </div>
              </Panel.Body>
            </Panel>
          </div>

          <div className="col-lg-5">
            <Panel>
              <Panel.Heading>
                <FaSun /> A Day in DA-IICT
              </Panel.Heading>
              <Panel.Body>
                <YouTube
                  videoId="XuGtAeEHKwI"
                  opts={opts}
                  onReady={this.onReady}
                />
              </Panel.Body>
            </Panel>
            <Panel>
              <Panel.Heading>
                <FaEdit /> Notable Activities
              </Panel.Heading>
              <Panel.Body>
                <ListGroup>
                  {_.filter(recentUpdates, o => o.active).map((o, i) => {
                    let timestamp = "Today";
                    const today = new Date();
                    const dd = today.getDate() === o.date.getDate();
                    const mm = today.getMonth() === o.date.getMonth();
                    const yyyy = today.getFullYear() === o.date.getFullYear();
                    const diff = Math.floor(
                      (today.getTime() - o.date.getTime()) / 86400000
                    );
                    if (!dd || !mm || !yyyy) {
                      if (diff === 1) {
                        timestamp = `${diff} day ago`;
                      } else {
                        timestamp = `${diff} days ago`;
                      }
                    }
                    return (
                      <ListGroupItem key={i} href={o.link} target={"_blank"}>
                        <i className="fa  fa-angle-double-right fa-fw" />{" "}
                        {o.title}
                        <span className="pull-right text-muted small">
                          <em>{timestamp}</em>
                        </span>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <FaSignal /> SBG Hierarchy
              </Panel.Heading>
              <Panel.Body>
                <Graph
                  graph={sgbHierarchyGraph}
                  options={sgbHierarchyOptions}
                  events={sgbHierarchyEvents}
                />
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <FaInfo /> Committee wise Members' Count
              </Panel.Heading>
              <Panel.Body>
                <Tabs id="tabs11" defaultActiveKey={1}>
                  <Tab eventKey={1} title="Under Graduate (99)">
                    <div>
                      <Donut
                        data={donutUGData}
                        color="#2c3e50"
                        innerRadius="70%"
                        outerRadius="90%"
                      />
                    </div>
                  </Tab>
                  <Tab eventKey={2} title="Post Graduate (23)">
                    <Donut
                      data={donutPGData}
                      color="#2c3e50"
                      innerRadius="70%"
                      outerRadius="90%"
                    />
                  </Tab>
                </Tabs>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
