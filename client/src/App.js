import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routing/Routes";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
