const express = require('express')
const router = express.Router()
const youtubecontroller = require('../app/controllers/youtubecontroller')
router.use('/:chanel',youtubecontroller.show)
router.use('/', youtubecontroller.index)

module.exports = router