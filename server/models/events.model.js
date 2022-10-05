// const mongoose = require('mongoose');

// const EventsSchema = new mongoose.Schema({
//     startDate: {
//         type: Date,
//         required: [
//             true,
//             'Start date is required'
//         ],
//     },
//     title: {
//         type: String,
//         required: [
//             true,
//             'Title is required'
//         ],
//     },
//     description: {
//         type: Number, 
//         required: [
//             true,
//             'Description is required'
//         ],
//     },
//     hostDoctorName: {
//         type: String,
//         required: [
//             true,
//             'Host Doctor name is required'
//         ],
//     },
//     duration: {
//         type: String,
//         required: [
//             true,
//             'Duration is required'
//         ],
//     }
// }, { timestamps: true });
// module.exports.Events = mongoose.model('Events', EventsSchema);