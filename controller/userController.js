
const { User } = require('../models')

module.exports = {
  // create user
  async createUser(req, res) {
    try {
      const payload = await User
        .create(req.body);

      res.json(payload)
    } catch (err) {
      res.status(500).json({ status: 'error', payload: err.message })
    }
  },


  // get all user
  async getAllUser(req, res) {
    try {
      const payload = await User
        .find()
        .select('-__v');

      res.json({ status: 'success', payload })
    } catch (err) {
      res.status(500).json({ status: 'error', payload: err.message })
    }
  },

}

// get single user
// async getSingleUser(req, res) {
// try {
//   const payload = await User
//     .findOne({ _id: req.params.id })
// }
// }


// get all users
// get single user

// create a user

// update user

// delete user

// add friend to user
// delete friend from user
