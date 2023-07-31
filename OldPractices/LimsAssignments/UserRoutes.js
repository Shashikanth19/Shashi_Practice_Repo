const express = require('express')
const router = express.Router()

const userController = require('../LimsAssignments/UserController')

router.post('/RetrieveUserDetails',userController.retrieveRecords)
router.post('/AddRecords',userController.addRecords)

module.exports = router