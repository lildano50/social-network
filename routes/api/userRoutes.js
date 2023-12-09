const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userID/update').get(getSingleUser).put(updateUser);

// route.route('/:userID/delete').delete(deleteUser);

module.exports = router;