const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;
const user = require("./User");

const skills = [];
const tags = [];

const ProjectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  skills: {
    type: [String],
    default: undefined,
    enum: skills,
  },
  components: {
    type: [String],
    default: undefined,
  },
  status: {
    type: String,
    default: "incomplete",
  },
  tags: {
    type: [String],
    default: undefined,
    enum: tags,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      default: undefined,
      ref: user,
    },
  ],
  comments: [
    {
      text: String,
      postedBy: { type: Schema.Types.ObjectId, ref: user },
    },
  ],
  images: [Object],
  videos: [Object],
  files: [Object]
});

projectSchema = mongoose.model("ProjectSchema", ProjectSchema);

module.exports = projectSchema;
