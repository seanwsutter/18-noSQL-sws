const router = require('express').Router();

// user controller 
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controller/userController.js");

// get all users, create new user
router.route('/')
  .get(getAllUsers)
  .post(createUser)

// get user id, delete & update user
router.route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)

// add & delete friend from users' friends
router.route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)


module.exports = router;



// * `GET` a single user by its `_id` and populated thought and friend data
