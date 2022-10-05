// const { Events } = require('../models/events.model');
// module.exports.getEvents = (request, response) => {
//     Events.find().sort({"name" : 1})
//         .then(events => response.json(events))
//         .catch(err => response.json(err))
// }
// // The method below is new
// module.exports.createEvents = (request, response) => {
//     const { name, image, chests, catchPhrase, position, checked, checked2, checked3 } = request.body;
//     Events.create({
//         startDate,
//         title,
//         description,
//         hostDoctorName,
//         duration
//     })
//         .then(events => response.json(events))
//         .catch(err => response.status(400).json(err))
// }

// module.exports.getOneEvents = (request, response) => {
//     Events.findOne({ _id: request.params.id })
//         .then(events => response.json(events))
//         .catch(err => response.json(err))
// }

// module.exports.updateEvents = (request, response) => {
//     Events.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators : true })
//         .then(updatedEvents => response.json(updatedEvents))
//         .catch(err => response.status(400).json(err))
// }

// module.exports.deleteEvents = (request, response) => {
//     Events.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }