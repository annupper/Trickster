import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  render() {

    const responsiveNav = this.props.user ? (
      <div className="nav-links">
        <Link to="/faq">FAQ</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/profile">Profile</Link>
        <div className="navLink" onClick={this.props.logout}>Logout</div>
      </div>
    ) : (
        <div className="nav-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )
      
    return (

      <div className="navbarStyle">
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">
              <Link to="/">ENOT</Link>
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="nav-check" />
          {responsiveNav}
        </div>
      </div>

    )
  }
};

export default Navbar;