
import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Notes from "./components/notes/Notes";
import HomeBody from "./components/homeBody/HomeBody";
import NoteService from "./components/notes/NoteService";
import AuthService from "./components/auth/AuthService";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.noteService = new NoteService();
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
        <Switch>
        <Route exact
          path="/"
          render={() => <HomeBody />}/>
        <Route exact
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}/>
        <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
        <Route exact path="/notes" render={() => <Notes showNotes={this.showNotes}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;