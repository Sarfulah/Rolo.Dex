const express = require("express");
// const db = require('./models');
// const passport = require('./passport');
const user = require('./routes/user');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use('/user', user);

//Sessions

app.use(session
  ({
  secret: 'fraggle-rock', 
  resave: false,
  saveUninitialized: false
})
);

app.use( (req, res, next) => {
  console.log('req.session', req.session);

  next();
});

app.post('/user', (req, res) => {
  console.log('user signup');
  req.session.email = req.body.email;
  res.end()
})

//Passport

app.use(passport.initialize())

app.use(passport.session())

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});