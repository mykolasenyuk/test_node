const { Item } = require('../../models')

const updById = async (req, res, next) => {
  try {
    const { itemId } = req.params

    const item = { itemId }

    const result = await Item.findByIdAndUpdate(item.itemId, req.body, {
      new: true,
    })
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: ` Item with ID=${item.itemId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: ' Item updated',
      result,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updById
