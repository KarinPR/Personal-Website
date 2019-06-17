import React from "react";

import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';

const Navbar = styled.div`
  .fas , .fab, .far {
    /*font-family: 'themify';*/
    speak: none;
    font-style: normal;
    font-weight: 650;
    font-variant: normal;
    text-transform: none;
    font-size: 1.5rem;
    line-height: .5;
    padding: 1.5vh 1vw;
    -webkit-font-smoothing: antialiased;
  }
  .fa-times-circle {
    padding: 2vh 0;
  }
`;

const Menu = styled.div`
  border-bottom: 2px solid var(--success);
  word-spacing: 2px;
  letter-spacing: 1px;
  a.text-success:hover {
    color: white !important;
    opacity: .8;
  }
  .nav-all, a.nav-item {
   &:hover {
      color: var(--success);
    }
  }

  @media (max-width: 1000px) {
    li {
      margin: 1vh 0;
      padding: 2vh 0;
      display: block;
      align-content: center;
      border-bottom: 2px solid var(--success);
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
`;


class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "bg-dark",
      tabColor1 : '',
      tabColor2 : '',
      tabColor3 : '',
      tabColor4 : '',
      tabColor5 : '',
      defaultExpanded: true, 
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollChange);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.onScrollChange);
  }

  onScrollChange = () => {
    let scroll = window.scrollY;
    let width = window.outerWidth;

    if (width > 1500) {
      if (scroll >= 0 && scroll < 900) {
        this.setState ({ 
          tabColor1 : '',
          tabColor2 : '',
          tabColor3 : '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 900 && scroll < 2000) {
        this.setState({ 
          tabColor1: 'text-success' ,
          tabColor2 : '',
          tabColor3 : '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 2000 && scroll < 3500) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: 'text-success' , 
          tabColor3: '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 3500 && scroll < 4650) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: 'text-success' , 
          tabColor4: '',
          tabColor5 : '',
        })
      } else if (scroll >= 4650 && scroll < 6100) {
        this.setState({
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: '' , 
          tabColor4: 'text-success' , 
          tabColor5: ''
        })
      } else if (scroll >= 6100) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: '' , 
          tabColor4: '' , 
          tabColor5: 'text-success' 
        })
      }  
    }

    if (width < 1550) {
      if (scroll >= 0 && scroll < 800) {
        this.setState ({ 
          tabColor1 : '',
          tabColor2 : '',
          tabColor3 : '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 800 && scroll < 1441) {
        this.setState({ 
          tabColor1: 'text-success' ,
          tabColor2 : '',
          tabColor3 : '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 1441 && scroll < 2513) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: 'text-success' , 
          tabColor3: '',
          tabColor4 : '',
          tabColor5 : '',
        })
      } else if (scroll >= 2513 && scroll < 3809) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: 'text-success' , 
          tabColor4: '',
          tabColor5 : '',
        })
      } else if (scroll >= 3809 && scroll < 5109) {
        this.setState({
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: '' , 
          tabColor4: 'text-success' , 
          tabColor5: ''
        })
      } else if (scroll >= 5109) {
        this.setState({ 
          tabColor1: '' , 
          tabColor2: '' , 
          tabColor3: '' , 
          tabColor4: '' , 
          tabColor5: 'text-success' 
        })
      }  
    }
  }


  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };


  render() {
    return (
      <>
        <Navbar className={"navDiv fixed-top " + this.state.color} color-on-scroll="100">
          <ResponsiveMenu
            menuOpenButton={<i className = "fas fa-bars" ></i> }
            menuCloseButton={<i class="fas fa-times-circle"></i> }
            changeMenuOn="1000px"
            largeMenuClassName="large-menu mw-100"
            smallMenuClassName="small-menu mw-100"
            menu = {
              <Menu className = 'flex justify-start content-center pv1 flex-m flex-column-m '>
                <a data-placement="center"  rel="noopener noreferrer" className = 'text-success f3 self-center center mv2 pa2 fw9 h3-m f4-ns mh1-ns' href = '#top'>  Karin Povolozki-Rabichev  </a>
                <ul className = 'navItems pv2 mv2 mr6 f4 pt-1-m center-m f5-ns mv0-ns mr1-ns '>
                  <li className = {'nav-all di mh4 white ' + this.state.tabColor1}>
                    <i className="far fa-address-card display-none" ></i>
                      <a  id = 'nav-item-1' className = {'nav-item di fw9 white o-90 list pt2 '+ this.state.tabColor1} href = '#about-me' onClick = {this.onClickActive} > About Me </a>
                  </li>
                  <li className = {'nav-all di mh4 white ' + this.state.tabColor2}>                  
                    <i className="fas fa-chess display-none"></i>
                      <a className = {'nav-item di fw9 white o-90 list pt2 '+ this.state.tabColor2}  href = '#skills-me'> My Skills </a>      
                  </li>
                  <li className = {'nav-all di mh4 white ' + this.state.tabColor3}>
                    <i className="fas fa-gamepad display-none"></i>
                    <a className = {'nav-item di fw9 white o-90 list pt2 '+ this.state.tabColor3} href = '#projects-me'> My Projects </a>   
                  </li>
                  <li className = {'nav-all di mh4 white ' + this.state.tabColor4}>
                    <i className="fas fa-user-secret display-none"></i>
                    <a className = {'nav-item di fw9 white o-90 list pt2 '+ this.state.tabColor4} href = '#experience-me'> My Past Experience </a>  
                    
                  </li>
                  <li className = {'nav-all di mh4 white ' + this.state.tabColor5}>
                    <i className="fas fa-phone-volume display-none"></i>
                    <a className = {'nav-item di fw9 white o-90 list pt2 '+ this.state.tabColor5} href = '#contact-me'> Contact Me </a>  
                     
                  </li>
                </ul>
              </Menu>
            }
          />
        </Navbar>
      </>
    );
  }
}

export default PagesNavbar;

