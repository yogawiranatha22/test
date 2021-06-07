const express = require('express')
const controller = require('../controller/data.controller')

const router = express.Router()

router.post('/data',controller.create)
router.get('/getData',controller.getData)
router.get('/data/:id',controller.findDataId)
router.put('/data/:id',controller.update)
router.delete('/data/:id',controller.delete)

router.get('/ubahPass/:id',controller.updatePass)

module.exports = router
