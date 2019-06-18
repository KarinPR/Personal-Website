import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// import GoogleMap from './ContactGoogleMap';
import ContactImage from '../../assets/img/Contact/contact-background.jpg'

import Styled from 'styled-components';

const ContactStyle = Styled.div`
	word-spacing: 2px;
	letter-spacing: 1px;
  .back-image{
    background: url(${ContactImage}) no-repeat 0 0 / 100% 100% #000;
    background-size: cover!important;
    background-attachment: fixed!important;
    width: 100%;
    z-index: 0;
    transition: all 0.5s ease 0s;
    height: calc(150vh + 100%);
    // max-height: 999px;
    padding: 0;
    color:var(--success);
    position: relative;
    overflow: hidden;
        
    &:before {
      box-sizing: border-box;
        background: none repeat scroll 0 0 #000000;
        content: "";
        height: 100%;
        left: 0;
        opacity: 0.4;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }
  }
	.fas , .fab, .far {
		align-items: center;
	    /*font-family: 'themify';*/
	    speak: none;
	    font-style: normal;
	    font-weight: 650;
	    font-variant: normal;
	    text-transform: none;
	    font-size: 1.5rem;
	    line-height: .5;
	    -webkit-font-smoothing: antialiased;
	}
	.fa-share-square {
		font-size: 1rem;
		margin-right: .5vw;
	}
	.form-group {
		border:  2px solid var(--success);
		border-radius: 0.4285rem;
		margin-bottom: 4vh;
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		} 
	}
	.form-control {
		font-size: 1rem;
		border-color: transparent;
	}
	.input-group{
		z-index: 4;
    color: var(--success);
		&:hover {
			background: rgba(255, 255, 255, 0.9);
    }
	}
	.input-group-prepend {
		background: var(--success);
		color: rgba(255, 255, 255, 0.7);
		border: 1px solid var(--success);
	    border-radius: 5px;
	    z-index: 1;
		&:hover {
			border-color: rgba(255, 255, 255, 0.7);
			background: rgba(255, 255, 255, 0.6);

		}
	}
  .input-group > .form-control {
    color: var(--success);
    word-spacing: 3px;
    letter-spacing: 1.5px;
    font-weight:900;
    &:focus {
      color: rgba(0, 0, 0, 0.8);
    }
  }
	.input-group-text{
		color: black;
		border: transparent;
	}
	.btn {
		z-index: 100;
    font-weight: 900;
    font-size: 1rem;
		border-radius: 0.4285rem;
		word-spacing: 2px;
		letter-spacing: 1px;
	}
	input::placeholder {
		color: white;
		opacity: 0.5;
	}
	// input:focus {
	// 		color:var(--darker);
	// }
  .map-style{
    // display: flex;
    z-index: 2;
    width: 100vw;

    &:after {
      display: table;
      background-color: black;
      content: " ";
      clear: both;
    }
  }
  @media (max-width: 1024px) {
    .back-image{
      // min-height: 220vh;
    }
    .card-plain {
      margin-top: 10vh;
      margin-left: 0;
      padding-left: 5vw;
    }
  }
`;

class Contact extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      myEmail: 'vk4ursrvs@gmail.com',
      email: '',
      massege: '',
      name: '',
      subject: ''
    }
  }

	componentDidMount() {
	}

  onMassegeChange = (event) => {
    this.setState({massege: event.target.value})
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onSubjectChange = (event) => {
    this.setState({subject: event.target.value})
  }
  onEmailSend = (event) => {
    window.location.href = `mailto:${this.state.myEmail}?subject=${this.state.subject} from ${this.state.name}&body=${this.state.massege}`;
    this.setState({
      email: '',
      massege: '',
      name: '',
      subject: ''
    })
  }

	render(){
		return(
      <ContactStyle className=" section bg-black z-1 " id = 'contact-me'>
        <div className = 'w-100 pa0'>
          <div className = 'back-image center-m'>
            <Row className = 'contact-form map box justify-around '>    	
              <Col lg = '8' md="12" sm = '12'>
                <Card className="card-plain mv3 pv3 mv0-m pv1-m" style = {{marginTop: '2.4vh'}}>
                  <CardHeader>
                    <h5 className="text-on-back tc mt3" id = 'contact' >Contact me</h5>
                  </CardHeader>
                  <CardBody className = 'bg-black-80 mt3 w-100 h-100 br4 pv3 pv2-ns'>
                    <Form className = 'pv3 ph2 w-100 vh-50 br4'>
                      <Row lg='12' >
                        <Col md="6">
                          <FormGroup >
                            <div className="input-group mb-0" style = {{height: '3rem'}}>
            									<div className = 'input-group-prepend'>
            										<div className ="input-group-text mr-4 br black"> <i className="far fa-user-circle"></i> </div>
            									</div>
            									<Input placeholder = "Full Name" type="text" className = 'self-center' value = {this.state.name} onChange = {this.onNameChange}/>
            								</div>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup >
                                  {/*<label></label>*/}
                            <div className="input-group mb-0" style = {{height: '3rem'}}>
            									<div className = 'input-group-prepend '>
            										<div className="input-group-text mr-4 br black "> <i className="far fa-envelope"></i> </div>
            									</div>
            									<Input placeholder = "email @ example.com" type="email" className = 'self-center' value = {this.state.email} onChange = {this.onEmailChange}/>
            								</div>
                          </FormGroup>                          	
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup >
                                  {/*<label></label>*/}
                            <div className="input-group mb-0 " style = {{height: '3rem'}} >
            									<div className = 'input-group-prepend'>
            										<div className="input-group-text mr-4 br black"> <i className="far fa-comment"></i> </div>
            									</div>
            									<Input placeholder = "Your Subject" type="text" className = 'self-center' value = {this.state.subject} onChange = {this.onSubjectChange}/>
            								</div>
                          </FormGroup> 
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup >
                            <div className="input-group mb-0 h4">
            									<div className = 'input-group-prepend'>
            										<div className="input-group-text mr-4 br black"> <i className="far fa-sticky-note"></i> </div>
            									</div>
            									<Input placeholder = "Leave a message" type = "text" className = 'self-center' value = {this.state.massege} onChange = {this.onMassegeChange}/>
            								</div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right w-100 mt2"
                        color="success"
                        data-placement="center"
                        id="tooltip341148792"
                        type="button"
                        onClick = {this.onEmailSend}
                      >
                      	<i className = "fas fa-share-square"></i>
                          Send message 
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
             {/*} <Col lg = '4' md = '4' sm = '12' className = 'map-style self-center'>
                <div className = 'mb5-ns' style = {{marginTop: 'calc(50% - 1.5vh)'}}>
                  <GoogleMap />
                </div>
              </Col>*/}
            </Row>
          </div>
        </div>
      </ContactStyle>
		);
	}
}

export default Contact;
