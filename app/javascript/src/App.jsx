import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import NavBar from "components/NavBar";
import { registerIntercepts } from "apis/axios";
import { ToastContainer } from "react-toastify";

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
      </Switch>
    </Router>
  );
};

export default App;
