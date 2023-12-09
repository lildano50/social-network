const mongoose = require('mongoose');
const thoughtsSchema = require('./Thought');


const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trimmed},
    email: {type: String, required: true, unique: true, /*VALIDATION*/},
    thoughts: [thoughtsSchema],
    friends: [friendsSchema],
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

const User = mongoose.model('User', userSchema);
module.exports = User;
