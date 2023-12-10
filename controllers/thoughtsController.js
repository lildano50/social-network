const Thought = require('../models/Thought');

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
  
    //create new thought ***Need to link to associated user***
    async createThought(req, res) {
      try {
        const thought = await Thought.create(req.body);
        res.json(thought);
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
      } catch(err) {
          res.status(500).json(err)
      }
    },
  };
  