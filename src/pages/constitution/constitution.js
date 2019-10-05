import React from "react";
import { PageHeader } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaBook } from "react-icons/fa";
import PDF from "react-pdf-js";

import ConstitutionPDF from "../../data/constitution/Constitution.pdf";

class Constitution extends React.Component {
  constructor(props, context) {
    super(props);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.state = {
      pages: null,
      page: null
    };
  }
  onDocumentComplete = pages => {
    this.setState({ page: 1, pages });
  };
  onPageComplete = page => {
    this.setState({ page });
  };
  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };
  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };
  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <a href="#p">
          <FaArrowLeft /> Previous
        </a>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <a href="#p">
            <FaArrowLeft /> Previous
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <a href="#n">
          Next <FaArrowRight />
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <a href="#n">
            Next <FaArrowRight />
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaBook /> SBG Constitution
            </PageHeader>
          </div>
        </div>
        <br />
        <br />
        <div>
          {pagination}
          <center>
            <PDF
              file={ConstitutionPDF}
              onDocumentComplete={this.onDocumentComplete}
              onPageComplete={this.onPageComplete}
              page={this.state.page}
            />
          </center>
        </div>
      </div>
    );
  }
}

export default Constitution;
