const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('./User');
const project = require('./Project');

const roles = ['admin', 'member'];

const memberSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: user
    },
    role: {
        type: String,
        default: 'member',
        enum: roles
    }
});

const TeamSchema = new Schema({
    teamname: {
        type: String,
        required: true
    },
    members: {
        type: [ memberSchema ],
        default: {}
    },
    projectid: {
        type: Schema.Types.ObjectId,
        ref: project
    },
    creationdate: {
        type: Date,
        default: Date.now()
    }
});

teamSchema = mongoose.model('TeamSchema', TeamSchema);

module.exports = teamSchema;