
import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Notes from "./components/notes/Notes";
import Profile from "./components/profile/Profile";
import CreateNote from "./components/notes/CreateNote";
import EditNote from "./components/notes/EditNote";
import HomeBody from "./components/homeBody/HomeBody";
import HomeInfo from "./components/homeBody/HomeInfo";
import NoteService from "./components/notes/NoteService";
import AuthService from "./components/auth/AuthService";
import { Route, Switch } from "react-router-dom";
import NoteDetail from "./components/notes/NoteDetail";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      redirect: false
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
      .then(() => this.setState({ ...this.state, user: null, redirect: true }));
  };

  render() {
  
    if(this.state && this.state.redirect) {
      return <App />
    }
    
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
          <Route exact path="/faq" render={() => <HomeInfo />} />
        <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
        <Route exact path="/notes" render={() => <Notes showNotes={this.showNotes}/>} />
        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
        <Route exact path="/note/createnote" render={() => <CreateNote />} />
        <Route path="/edit/:id" render={(match) => <EditNote user={this.state.user}{...match}/>} />
        <Route exact path="/notes/:id"  render={(match)=> (<React.Fragment>
        <Notes showNotes={this.showNotes} /> 
          <NoteDetail user={this.state.user} {...match}/>
        </React.Fragment>)} />
        </Switch>
      </div>
    );
  }
}

export default App;