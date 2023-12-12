const mongoose = require('mongoose');

// reaction schema
const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max: [280]
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

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
    reactions: [reactionSchema]
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
)
  
// returns # of reactions 
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;

