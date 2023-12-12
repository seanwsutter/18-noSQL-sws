
const { User } = require('../models')

module.exports = {
  // create user
  async createUser(req, res) {
    try {
      const payload = await User
        .create(req.body);

      res.json({ status: 'createUser success', payload })
    } catch (err) {
      res.status(500).json({ status: 'createUser error', payload: err.message })
    }
  },

  // get all users
  async getAllUsers(req, res) {
    try {
      const payload = await User
        .find()
        .select('-__v');

      res.json({ status: 'getAllUsers success', payload })
    } catch (err) {
      res.status(500).json({ status: 'getAllUsers error', payload: err.message })
    }
  },

  // get user
  async getUser(req, res) {
    try {
      const payload = await User
        .findOne({ _id: req.params.id })
        .select('-__v')
        .populate({ path: 'thoughts' })


      res.json({ status: 'getUser success', payload })
    } catch (err) {
      res.status(500).json({ status: 'getUser error', payload: err.message })
    }
  },

  // update user
  async updateUser(req, res) {
    try {
      const payload = await User
        .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });

      res.json({ status: 'updateUser success', payload })
    } catch (err) {
      res.status(500).json({ status: 'updateUser error', payload: err.message })
    }
  },

  // update user
  async deleteUser(req, res) {
    try {
      const payload = await User
        .findOneAndDelete({ _id: req.params.id })

      res.json({ status: 'deleteUser success', payload })
    } catch (err) {
      res.status(500).json({ status: 'deleteUser error', payload: err.message })
    }
  },

  // add friend
  async addFriend(req, res) {
    try {
      const friend = await User
        .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } })

      res.json({ status: 'addFriend success', friend })
    } catch (err) {
      res.status(500).json({ status: 'addFriend error', friend: err.message })
    }
  },

  // add friend
  async deleteFriend(req, res) {
    try {
      const friend = await User
        .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } })

      res.json({ status: 'deleteFriend success', friend })
    } catch (err) {
      res.status(500).json({ status: 'deleteFriend error', friend: err.message })
    }
  },




}






// add friend to user
// delete friend from user
