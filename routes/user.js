const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../passport')

router.post('/signup', (req, res) => {
    res.json({
        response: "hi"
    })
    console.log('user signup');
    const { emailSignup, passwordSignup } = req.body
    // User.findOne({ emailSignup: emailSignup }, (err, user) => {
    //     if (err) {
    //         console.log('User.js post error: ', err)
    //     } else if (user) {
    //         res.json({
    //             error: 'Sorry, email address already in use: ${emailSignup}'
    //         })
    //     }
    //     else {
    //         const newUser = new User({
    //             emailSignup: emailSignup,
    //             passwordSignup: passwordSignup
    //         })
    //         newUser.save((err, savedUser) => {
    //             if (err) return res.json(err)
    //             res.json(savedUser)
    //         })
    //     }
    // })
})

router.post(
    '/signin',
    function (req, res, next) {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            emailSignup: req.user.emailSignup
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router