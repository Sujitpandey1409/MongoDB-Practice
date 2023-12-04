const router = require('express').Router()
const authroutes = require('./auth')

router.use('/auth',authroutes)

module.exports = router