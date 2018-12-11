
import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import HomeBody from "./components/homeBody/HomeBody";
import AuthService from "./components/auth/AuthService";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
    
    return (
      <div className="App">

        <Navbar user={this.state.user} logout={this.logout}/>
        <Route exact
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}/>
        <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
        <HomeBody />
      </div>
    );
  }
}

export default App;