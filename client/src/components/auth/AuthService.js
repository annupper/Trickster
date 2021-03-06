
import axios from "axios";
require('dotenv').config();

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    })
  }

  signup = (user) => {
    // axios.post("http://localhost:5000/api/auth/signup", {user}, {withCredentials: true})
    return this.service.post('/signup', user)
    .then(response => response.data)
  }

  login = (user) => {
    // axios.post("http://localhost:5000/api/auth/login", {user}, {withCredentials: true})
    return this.service.post('/login', user)
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data);
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data);
  }
}

export default AuthService;