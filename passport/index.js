const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/User')

passport.serializeUser((user, done) => {
    console.log(user)
    done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
    User.findOne(
        { _id: id },
        'email', 
        (err, user) => {
            console.log(user)
            done(null, user)
        }
    )
})

passport.use(LocalStrategy)

module.exports = passport