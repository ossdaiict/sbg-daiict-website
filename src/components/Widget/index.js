import PropTypes from "prop-types";
import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

class StatWidget extends Component {
  static propTypes = {
    theme: PropTypes.string,
    count: PropTypes.string,
    headerText: PropTypes.string,
    icon: PropTypes.any,
    footerText: PropTypes.string
  };
  render() {
    const FaIcon = this.props.icon;
    return (
      <Panel className={this.props.theme}>
        <Panel.Heading>
          <div className="small row">
            <div className="col-xs-3 stat-icon">
              <FaIcon />
            </div>
            <div className="small col-xs-9 text-right">
              <div className="huge">{this.props.count}</div>
              <div>{this.props.headerText}</div>
            </div>
          </div>
        </Panel.Heading>
        <Panel.Footer>
          {this.props.linkTo ? (
            <Link to={this.props.linkTo}>
              <span className="pull-left">{this.props.footerText}</span>
              <span className="pull-right">
                <FaArrowCircleRight />
              </span>
              <div className="clearfix" />
            </Link>
          ) : (
            <a href={this.props.href} target={"_blank"}>
              <span className="pull-left">{this.props.footerText}</span>
              <span className="pull-right">
                <FaArrowCircleRight />
              </span>
              <div className="clearfix" />
            </a>
          )}
        </Panel.Footer>
      </Panel>
    );
  }
}

export default StatWidget;
