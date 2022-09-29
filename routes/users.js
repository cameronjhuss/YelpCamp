const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utilities/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const user = require('../models/user');

router.route('/register')
    .get(users.renderRegisterForm)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLoginForm)
    .post(passport.authenticate('local', {
        failureFlash: true,
        failureRedirect: '/login',
        failureMessage: true,
        keepSessionInfo: true,
    }), users.login);

router.get('/logout', users.logout)

module.exports = router;