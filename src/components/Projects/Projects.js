import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ImageCard from './ImageCard'
import backgroundImage from '../../assets/img/Projects/projects-background.jpg'
import myProjects from './myProjects'

import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import Styled from 'styled-components';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 900 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};

const ProjectsStyle = Styled.div`
  .image {
    background: url(${backgroundImage}) no-repeat 0 0 / 100% 100% #000 ;
    background-size: cover!important;
    background-attachment: fixed!important;
    height: calc(100% + 10px);
    width: 100%;
    z-index: 1;
    transition: all 0.5s ease 0s;
    &:before {
      background: none repeat scroll 0 0 #000000;
      content: "";
      height: 100%;
      left: 0;
      opacity: 0.7;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

  }    
  .nav-tabs.nav-tabs-primary > .nav-item > .nav-link.active {
    color: var(--success);
    border-color: white;
  }
 .react-multiple-carousel__arrow {

    height: 85%;
    border-radius: 9999999px;
    background-color: transparent;
    transition: background-color 0.6s;
    z-index: 1;
    &::before {
      color : #EEEEEE;
      display: inline-flex;
    }
    &:hover {
      background-color: rgba(0, 242, 195, 0.5);
    }
    &:active{
      background-color: rgba(0, 242, 195, 1);
    }
  }
  .react-multiple-carousel__arrow--left {
    left: calc(.1% - 35px); 
    &::before {
      content: '◀';
      padding-left: 3.5vh;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: calc(.1% - 35px); 
    &::before {
      content: '▶';
      padding-right: 3.5vh;
    }
  }
  .react-multi-carousel-dot-list {
    bottom: calc(.1% - 2px);
  }
  ul li {
    color : #EEEEEE;
  }
  .react-multi-carousel-dot button {
    border: none;
    size: .25rem;
    &:hover {
      background: var(--success);
    }
  }
  .react-multi-carousel-dot--active button {
    justify-self: center;
    background: var(--success);
  }
`;


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      axis: 'x',
      isMoving: false,
      projectsArr:[]
    };
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }

  componentDidMount() {
    this.setState( {projectsArr : myProjects});
    
  }
  componentWillUnmount() {
    this.setState( {projectsArr : myProjects});
  }

  toggleTabs = (e, stateName, index) => {
      console.log(e)
      e.preventDefault();
      this.setState({
        [stateName]: index
      });
  };


  render() {
    // console.log(this.state.projectsArr)
    return (
      <ProjectsStyle className="section bg-black z-1 " id = 'projects-me'>
        <div className = 'image w-100 pa5 pa6-m'>
          <Container className="  center-m  ">
            <Row className='' lg="12" md="12" sm = "12">
              <Col md = '12'>
                <h5 className="text-on-back mv3 tc mv1-m" id = 'projects'> Projects </h5>
              </Col>
              <Col>
                <Card className="bg-inherit br4 pt1 mt4 z-2 1 w-100 " style = {{border: 'none'}}>
                  <CardBody className = 'bg-darker w-100 o-80 pv3 h-auto-m br4 ph0 pv1-m '>
                    <Nav
                      className=" flex nav-tabs-primary justify-around-l f4 pl5 justify-center-ns"
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
                          ALL
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
                          COMPLEX PROJECTS
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
                          MINI PROJECTS
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories "
                      activeTab={"tab" + this.state.tabs}
                    >
                      <TabPane tabId="tab1">
                        <div className = 'flex center justify-around'> 
                          <Carousel
                            swipeable = {true}
                            draggable = {false}
                            showDots = {true}
                            responsive = {responsive}
                            ssr = {true} // means to render carousel on server-side.
                            slidesToSlide = {3}
                            infinite = {true}
                            autoPlay = {this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed = {5000}
                            keyBoardControl = {true}
                            focusOnSelect = {true}
                            customTransition = "all 1"
                            transitionDuration = {3000}
                            containerClass = "carousel-container"
                            removeArrowOnDeviceType = {["tablet", "mobile"]}
                            deviceType = {this.props.deviceType}
                            dotListClass = "custom-dot-list-style"
                            itemClass = "carousel-item-padding-15-px"
                            beforeChange={() => this.setState({ isMoving: true })}
                            afterChange={() => this.setState({ isMoving: false })}
                          >
                            {
                              this.state.projectsArr.map( project => {
                                return (
                                  <ImageCard 
                                    key = {project.id}
                                    imgSrc = {project.imgSrc}
                                    website = {project.website}
                                    title = {project.title}
                                    description = {project.description}
                                    skills = {project.skills}
                                    onClick = {event => { if (this.state.isMoving) {event.preventDefault()}}}
                                    isMoving = {this.state.isMoving}
                                  />
                                )
                              })
                            }
                          </Carousel>
                        </div>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <div className = 'flex center justify-around '>
                          <Carousel
                            swipeable = {true}
                            draggable = {false}
                            showDots = {true}
                            responsive = {responsive}
                            ssr = {true} // means to render carousel on server-side.
                            slidesToSlide = {1}
                            infinite = {true}
                            autoPlay = {this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed = {5000}
                            keyBoardControl = {true}
                            focusOnSelect = {true}
                            customTransition = "all 1"
                            transitionDuration = {3000}
                            containerClass = "carousel-container"
                            removeArrowOnDeviceType = {["tablet", "mobile"]}
                            deviceType = {this.props.deviceType}
                            dotListClass = "custom-dot-list-style"
                            itemClass = "carousel-item-padding-15-px"
                            beforeChange={() => this.setState({ isMoving: true })}
                            afterChange={() => this.setState({ isMoving: false })}
                          >
                            {
                              this.state.projectsArr.filter(project => project.tag.includes('big')).map( project => {
                                return (
                                  <ImageCard 
                                    key = {project.id}
                                    imgSrc = {project.imgSrc}
                                    website = {project.website}
                                    title = {project.title}
                                    description = {project.description}
                                    skills = {project.skills}
                                    onClick = {event => { if (this.state.isMoving) {event.preventDefault()}}}
                                    isMoving = {this.state.isMoving}
                                  />
                                )
                              })
                            }
                          </Carousel>
                        </div>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <div className = 'flex center justify-around '>
                          <Carousel
                            swipeable = {true}
                            draggable = {false}
                            showDots = {true}
                            responsive = {responsive}
                            ssr = {true} // means to render carousel on server-side.
                            slidesToSlide = {2}
                            infinite = {true}
                            autoPlay = {this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed = {5000}
                            keyBoardControl = {true}
                            focusOnSelect = {true}
                            customTransition = "all 300ms ease-in-out"
                            transitionDuration = {3000}
                            containerClass = "carousel-container"
                            removeArrowOnDeviceType = {["tablet", "mobile"]}
                            deviceType = {this.props.deviceType}
                            dotListClass = "custom-dot-list-style"
                            itemClass = "carousel-item-padding-15-px"
                            beforeChange={() => this.setState({ isMoving: true })}
                            afterChange={() => this.setState({ isMoving: false })}
                          >
                            {
                              this.state.projectsArr.filter(project => project.tag.includes('small')).map( project => {
                                return (
                                  <ImageCard 
                                    key = {project.id}
                                    imgSrc = {project.imgSrc}
                                    website = {project.website}
                                    title = {project.title}
                                    description = {project.description}
                                    skills = {project.skills}
                                    onClick = {event => { if (this.state.isMoving) {event.preventDefault()}}}
                                    isMoving = {this.state.isMoving}
                                  />
                                )
                              })
                            }
                          </Carousel>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ProjectsStyle>
    );
  }
}

export default Projects;