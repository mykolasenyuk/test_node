const { Item } = require('../../models')
const { Conflict } = require('http-errors')

const addItem = async (req, res, next) => {
  try {
    const { name } = req.body

    const category = await Item.findOne({ name })
    if (category) {
      throw new Conflict(`Item already in list`)
    }

    const newItem = { ...req.body }
    const result = await Item.create(newItem)
    res.status(201).json({
      status: 'sucess',
      code: 201,
      message: `✔️ Item '${req.body.name}' added`,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = addItem
