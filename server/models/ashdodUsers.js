const mongoose = require('mongoose');

const ashdodUsersSchema = new mongoose.Schema({
    _id: String
});

const ashdodUsers = mongoose.model('ashdodUsers', ashdodUsersSchema);

module.exports = ashdodUsers;
