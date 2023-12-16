const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
  } = require('../../controllers/thoughtsController.js');

//Get all thoughts
router.route('/').get(getThoughts);

//Get a single thought by ID
router.route('/:thoughtId').get(getSingleThought);

//Create a thought and push associated thought to user's thoughts array field
router.route('/').post();

//Update a single thought by ID
router.route('/:thoughtId/update').get(getSingleThought).put(updateThought);

//Delete a single thought by ID
router.route('/:thoughtId').delete(deleteThought);





module.exports = router;