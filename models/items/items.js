const { Schema, model } = require('mongoose')
const Joi = require('joi')
const { boolean } = require('joi')

const itemSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: false },
)

const joiSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  features: Joi.string(),
})

const Item = model('item', itemSchema)

module.exports = {
  Item,
  joiSchema,
}
