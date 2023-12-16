const Thought = require('../models/Thought');
const thoughtSchema = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    //get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    },
  
    //get single thought
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    // create new thought ***Need to link to associated user***
    async createThought(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          {_id: req.params.userId },
          { $addToSet: { thoughts: req.body.id }},
          { runValidators: true, new: true }
        );
        if (!user) {
          return res.status(404).json({ message: 'No user found with that ID'});
        }
        res.json(user);
      } catch (err) {
        res.status(500).json(err)
      }
    },

    //update thought by id
    async updateThought(req,res) {
      try {
          const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId });
      } catch(err) {
          res.status(500).json(err)
      }
    },
    
    //delet thought by id
    async deleteThought(req, res) {
      try {
          const thought = await Thought.findOneAndRemove(
            {_id: req.params.thoughtId}
          )
          const user = await User.findOneAndUpdate(
            {users: req.params.userId},
            { $pull: { users: req.params.thoughtId }},
            { new: true }
          )
          res.json({ message: "Thought successfully deleted"});
      } catch(err) {
          res.status(500).json(err)
      }
    },
  };
  