const mongoose = require("mongoose");
const Schema = mongoose.Schema
const User = require("./User");
const Project = require("./Project");

const tokenSchema = new Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: User },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: Project},
    token: { type: String, required: true },
    expired: {type: Boolean, default: false },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
})

module.exports = token = mongoose.model("tokens", tokenSchema);
