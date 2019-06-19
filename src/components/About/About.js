import React from 'react';


import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import styled from 'styled-components';
import WhatCarousel from '../Carousel/mainApp';
import ResumeButton from '../ResumeButton/ResumeButton';

import backImage from '../../assets/img/About/aboutme.jpg'
import './About.css';

const AboutMe = styled.div`
	overflow: visible;
	word-spacing: 2px;
	letter-spacing: 1px;
	line-height: 26px;
	z-index: 3;
	.fas , .fab, .far {
		/*font-family: 'themify';*/
		speak: none;
		font-style: normal;
		font-weight: 650;
		font-variant: normal;
		text-transform: none;
		font-size: 1vw;
		line-height: .5;
		padding: .5vh .5vw .5vh 0;
		-webkit-font-smoothing: antialiased;
	}
	.back-image {
		background: url(${backImage}) no-repeat 0 0 / 100% 100% #000;
	    padding: 0;
	    color:var(--success);
	    position: relative;
	    overflow-y: auto;
        background-size: cover!important;
	    background-attachment: fixed!important;
	    width: 100%;
	    z-index: -1;
	    transition: all 0.5s ease 0s;

		&:before {
			box-sizing: border-box;
		    background: none repeat scroll 0 0 #000000;
		    content: "";
		    height: 100%;
		    left: 0;
		    opacity: 0.8;
		    position: absolute;
		    top: 0;
		    width: 100%;
		    z-index: 0;
		}
	}
	.table-responsive {
		overflow: auto; 
	}
	.profile-description {
		margin-top: 0;
		max-width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
	span , a {
		color: var(--success);
		font-weight: 900;	
	}
	.github {
		text-decoration: underline;
	}
	.nav-tabs.nav-tabs-primary > .nav-item > .nav-link.active {
		color: var(--success);
		border-color: white;
	}
	.card {
		border-color: var(--success);
		box-shadow: 10px 17px 19px -7px rgba(255, 255, 255, 0.7);
	}
	.header {
	 	word-spacing: 3px;
	 	letter-spacing: 2px;
	 	color: var(--success);
	}
	#whatHeader {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
	}
	 @media (max-width: 1024px) {
		.row {
			display: flex;
			flex-direction: column;
			min-height: 150vh;
		}
	} 	
`;

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  tabs: 1
		};
	}
	toggleTabs = (e, stateName, index) => {
	    e.preventDefault();
	    this.setState({
	      [stateName]: index
	    });
	};

	componentDidMount() {
		window.addEventListener("wheel", this.changeTabColor);
	}
	componentWillUnmount() {
		window.removeEventListener("wheel", this.changeTabColor);
	}
	componentWillReceiveProps(nextProps) {
	  if (nextProps.location !== this.props.location) {
	    console.log(this.props.location)
	  }
	}

	render() {
		return (
	        <AboutMe className="section w-100 h-100 " id = 'about-me'>
		        <div className = "back-image w-100 pb5 min-h-100-m">
		            <Container className="align-items-between mw-100-l min-h-100-m">
		               	<Row className = 'mv5 ph4 overflow-visible ph3-m'>
			                <Col className = 'aboutme-text  mv3' lg="6" md="12" sm = "12">
				                <h1 className="profile-title text-left"> </h1>
				                <h5 className="text-on-back tc" id= 'about' > About Me</h5>
				                <div className="profile-description tj fw9 bg-darker pa4 o-80 f5 f7-m z-2" style= {{paddingBottom: '3vh'}}>
				                	<p>
				                		Since I'm not writing an autobiography I'll keep this simple. <span> I love learning things </span>. From a not-so-humble experience as a <span>Chemist</span> to entering the world of <span>Web Development</span>, my life has taken more than a few turns. But one thing has remained constant- <span>the drive and passion to learn</span>. 
				                	</p>
				                	<p>
										As you'll see from my varied projects, I am gaining experience with Front-End skills as <span>React.js</span>, <span>HTML5</span> and <span>CSS3</span>, and also Back-End such as <span>Node.js</span>, <span>Express.js</span> as well as <span>PostgresSQL</span>. I consider myself a perpetual student of life and continue to develop as a... well, <span>DEVELOPER</span>. With a desire to create amazing stuff and a hunch for aesthetics, I see myself as a generalist with a desire to specialize. 
									</p>
									<p>
										In order to discover where my path will lead- I started coding. I have several projects that I worked on. For a sneak peak, feel free to visit my <span><a className = 'github' href = 'https://github.com/KarinPR'>GitHub</a></span> page. 	
									</p>
									<p>
										I am currently unemployed and looking for my first job as a <span> FULL STACK DEVELOPER </span>, in the meantime, gaining useful knowledge and experience. When I'm not studying or working on projects I enjoy playing with my two kids (5 and 2/3), taking a walk, and occassionally still play video games with my husband. Although, with two young kids and a fierce desire to become a developer, there is less and less time for gaming. 
									</p>
									<p>
										Anyway, too much talking. Let's get down to business!...
				                	</p>
			                  	</div>
			                  	
				            </Col>
				            <Col className="mv0 ml6-l ml2-m " lg="4" md="12" sm = "12">
				                <Card className="card-coin card-plain z-2 bg-darker o-70" style= {{marginTop: '11rem', paddingBottom: '1rem'}}>
				                    <CardBody className = 'w-100'>
				                      <h4 className="title f2 mb4 o-100 flex justify-content-center"> Personal Info </h4>
				                      	<Nav
				                        	className="nav-tabs-primary justify-content-center o-80"
				                        	tabs
				                      	>
					                        <NavItem>
					                          	<NavLink
					                            	className={classnames({
					                              	active: this.state.tabs === 1
					                            	})}
					                            	onClick={e => this.toggleTabs(e, "tabs", 1)}
					                            	href="#pablo"
					                         	>
					                            WHO ?
					                          	</NavLink>
					                        </NavItem>
					                        <NavItem>
					                          	<NavLink
					                            	className={classnames({
					                              	active: this.state.tabs === 2
					                            	})}
					                            	onClick={e => this.toggleTabs(e, "tabs", 2)}
					                            	href="#pablo"
					                          	>
					                            WHY ?
					                          	</NavLink>
					                        </NavItem>
					                        <NavItem>
					                          	<NavLink
					                            	className={classnames({
					                              	active: this.state.tabs === 3
					                            	})}
					                            	onClick={e => this.toggleTabs(e, "tabs", 3)}
					                            	href="#pablo"
					                          	>
					                            HOW ?
					                          	</NavLink>
					                        </NavItem>
				                      	</Nav>
				                      	<TabContent
				                        	className="tab-subcategories"
				                        	activeTab={"tab" + this.state.tabs}
				                      	>
				                        	<TabPane tabId="tab1">
				                          		<Table className="tablesorter" responsive>
				                            		<thead className="text-primary">
				                              			<tr>
				                                			<th className="header" colSpan="3"> let me introduce myself</th>

				                              			</tr>
				                            		</thead>
				                            		<tbody>
														<tr>
															<td> <i className="fas fa-user display-none"></i> Full Name </td>
															<td> : </td>
															<td> <span>Karin Povolozki - Rabichev</span></td>
														</tr>
							                            <tr>
							                            	<td> <i className="fas fa-globe display-none"></i> Residancy </td>
							                                <td> : </td>
							                                <td>Israel</td>
							                            </tr>
							                            <tr>
							                                <td><i className="far fa-envelope display-none"></i>Email</td>
							                                <td> : </td>
							                                <td> <span>karinpo.rab @ gmail.com</span> </td>
							                            </tr>
							                            <tr>
							                                <td><i className="fas fa-mobile-alt display-none"></i>Phone</td>
							                                <td> : </td>
							                                <td>+ 972 - 545 - 563 - 309</td>
							                            </tr>
						                            </tbody>
						                        </Table>
					                        </TabPane>
					                        <TabPane tabId="tab2">
						                        <Table className="tablesorter" responsive>
						                            <thead className="text-primary">
						                              <tr>
						                                <th className="header">Web Development could be hard</th>
						                              </tr>
						                            </thead>
						                            <tbody>
						                              <tr>
						                                <td className = 'why'> 
						                                	Code Debbuging is hard. Managing eleborate projects is hard. Learning new features is hard.
						                                	Go ahead and see <span> HOW </span> I can ease the pain.
						                                </td>
						                              </tr>
						                            </tbody>
						                        </Table>
					                        </TabPane>
					                        <TabPane tabId="tab3">
						                        <Table className="tablesorter" responsive>
				                            		<thead className="text-primary">
				                              			<tr >
				                                			<th className="header" id = 'whatHeader' colSpan="5"> Some of the things I'm good at</th>
				                              			</tr>
				                            		</thead>
				                            	</Table>
				                            		<div className = 'pa2 ma3-ns'>
						                            	<WhatCarousel />
				                            		</div>
					                        </TabPane>
					                    </TabContent>
				                    </CardBody>
				                </Card>
				                <ResumeButton />
			                </Col>
			            </Row>
		            </Container>
		        </div>
	        </AboutMe>
		);
	}
}

export default About;