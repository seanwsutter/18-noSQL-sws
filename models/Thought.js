const mongoose = require('mongoose');

// thought schema
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: [1],
      max: [280]
    },

    createdAt: {
      type: Date,
      default: Date.now
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    reactions: []
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
)

const reactionSchema = new mongoose.Schema(
  {

  }
)

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.