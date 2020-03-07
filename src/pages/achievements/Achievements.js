import React from 'react'
import { Label, ListGroup, PageHeader, Tab, Tabs, Table } from 'react-bootstrap'
import { FaTrophy } from 'react-icons/fa'

class Achievements extends React.Component {
  state = {
    activePage: 1,
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaTrophy /> Achievements
            </PageHeader>
          </div>
        </div>
        <div>
          <Tabs id="tabs1" defaultActiveKey={1}>
            <Tab eventKey={1} title="2019">
              <br />
              <ListGroup componentClass="ul">
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      Some sports teams participated in{' '}
                      <strong>Khel Mahakumbh</strong> and performed excellently.
                      Here are the results-
                      <br />
                      <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Team/Single</th>
                            <th>Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Siddhi Patel (Boxing)</td>
                            <td>3rd Position</td>
                          </tr>
                          <tr>
                            <td>Lawn Tennis (Women)</td>
                            <td>Winners</td>
                          </tr>
                          <tr>
                            <td>Football (Men)</td>
                            <td>Runners Up</td>
                          </tr>
                          <tr>
                            <td>Basketball (Women)</td>
                            <td>Runners Up</td>
                          </tr>
                        </tbody>
                      </Table>
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> September 2019
                    </div>
                    <br />
                  </div>
                </li>

                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      DA-IICT's sports contingent performed excellently in the
                      sports festival of{' '}
                      <strong>GNLU- 'Justice League 2020'</strong>. Below are
                      the results:
                      <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Team</th>
                            <th>Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Volleyball (Men)</td>
                            <td>Runners Up</td>
                          </tr>
                          <tr>
                            <td>Carrom</td>
                            <td>Runners Up</td>
                          </tr>
                          <tr>
                            <td>Badminton (Women)</td>
                            <td>Runners Up</td>
                          </tr>
                          <tr>
                            <td>Badminton (Men)</td>
                            <td>Semi Finalists</td>
                          </tr>
                          <tr>
                            <td>Lawn Tennis (Women)</td>
                            <td>3rd Position</td>
                          </tr>
                          <tr>
                            <td>Athletics (400 m)</td>
                            <td>2nd Position</td>
                          </tr>
                          <tr>
                            <td>Athletics (1500 m)</td>
                            <td>4th Position</td>
                          </tr>
                        </tbody>
                      </Table>
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 20th February-23rd
                      February
                    </div>
                    <br />
                  </div>
                </li>

                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      DA-IICT's sports contingent participated in the sports
                      festival of <strong>PDPU- 'Petrocup 2020'</strong>. Below
                      are the results:
                      <br />
                      <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Team</th>
                            <th>Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Football (Women)</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>Volleyball (Women)</td>
                            <td>Semi Finalists</td>
                          </tr>
                          <tr>
                            <td>Lawn Tennis (Men)</td>
                            <td>Semi Finalists</td>
                          </tr>
                        </tbody>
                      </Table>
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 13th February-17th
                      February
                    </div>
                    <br />
                  </div>
                </li>

                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      <strong>Srikumar Sastry</strong> and{' '}
                      <strong>Arnav Saha</strong> of BTech 4th year have been
                      awarded the best paper presentation award in ML track at{' '}
                      <strong>INAC-4 national conference </strong> held at{' '}
                      <strong>SAC, ISRO</strong> during September, 2019.
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> September, 2019
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Druval Suthar</strong> has been selected 2 times
                      in ACM ICPC Regionals and had a{' '}
                      <strong>regional rank 10th</strong> in the year 2019-20
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 2019
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Milek Agrawal</strong> from BTech 3rd year has
                      been selected as{' '}
                      <strong>Microsoft Student Partner</strong> for the year
                      2019-20
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 2019
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Total 10 teams</strong> ( highest from any single
                      college ) qualified in Amritapuri regionals in ICPC
                      2019-20. 
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 2019
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>
                        Team Sizzling_Brownie ( Deep Savani, Rutvik Kothari,
                        Dhruval Suthar )
                      </strong>{' '}
                      came 10th in Amritapuri and Kanpur regional in ICPC
                      2019-20
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 2019
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>
                        Team Byte_me ( Preet Sardhara, Jaykishan Parmar, Tanik
                        Pansuriya )
                      </strong>{' '}
                      came 7th in Kharagpur region and 15th in Amritapuri region
                      in ICPC 2019-20.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 2019
                  </div>
                  <br />
                </li>
              </ListGroup>
            </Tab>

            <Tab eventKey={2} title="2018">
              <br />
              <ListGroup componentClass="ul">
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      <strong>Hardik Modi</strong> from BTech 4th year stood{' '}
                      <strong>12th in Asia in Microsoft Imagine Cup</strong>.
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 2018
                    </div>
                    <br />
                  </div>
                </li>

                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      <strong>Music club</strong> has won 1st prize in{' '}
                      <strong>Indian Rock, Waves 2018,</strong> BITS Goa.
                    </span>
                  </p>
                  <div>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 2018
                    </div>
                    <br />
                  </div>
                </li>
              </ListGroup>
            </Tab>

            <Tab eventKey={3} title="2017">
              <br />
              <ListGroup componentClass="ul">
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span>
                      <strong>Abhijeet Ghodgaonkar</strong> (M.Tech first year
                      student and convener of the Cubing Club DA-IICT) got 2nd
                      rank on <strong>Multiple Blind Folded</strong> category by
                      solving{' '}
                      <strong>19 out of 21 Rubik's Cubes in 53 minutes</strong>{' '}
                      in the Cubing Competition "SCMU 2017" (WCA) held in
                      Mumbai.{' '}
                      <a
                        style={{ color: '#333333' }}
                        href="https://www.youtube.com/watch?v=AHtNa2H2sWM"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Click to see the video
                      </a>
                       
                    </span>
                  </p>
                  <div>
                    <a
                      target={'_blank'}
                      rel="noopener noreferrer"
                      href={
                        'https://drive.google.com/file/d/1quq0epjAGBPEhPXRM-vJpovL4PooNr4B/view?usp=sharing'
                      }
                    >
                      Photo
                    </a>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 6th September, 2017
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      Three of{' '}
                      <strong>MSTC(Microsoft Student Technical Club)</strong>{' '}
                      members have been selected as{' '}
                      <strong>Microsoft Student Partner(MSP) 2017-18:</strong>
                    </span>
                  </p>
                  <ol>
                    <li>
                      <span style={{ color: '#333333' }}>Hardik Modi</span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>Amey Ghate</span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>Roshani</span>
                    </li>
                  </ol>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 18th August, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Rajat Garg (B.Tech 3d Year)</strong> received the
                      award for Best Delegate of the DISEC committee of the HLCC
                      MUN. He also received an Honourable Mention in the same
                      committee of the AYMUN. 
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 14th August, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Rajdeep Pinge (B.Tech 4th Year)</strong> won High
                      Commendation in the UN Development Programme of the
                      AYMUN. 
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 14th August, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Bishesh Oram (B.Tech 2nd Year)</strong> received a
                      Special Mention in the Ecofin of the HLCC MUN. 
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 14th August, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <Label>New</Label>&nbsp;
                    <span style={{ color: '#333333' }}>
                      <strong>Rajat Garg (B.Tech 3rd Year)</strong> at Jodhpur
                      and winning the High Commendation at the Thar MUN. He was
                      a part of the UNSC and represented the delegate of Iran in
                      the committee.  
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 3rd July, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Rahul Saranjame (B.Tech 4th year)</strong>, bagged
                      the Global Leadership Award at the PDPU MUN held last
                      weekend. The committee was the Special Political and
                      Decolonization Committee with the agenda of International
                      cooperation in peaceful uses of outer space.  
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 12th April, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Yash Kumar (B.Tech 3rd Year) </strong>and{' '}
                      <strong>Karan Thakkar (B.Tech 3rd Year)</strong> secured
                      runners up position at TCS Codevita, 2016. This event was
                      held at TCS Siruseri campus, Chennai, where 15 teams
                      selected from all over India were invited.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 16th April, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>DTG (DA-IICT Theatres Group)</strong> bagged 2nd
                      prize in street play competition <strong>Aahvaan</strong>{' '}
                      held at PDPU as a part of their annual cultural fest,
                      Flare.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 7th April, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Music Club</strong> bagged the first prize in the
                      Livewire/Battle of the bands event at Spectrum, NIFT.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 12th February, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>DADC (DA-IICT Dance Club)</strong> bagged second
                      prize at Reprise'17, the techno-cultural fest of SPM,
                      PDPU.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 27th January, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Team FruitSalad</strong> of our college has
                      qualified for <strong>ACM-ICPC World Finals</strong>. This
                      is the first time in the history of our college that a
                      team has achieved this feat.
                    </span>
                    <span style={{ color: '#333333' }}>
                      {' '}
                      They stood 1st in Kharagpur Regionals and 2nd in Kolkata
                      Regionals and would be representing India alongside 6
                      other top teams at the World Finals to be held in United
                      States in May 2017.
                    </span>
                    <span style={{ color: '#333333' }}> Team FruitSalad:</span>
                  </p>
                  <ol>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Sumeet Varma (B.Tech. 4th Year)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Kuldeep Patel (B.Tech. 4th Year)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Yash Kumar (B.Tech. 3rd Year)
                      </span>
                    </li>
                  </ol>
                  <div>
                    <a
                      target={'_blank'}
                      href={
                        'https://drive.google.com/file/d/14SEVNEyDw3Yo9U2oPtyemqqd4UiAI8vm/view?usp=sharing'
                      }
                    >
                      Photo
                    </a>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 26th January, 2017
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <span>
                      <strong>Ms Malvika Singh</strong>, a B.Tech 2014 batch
                      student, has been selected for{' '}
                      <strong>PennApps XV</strong>, a application development
                      competition to be held at Penn Engineering, University of
                      Pennsylvania during January 20 to 22nd 2017.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 20th January, 2017
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span>
                      PhD student <strong>Mr. Nirmesh J. Shah</strong> has been
                      awarded a travel grant of 1000 US dollars by IEEE Signal
                      Processing Society to present his two papers at{' '}
                      <strong>ICASSP 2017</strong>, New Orleans USA.The papers
                      are in collaboration with his PhD supervisor Prof. Hemant
                      Patil.
                    </span>
                  </p>
                </li>
              </ListGroup>
            </Tab>
            <Tab eventKey={4} title="2016">
              <br />
              <ListGroup componentClass="ul">
                <li className="list-group-item">
                  <p>
                    <span>
                      Research paper titled{' '}
                      <strong>
                        "Accelerated Fluid Simulation of Low Temperature Plasmas
                        on Intel Xeon Phi MIC Architecture"
                      </strong>{' '}
                      authored by B.Tech (2013 batch) students{' '}
                      <strong>
                        Henil Shah, Anurag Gupta, Saumya Bhadani and Prof.
                        Bhaskar Chaudhury
                      </strong>{' '}
                      received the <strong>Best Poster Award (SRS)</strong> at
                      the 23rd IEEE International Conference on HPC, Data and
                      Analytics (HiPC, 2016).
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 25th December, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      In a recent competition held on Hackerrank to determine
                      the best universities in terms of coders, students from
                      DA-IICT gave a great performance. Over 5,500 students from
                      126 schools from around the world participated in the
                      event. DA-IICT stood as the{' '}
                      <strong>3rd best college in India</strong> and{' '}
                      <strong>11th best in world</strong> in terms of active
                      best coders.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 8th December, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Tejasv Gupta</strong> secured 398th rank in the
                      world in the Pre-Final round of{' '}
                      <strong>Google Distributed Code Jam</strong>. He is one of
                      the two Indians who reached till Semi-Final round in both
                      the tracks.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 3rd December, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Sumeet Varma</strong> secured 3rd rank in India
                      and 189th rank in the world in the Pre-Final round of{' '}
                      <strong>Google Code Jam</strong>.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 3rd December, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <strong>Tejasv Gupta</strong> secured 7th rank in India
                      and 294th rank in the world in the Pre-Final round of{' '}
                      <strong>Google Code Jam</strong>.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 3rd December, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      The following teams of DA-IICT under the guidance of{' '}
                      <strong>Professor Bhaskar Chaudhury</strong> have stood
                      second and <strong>third</strong> at the HiPC Student
                      Programming Challenge which is a national level parallel
                      programming competition organized for students enrolled in
                      Indian Universities as a part of High Performance
                      Computing (HiPC) conference 2016 (
                      <a
                        style={{ color: '#333333' }}
                        href="http://www.hipc.org"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        http://www.hipc.org
                      </a>
                      ).
                    </span>
                  </p>
                  <ol>
                    <li>
                      <span style={{ color: '#333333' }}>
                        <strong>
                          Yashwant Keswani and Akshar Varma stood 2nd
                        </strong>{' '}
                        (both BTech 2013 batch)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        <strong>
                          Keval Shah, Abhi Shah and Parshwa Shah stood 3rd{' '}
                        </strong>
                        (all three BTech 2014 batch)
                      </span>
                    </li>
                  </ol>
                  <div>
                    <a
                      target={'_blank'}
                      href={
                        'https://drive.google.com/file/d/16G7MG-6xAbjJRcbM8xZruHj_Li9xZo4R/view?usp=sharing'
                      }
                    >
                      Photo
                    </a>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 2nd December, 2016
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      Team Epsilon-42, Music Club bagged a prize as the second
                      runner-up of the{' '}
                      <strong>
                        Indian Rock event amidst hefty competition.{' '}
                      </strong>
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 14th November, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      Our institute's team stood second in{' '}
                      <strong>Hackerearth Collegiate Cup,</strong> whose final
                      round was held at Bangalore. Top 15 colleges of India were
                      shortlisted based on 3 online elimination rounds.
                    </span>
                  </p>
                  <span style={{ color: '#333333' }}>
                    <strong>Team members:</strong>
                  </span>
                  <ol>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Sumeet Varma (B.Tech 4th Year)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Kuldeep Patel (B.Tech 4th Year)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Yash Kumar (B.Tech 3rd Year)
                      </span>
                    </li>
                  </ol>
                  <br />
                  <span style={{ color: '#333333' }}>
                    {' '}
                    Also 5 students from our college were shortlisted for Sears
                    Dots and Arrows - Hackerrank through online eliminations.
                  </span>
                  <br />
                  <span style={{ color: '#333333' }}>
                    {' '}
                    <strong>
                      3rd Rank - Sumeet Varma (B.Tech 4th Year) - 1 lakh INR
                      <br />
                      9th Rank - Yash Kumar (B.Tech 3rd Year) - iPad
                    </strong>
                  </span>
                  <br />
                  <br />
                  <span style={{ color: '#333333' }}>
                    <strong>Honourable Mentions</strong>
                  </span>
                  <ol>
                    <li>
                      <span>Mohib Manva (B.Tech 3rd Year)</span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Tanmay Patel (B.Tech 3rd Year)
                      </span>
                    </li>
                    <li>
                      <span style={{ color: '#333333' }}>
                        Deepit Patel (B.Tech 3rd Year)
                      </span>
                    </li>
                  </ol>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 10th November, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      In IIM-A's Sports Fest, <strong>Shaurya</strong> (October
                      20 2016), our Cricket Team finished at{' '}
                      <strong>Runner's Up</strong> position in the fest.
                      Football (Boys), Volleyball (Boys), Lawn Tennis, Table
                      Tennis (Boys), Badminton (Girls), Chess and Carom teams
                      reached the semi-finals in Shaurya:
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 20th October, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      Selected for the{' '}
                      <strong>
                        Booking.com Passions Hacked on-site Hackathon
                      </strong>
                      . It held at Booking.com HQ i.e. Amsterdam, Netherlands
                      from 13th - 15th Oct, 2016 and was an all-expenses-paid
                      trip. In order to qualify, they had to solve 6 algorithmic
                      problems and also one open ended question in their
                      respective categories.
                    </span>
                  </p>
                  <span style={{ color: '#333333' }}>
                    {' '}
                    Results of Qualification Round held on HackerRank:
                  </span>
                  <br />
                  <br />
                  <span style={{ color: '#333333' }}>
                    {' '}
                    <strong>Tejasv Gupta - 5th rank in World</strong> (
                    <em>Mobile Codesprint</em>)
                  </span>
                  <br />
                  <span style={{ color: '#333333' }}>
                    {' '}
                    <strong>Sumeet Varma -15th rank in World</strong> (
                    <em>Backend Codesprint</em>)
                  </span>
                  <br />
                  <br />
                  <span style={{ color: '#333333' }}>
                    {' '}
                    The contest was open for people of all age groups. Overall
                    50 people from all over the world inclusive of all the three
                    categories i.e Backend, Frontend and Mobile are invited for
                    the on-site event.  
                  </span>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 6th October, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      In the GNLU Debate 2016, a team comprising of{' '}
                      <strong>Aashay Binaykia</strong> ( B.Tech 2015) and{' '}
                      <strong>Labdhi Shah</strong> (B.Tech 2015) won the British
                      Parliamentary Debating competition in the Novice category.
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 3rd October, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      <a
                        style={{ color: '#333333' }}
                        href="http://www.daiict.ac.in/daiict/images/DIP_8307.JPG"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <strong>"TCS Best Student Award"</strong> was presented
                        to{' '}
                        <strong>Ms. Lavanya Gupta (B.Tech 2012 batch)</strong>{' '}
                        by Shri Anomitra Das (Regional Head HR) TCS in a
                        function held at DA-IICT on 13th September 2016.
                      </a>
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 13th September 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      A team from DA-IICT bagged the first prize at the{' '}
                      <strong>InOut hackathon, Surat.</strong>
                    </span>
                  </p>
                  <span>
                    <strong>Team members:</strong>
                  </span>
                  <ol>
                    <li>
                      <span>Sahil Jain</span>
                    </li>
                    <li>
                      <span>Ankit Muchhala</span>
                    </li>
                    <li>
                      <span>Kushan Joshi</span>
                    </li>
                  </ol>
                  <div>
                    <a
                      target={'_blank'}
                      href={
                        'https://drive.google.com/file/d/1EpRbx9nJSAsSv5oNVrm5JsdptxD3j7ai/view?usp=sharing'
                      }
                    >
                      Photo
                    </a>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 16th August, 2016
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <span>
                      A total of <strong>11</strong> students were selected as
                      interns for various mentoring organizations of{' '}
                      <strong>Google Summer of Code 2016</strong> under the
                      Google umbrella
                    </span>
                  </p>
                  <div>
                    <a
                      target={'_blank'}
                      href={
                        'https://drive.google.com/file/d/1VJxjxz4odpLPHIP5IkdZWYCmhlQAlkdO/view?usp=sharing'
                      }
                    >
                      Photo
                    </a>
                    <div style={{ float: 'right' }}>
                      <i className="fa fa-clock-o grey" /> 28th April, 2016
                    </div>
                    <br />
                  </div>
                </li>
                <li className="list-group-item">
                  <p>
                    <span>
                      <strong>DTG(DA-IICT Theatres Group) Mime Team</strong>{' '}
                      bagged the <strong>2nd Prize</strong> in the Mime
                      competition held during Flare'16 at PDPU!
                    </span>
                  </p>
                  <div style={{ float: 'right' }}>
                    <i className="fa fa-clock-o grey" /> 21st April, 2016
                  </div>
                  <br />
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      M.Tech student <strong>Ms. Bhavika Bathiya</strong>{' '}
                      received best paper award at{' '}
                      <strong>ACM WiECON-ECE 2016</strong>. The paper is based
                      on her thesis which was guided by{' '}
                      <strong>
                        Prof. Sanjay Srivastava and Prof. Biswajit Mishra.
                      </strong>
                    </span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      B.Tech student <strong>Nidhi Vyas</strong> form
                      Information Retrieval Lab, DA-IICT got an offer from The
                      Center for Language and Speech Processing,{' '}
                      <strong>Johns Hopkins University</strong> for her BTP.
                    </span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    <span style={{ color: '#333333' }}>
                      PhD student <strong>Sarita Agrawal</strong> has earned the{' '}
                      <strong>'Best Paper Award (PhD Forum Track)'</strong> from
                      the IEEE Advanced Networks and Telecommunications Systems
                      (ANTS) 2016.
                    </span>
                  </p>
                </li>
              </ListGroup>
            </Tab>
          </Tabs>
        </div>
        <br />
        <br />
      </div>
    )
  }
}

export default Achievements
