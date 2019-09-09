const express = require("express");
const db = require('./models');
const bodyParser = require("body-parser");
const session = require('express-session')
const path = require("path");
const dbConnection = require("./database");
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const db = require('./models');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}

app.use(routes);
//Sessions
// const mongoose = require('mongoose')
// mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/rolodex"), {useNewUrlParser: true});
app.use(session
 ({
   secret: 'fraggle-rock',
   store: new MongoStore({ mongooseConnection: dbConnection }),
   resave: false,
   saveUninitialized: false
 })
);
// Passport
app.use(passport.initialize())
app.use(passport.session())
// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   next();
// });
app.post('/user', (req, res) => {
 console.log('user signup');
 req.session.email = req.body.email;
 res.end()
})
app.use('/user', user);
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
console.log("Server.js is running");
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

