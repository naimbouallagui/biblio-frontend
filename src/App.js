import React from "react";
import Register from "./containers/register";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./containers/dashboard";
import Login from "./containers/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/home";
import Users from "./components/users";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <div className="sb-nav-fixed">
              <Login />
            </div>
          </Route>
          <Dashboard>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Dashboard>
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};
export default App;
