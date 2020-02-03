import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Lists from "./components/Lists";
import Background from "./components/Background";
import NavBar from "./components/common/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import "./sass/app.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Background />
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/Lists" />
          <Redirect to="/not-found" />
        </Switch>
        <main className="container">
          <Lists />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
