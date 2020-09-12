const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Posts', postSchema);