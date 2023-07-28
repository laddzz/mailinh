const express = require('express')
const router = express.Router()
const facebookcontroller = require('../app/controllers/facebookcontroller.js')

router.use('/dangnhap',facebookcontroller.dangnhap)


module.exports = router