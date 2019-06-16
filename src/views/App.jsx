import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Navbar from "components/Navbars/Navbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import About from 'components/About/About';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';
import Experience from 'components/Experience/Experience';
import Contact from 'components/Contact/Contact';
import Footer from "components/Footer/Footer.jsx";

class App extends React.Component {

  componentDidMount() {
    // document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    // document.body.classList.toggle("index-page");
  }


  render() {
    return (
      <>
      <Navbar />
        <div className="wrapper">
          <div className="main">
            <PageHeader />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
