const mongoose = require('mongoose');

const ashdodFollowingSchema = new mongoose.Schema({
    _id: String
});

const ashdodFollowing = mongoose.model('ashdodFollowing', ashdodFollowingSchema);

module.exports = ashdodFollowing;
