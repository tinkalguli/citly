import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import { registerIntercepts } from "apis/axios";

import Dashboard from "components/Dashboard";
import NavBar from "components/NavBar";
import NoMatch from "components/Common/NoMatch";
import Redirect from "components/Redirect";

const App = () => {
  useEffect(() => {
    initializeLogger();
    registerIntercepts();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:slug" component={Redirect} />
        <Route exact path={["/no/match", "*"]} component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
