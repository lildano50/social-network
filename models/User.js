const {Schema, model } = require('mongoose');
const Thought = require('../models/Thought')
const thoughtSchema = require('../models/Thought')

const validateEmail =  function (email) {
    var regEx = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    return regEx.test(email);
};

const userSchema = new Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, validate: [validateEmail, 'Please fill out a valid email']},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [this],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
)


userSchema.virtual('friendCount')
  .get(function () {return `${this.friends.length}`})
  .set(function (value) {
    const friendCount = value;
    this.set({friendCount});
  });

const User = model('User', userSchema);
module.exports = User;
