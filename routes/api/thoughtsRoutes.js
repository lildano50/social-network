const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  deleteReaction,
  addReaction
  } = require('../../controllers/thoughtsController.js');
// const { getSingleUser } = require('../../controllers/userController.js');

//Get all thoughts
router.route('/').get(getThoughts);

//Get a single thought by ID
router.route('/:thoughtId').get(getSingleThought);

// //Create a thought and push associated thought to user's thoughts array field
// router.route('/:userId/thoughts').get(getSingleUser).post(createThought);

//Update a single thought by ID
router.route('/:thoughtId/update').get(getSingleThought).put(updateThought);

//Delete a single thought by ID
router.route('/:thoughtId').delete(deleteThought);

// ***Reactions***

// Add reaction to thought
router.route('/:thoughtId/reactions').post(addReaction);

// Delete reaction to thought
router.route('/:thoughtId/reactions/').delete(deleteReaction);





module.exports = router;