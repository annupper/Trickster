import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    const navbar = this.props.user ? (
      <ul>
      <li>
        <Link to="/">ENOT</Link>
      </li>
      <li>
        <Link to="/">FAQ</Link>
      </li>
      <li>
        <Link to="/notes">Notes</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <p onClick={this.props.logout}>Logout</p>
      </li>
    </ul>
    ) : (
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">FAQ</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    );

    return (
    
      <div className="navbarStyle">
        {navbar}
        <hr/>
      </div>
 
    )
  }
};

export default Navbar;