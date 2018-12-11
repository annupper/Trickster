import React from 'react';
import "./navbar.css"
import { Link, Route,withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const navbar = this.props.user ? (
      <div>
        <p>Hola {this.props.user.username}</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <button onClick={this.props.logout}>Logout</button>
          </li>
        </ul>
      </div>
    ) : (
      <ul>
      <li>
        <Link to="/">Home</Link>
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
    
      <div>
        {navbar}
      </div>
 
    )
  }
};

export default Navbar;