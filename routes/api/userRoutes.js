const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController.js');

const {
  createThought
} = require('../../controllers/thoughtsController.js');

//Create a new user
router.route('/').get(getUsers).post(createUser);

//Get a single user by ID
router.route('/:userId').get(getSingleUser);

//Update a single user by ID
router.route('/:userId/update').get(getSingleUser).put(updateUser);

//Delete friend from a user's friend list
router.route('/:userId/friends/:friendId').delete();

//Add new friend to a user's friend list
router.route('/:userId/friends/:friendId').post();

// Delete a single user by ID
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thoughts').post(createThought);

module.exports = router;