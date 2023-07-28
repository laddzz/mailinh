const express = require('express')
const router = express.Router()
const sitecontroller = require('../app/controllers/sitecontroller.js')

router.use('/',sitecontroller.index)
module.exports=  router