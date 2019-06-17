import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/css/blk-design-system-react.css";
import "assets/demo/demo.css";

import App from "./Containers/App.jsx";

import 'tachyons';
import './index.css'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"  render={props => <App {...props} />} />
      <Redirect from="/" to="/page-header" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
