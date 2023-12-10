const User = require('../models/User');

module.exports = {
  //get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  //get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  //update user by id
  async updateUser(req,res) {
    try {
        const user = await User.findOneAndUpdate(
          {_id: req.params.userId });
    } catch(err) {
        res.status(500).json(err)
    }
  },
  
  //delet user by id
  async deleteUser(req, res) {
    try {
        const user = await User.findOneAndRemove(
          {_id: req.params.userId}
        )
    } catch(err) {
        res.status(500).json(err)
    }
  },
};
