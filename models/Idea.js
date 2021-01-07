const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require("./User");

const tags = [];

const IdeaSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Describe your idea!",
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: user,
    },
  ],
  comments: [
    {
      text: String,
      postedBy: { type: Schema.Types.ObjectId, ref: user },
    },
  ],
  tags: {
    type: [String],
    default: undefined,
    enum: tags,
  },
});

ideaSchema = mongoose.model("IdeaSchema", IdeaSchema);

module.exports = ideaSchema;
