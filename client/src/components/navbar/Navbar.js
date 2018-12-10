import React from 'react';
import { Link, Route,withRouter } from 'react-router-dom'
import Signup from "../auth/Signup";
import Login from "../auth/Login";

class Navbar extends React.Component {

  render() {
    return (
    
      <div>
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
        <hr/>
        <Route
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}/>
        <Route path="/login" render={() => <Login getUser={this.getUser} />} />

      </div>
 
    )
  }
};

//Navbar = withRouter(Navbar);
export default Navbar;