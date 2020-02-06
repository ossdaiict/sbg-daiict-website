import React from 'react'
import { PageHeader, Panel } from 'react-bootstrap'
import { FaCheck, FaClock } from 'react-icons/fa'

class Minutes extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaClock />
              Minutes of Meetings
            </PageHeader>
          </div>
        </div>
        <Panel>
          <Panel.Heading>
            <FaClock /> Timeline
          </Panel.Heading>
          <Panel.Body>
            <div>
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-badge danger">
                    <FaCheck />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        SBG General Meet 1 (2020)
                      </h4>
                      <p>
                        <small className="text-muted">
                          <FaClock /> 04th February, 2020
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <a
                        target={'_blank'}
                        rel={'noopener norefferer'}
                        href={
                          'https://drive.google.com/file/d/1Mqs_x22KebK9Wvrd3GG2nJZbImxNo6SP/view?usp=sharing'
                        }
                      >
                        Click to view the minutes
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge success">
                    <FaCheck />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        SBG General Meet 1 (2017-18)
                      </h4>
                      <p>
                        <small className="text-muted">
                          <FaClock /> 19th September, 2017
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <a
                        target={'_blank'}
                        rel={'noopener norefferer'}
                        href={
                          'https://docs.google.com/document/d/1dnZZpukHTwIMxsyYRd04_HJPysc72d1Zpk-EBKemwVw/edit?usp=sharing'
                        }
                      >
                        Click to view the minutes
                      </a>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge danger">
                    <FaCheck />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        SBG General Meet 3 (2016-17)
                      </h4>
                      <p>
                        <small className="text-muted">
                          <FaClock /> 31st January, 2017
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <a
                        target={'_blank'}
                        rel={'noopener norefferer'}
                        href={
                          'https://drive.google.com/open?id=1mmSIBA_-tXB4cucQwvh9JBab_nmOh4ExR_vPXMTTte8'
                        }
                      >
                        Click to view the minutes
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge warning">
                    <FaCheck />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        SBG General Meet 1 (2016-17)
                      </h4>
                      <p>
                        <small className="text-muted">
                          <FaClock /> 26th August, 2016
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <a
                        target={'_blank'}
                        rel={'noopener norefferer'}
                        href={
                          'https://docs.google.com/document/d/1dyjhdQIXdi9QVgYq5oHUf4PAxaDkx5gtM1vRWWvbvmE'
                        }
                      >
                        Click to view the minutes
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Minutes
