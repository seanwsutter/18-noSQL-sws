
const { Thought } = require('../models')

module.exports = {
  // create thought
  async createThought(req, res) {
    try {
      const payload = await Thought
        .create(req.body);

      res.json({ status: 'createThought success', payload })
    } catch (err) {
      res.status(500).json({ status: 'createThought error', payload: err.message })
    }
  },

  // get all users
  async getAllThoughts(req, res) {
    try {
      const payload = await Thought
        .find()
        .select('-__v');

      res.json({ status: 'getAllThoughts success', payload })
    } catch (err) {
      res.status(500).json({ status: 'getAllThoughts error', payload: err.message })
    }
  },

  // get thought
  async getThought(req, res) {
    try {
      const payload = await Thought
        .findOne({ _id: req.params.id })
        .select('-__v');

      res.json({ status: 'getThought success', payload })
    } catch (err) {
      res.status(500).json({ status: 'getThought error', payload: err.message })
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      const payload = await Thought
        .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });

      res.json({ status: 'updateThought success', payload })
    } catch (err) {
      res.status(500).json({ status: 'updateThought error', payload: err.message })
    }
  },

  // delete thought
  async deleteThought(req, res) {
    try {
      const payload = await Thought
        .findOneAndDelete({ _id: req.params.id })

      res.json({ status: 'deleteThought success', payload })
    } catch (err) {
      res.status(500).json({ status: 'deleteThought error', payload: err.message })
    }
  },

  // add reaction 
  async addReaction(req, res) {
    try {
      const reaction = await Thought
        .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { reactions: req.body } })

      res.json({ status: 'addReaction success', reaction })
    } catch (err) {
      res.status(500).json({ status: 'addFriend error', reaction: err.message })
    }
  },

  // delete reaction from thought
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought
        .findOneAndUpdate({ _id: req.params.id }, { $pull: { reaction: { _id: req.body.reactionId } } })

      res.json({ status: 'deleteReaction success', reaction })
    } catch (err) {
      res.status(500).json({ status: 'deleteReaction error', reaction: err.message })
    }
  },




}
