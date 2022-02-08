const { Item } = require('../../models')

const dltItem = async (req, res, next) => {
  try {
    const { itemId } = req.params

    const item = {itemId}

    const result = await Item.findByIdAndDelete(item.itemId)
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
      message: ' ✔️ Item deleted',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = dltItem
