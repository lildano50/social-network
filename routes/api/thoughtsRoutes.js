const router = require('express').Router();
const {

  } = require('../../controllers/thoughtsController.js');

//Get all thoughts
router.route('/').get();

//Get a single thought by ID
router.route('/:thoughtId').get();

//Create a thought and push associated thought to user's thoughts array field
router.route('/').post();

//Update a single thought by ID
router.route('/:thoughtId').put();

//Delete a single thought by ID
router.route('/:thoughtId').delete();





module.exports = router;