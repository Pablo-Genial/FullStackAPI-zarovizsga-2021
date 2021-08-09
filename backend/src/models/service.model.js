// 1. Feladat: pótold a service modellt.

const mongoose = require('mongoose')

const ServiceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    since: {
      type: Number,
      default: 0,
      required: true,
    },
    street: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('service', ServiceSchema)
