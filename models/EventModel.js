const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    subtasks: {
        type: Array,
        required: false
    }
},{timestamps:true} //keeps track of created at and updated date times
);

module.exports = mongoose.model("EventModel",EventSchema);