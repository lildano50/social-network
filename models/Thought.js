const { Schema, Types, mongoose } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId(), },
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now }

});

// format time stamp on query
// reactionSchema.get(function(){

// })

const thoughtSchema = new Schema({
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

thoughtSchema.virtual('reactionCount')
  .get(function () {return `${this.reactions.length}`})
  .set(function (value) {
    const reactionCount = value;
    this.set({reactionCount});
  });

const Thought = mongoose.model('Thought', thoughtSchema);
// module.exports = { thoughtSchema };
module.exports = Thought;