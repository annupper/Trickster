import React, { Component } from 'react';
import AuthService from './AuthService';
import {Link, withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import "./auth.css"

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      redirect: false
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.login({username, password})
    .then(user => {
      this.props.getUser(user);
      this.setState({...this.state, redirect: true})
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/notes" />
    }

    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" onChange={e => this.handleChange(e)} placeholder="Username"/><br/>
          <input type="password" name="password" onChange={e => this.handleChange(e)} placeholder="Password"/><br/>

          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}