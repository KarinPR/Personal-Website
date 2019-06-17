import React from 'react';
import { Container, Row, Col } from "reactstrap";

import TextBox from './TextBox';
import myExperience from './myExperience'
import styled from 'styled-components';

const PastExperience = styled.div`
word-spacing: 2px;
letter-spacing: 1px;
line-height: 26px;
.fas , .fab, .far {
    /*font-family: 'themify';*/
    color: var(--success);
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
.container {
    &:before{
        display: table;
        content: " ";
        box-sizing: border-box;
    }
}
.row {
    margin-right: -15px;
    margin-left: -15px;
    &:before{
        display: table;
        content: " ";
        box-sizing: border-box;
    }
    &:after {
        display: table;
        content: " ";
        clear: both;
    }
}
.work-list {
    margin-bottom: -50px;
}
.work {
    margin-bottom: 50px;
}
.parallax {
    background-size: cover!important;
    background-attachment: fixed!important;
    width: 100%;
    z-index: -1;
    transition: all 0.5s ease 0s;
}
.blacky:before {
    background: none repeat scroll 0 0 #000000;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.55;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
}
.work-meta span {
    color: var(--success);

}

@media (max-width: 1200px){
  .container {
      width: 1170px;
  }
}
@media (max-width: 992px) {
  .container {
      width: 970px;
  }
}
@media (max-width: 768px) {
  .container {
      width: 100%;
  }  
}
`;

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tabs: 1
        };
    }

    render() {
        // console.log(this.state.projectsArr)
        return (
            <PastExperience className = 'section bg-black z-1' id = 'experience-me'>
                <div className = 'w-100 pb5'>
                    <Container className = 'ph5 mr-auto ml-auto'>
                        <Row className = ''>
                            <Col md = '12'>
                                <h5 className="text-on-back mv4 tc" id = 'experience'> Past Experience </h5>
                            </Col>
                            <Col md = '12'>
                                <div className = "work-list fl w-100">
                                    {
                                        myExperience.map( experience => {
                                            return (
                                              <TextBox 
                                                key = {experience.id}
                                                imgSrc = {experience.imgSrc}
                                                title = {experience.title}
                                                time = {experience.time}
                                                content = {experience.content}
                                              />
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </PastExperience>
        );
    }
}

export default Experience;

