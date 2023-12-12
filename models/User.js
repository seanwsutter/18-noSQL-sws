const mongoose = require('mongoose');

// user scehma
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }],

    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

// returns # of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})


const User = mongoose.model('users', userSchema)
module.exports = User


