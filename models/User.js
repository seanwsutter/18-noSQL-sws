const mongoose = require('mongoose');

// user scehma
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'username required'],
      trim: true
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'email required'],
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

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const User = mongoose.model('users', userSchema)
module.exports = User

// * Must match a valid email address (look into Mongoose's matching validation)

