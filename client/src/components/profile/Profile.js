import React, { Component } from 'react';
import "./profile.css"

export default class ShowNotes extends Component {
  render() {
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