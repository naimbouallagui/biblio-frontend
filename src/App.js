import React from "react";
import AddUser from "./containers/users/add";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard";
import Login from "./containers/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/books";
import Users from "./containers/users";
import EditBook from "./containers/books/edit";
import Books from "./containers/books/lists";
import Details from "./containers/books/details";
import DetailsUser from "./containers/users/detailsuser";

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
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/book/details/:id">
            <Details />
          </Route>
          <Dashboard>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route exact path="/admin/user">
              <Users />
            </Route>
            <Route exact path="/admin/user/add">
              <AddUser />
            </Route>
            <Route exact path="/admin/book/edit/:id">
              <EditBook />
            </Route>
            <Route exact path="/user/details/:id">
              <DetailsUser />
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
