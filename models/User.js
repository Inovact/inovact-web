const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginTypes = ['native', 'google', 'facebook'];

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  profilePic: {
    type: String,
    default:"https://res.cloudinary.com/charcha/image/upload/v1595007449/default-profile_nyowju.jpg"
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  googleID: {
    type: String,
    default: "1",
  },
  externalType: {
    type: String,
    default: "native",
    enum: loginTypes
  },
  followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
  following: [{ type: Schema.Types.ObjectId, ref: "users" }],
  interests: [String]
});

module.exports = User = mongoose.model("users", UserSchema);
