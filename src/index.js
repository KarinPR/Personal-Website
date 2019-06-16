import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/css/blk-design-system-react.css";
import "assets/demo/demo.css";

import App from "views/App.jsx";
import PageHeader from 'components/PageHeader/PageHeader.jsx';

// import LandingPage from "views/examples/LandingPage.jsx";
// import RegisterPage from "views/examples/RegisterPage.jsx";
// import ProfilePage from "views/examples/ProfilePage.jsx";
import 'tachyons';
import './index.css'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"  render={props => <App {...props} />} />
     {/*} 
      {/*<Route
        path="/page-header"
        component = {PageHeader}
        // render={props => <PageHeader {...props} />}
      />
      }<Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />*/}
      <Redirect from="/" to="/page-header" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
