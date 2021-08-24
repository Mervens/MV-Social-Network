const { Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        trimmed: true,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@true.+\..+/, "must be a valid email address"]
    },
    thoughts: [{type: Schema.Types.ObjectId, ref: "Thought"}],
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = require('./Social');

module.exports = { User };