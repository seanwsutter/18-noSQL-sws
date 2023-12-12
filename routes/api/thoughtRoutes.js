const router = require('express').Router()

// thought controller 
const {
  getAllThoughts,
  getThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require("../../controller/thoughtController.js");

// get all thoughts, create new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought)

// get thought id, delete & update thought
router.route('/:id')
  .get(getThought)
  .delete(deleteThought)
  .put(updateThought)

// add & delete reaction 
router.route('/:id/reactions')
  .post(addReaction)
  .delete(deleteReaction)

module.exports = router;

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// **`/api/thoughts/:thoughtId/reactions`**
// * `POST` to create a reaction stored in a single thought's `reactions` array field
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
