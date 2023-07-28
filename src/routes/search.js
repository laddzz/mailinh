const express = require('express')
const router = express.Router()
const searchcontroller = require('../app/controllers/searchcontroller.js')
router.use('/:dung',searchcontroller.show)
router.use('/',searchcontroller.index)

module.exports=  router