const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy
const strategy = new LocalStrategy(
    {
        emailField: 'email'
    },
    function(emailLogin, passwordLogin, done) {
        User.findOne({ emailLogin: emailLogin }, (err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect Email' })
            }
            if (!user.checkPassword(passwordLogin)) {
                return done(null, false, { message: 'Incorrect Password' })
            }
            return done(null, user)
        })
    }
)
module.exports = strategy