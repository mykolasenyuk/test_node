const { Item } = require('../../models')

const getAllItems = async (req, res, next) => {
  try {
    const items = await Item.find({})
    console.log(items)
    res.json({
      status: 'Success',
      code: 200,
      items,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllItems
