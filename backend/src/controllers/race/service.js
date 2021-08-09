const Car = require('../../models/race.model')

exports.create = (raceData) => {
  const race = new Race(raceData)
  return race.save()
}

exports.findAll = () => Car.find().populate()

exports.findOne = (id) => Car.findById(id).populate()

exports.update = (id, updateData) =>
  Car.findByIdAndUpdate(id, updateData, { new: true })

exports.delete = (id) => Car.findByIdAndRemove(id)
