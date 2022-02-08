const express = require('express')
const { items: ctrl } = require('../../controllers')
const { validation } = require('../../middlewares')
const { joiSchema } = require('../../models/items/items')

const router = express.Router()
const itemsValidation = validation(joiSchema)

router.get('/', ctrl.getAllItems)
router.post('/', itemsValidation, ctrl.addItem)
router.delete('/:itemId', ctrl.dltItem)
router.get('/:itemId', ctrl.getItemById)
router.put('/:itemId', itemsValidation, ctrl.updItemById)

module.exports = router
