const router = require('express').Router()
const authcontroller = require('../contollers/authcontroller')

router.post('/login', authcontroller.loginController)
router.post('/signup', authcontroller.signupController)
// UvxtvWriwc1Aeqer
module.exports = router