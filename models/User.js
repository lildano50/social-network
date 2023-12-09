const mongoose = require('mongoose');
const thoughtSchema = require('./Thought');


const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, },
    thoughts: [thoughtSchema],
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

const User = mongoose.model('User', userSchema);
module.exports = User;
