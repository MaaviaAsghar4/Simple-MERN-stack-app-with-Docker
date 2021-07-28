// schema are kind of fields in the database

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true,
    },
    edit:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = todo = mongoose.model("todos",todoSchema)