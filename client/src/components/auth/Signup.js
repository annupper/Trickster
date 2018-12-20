import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";

export default class Signup extends Component {
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

    this.authService.signup({username, password})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', redirect: true})
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="username" onChange={e => this.handleChange(e)} placeholder="Username"/><br/>
        <input type="password" name="password" onChange={e => this.handleChange(e)} placeholder="Password"/><br/>

        <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}