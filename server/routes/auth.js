const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;




router.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(500).json({message: "Error login"}) }
    if (!user) { return res.status(500).json({message: "Error login"}) }

    req.logIn(user, function(err) {
      if (err) { return res.status(500).json({message: "Error login"}) }
      return res.status(200).json(user);
    });
  })(req, res, next);
});


router.post("/signup", (req, res, next) => {

  const {username, password} = req.body;

  if (!username || !password) {
    res.status(500).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: 'Username taken. Choose another one.' });
            return;
    }

    if(err){
      res.status(500).json({message: "Username check went bad."});
      return;
  }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save(err => {
      if (err) {
          res.status(400).json({ message: 'Saving user to database went wrong.' });
          return;
      }
      
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(newUser, (err) => {

          if (err) {
              res.status(500).json({ message: 'Login after signup went bad.' });
              return;
          }
          // Send the user's information to the frontend
          // We can use also: res.status(200).json(req.user);
          res.status(200).json(newUser);
      });
  });

  
  
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({message: "Logout"});
});

router.get('/loggedin', (req, res) => {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(403).json({message: "Unauthorized"});
  }
})

module.exports = router;
