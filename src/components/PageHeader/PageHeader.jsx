import React from "react";
import ResumeButton from '../ResumeButton/ResumeButton';

// reactstrap components
import { Container } from "reactstrap";
import './PageHeader.css'
import HeaderImage from '../../assets/img/Header/header-background.jpg'

import Styled from 'styled-components';

const HeaderStyle = Styled.div`
  overflow: visible;
  word-spacing: 2px;
  letter-spacing: 1px;
  line-height: 26px;
  height: 100vh;
  // overflow: visible;
  text-overflow: clip
  z-index: 0;
  .index-page:before {
    z-index: 0;
  }
  .image {
    background: url(${HeaderImage}) no-repeat 0 0 / 100% 100% #000 !important;
    background-size: cover!important;
    background-attachment: fixed!important;
    height: 100vh;
  &:before {
      box-sizing: border-box;
      background: none repeat scroll 0 0 #000000;
      content: "";
      left: 0;
      height: 100%;
      opacity: 0.4;
      position: absolute;
      top: 0;
      width: 100%;
      z-index:1;
    }
  }
  h1, h2, .btn {
    z-index: 4;
  }
}

`;

class PageHeader extends React.Component {

  render() {
    return (

      <HeaderStyle className="section w-100 h-100 pv4 bg-black pv2-m" id = 'top'>
        <div className = "image w-100 min-h-100-m ">
          <Container className="mr-auto ml-auto pv6">

            <div className="  content-center custom-div tc ">
              <img
                alt="..."
                className="img-center img-fluid rounded-circle ba bw3 br-100 w5 w4-m o-100"
                src={require("assets/img/mike.jpg")}
              />
              <h1 className="w-100 fw9 mb3 f1-l"> Karin Povolozki-Rabichev </h1> 
              <h2>  <span className = 'custom-span text-success f2-l fw9 f7-m f7-ns'> Front-End Developer </span> </h2>
              <ResumeButton id = 'header-button z-100' className = 'z-100'/>         
            </div>
          </Container>
        </div>
      </HeaderStyle>
    );
  }
}

export default PageHeader;
