import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./profile.css";

export default class ShowNotes extends Component {

  render() {
    if(!this.props.user) {
      return <Redirect to="/" />
    }
    return (
      <div className="profile">
        <div className="userNamePhoto">
          <img src={this.props.user.imgPath} alt="" />
          <p>{this.props.user.username}</p>
        </div>
      </div>
    )
  }
}