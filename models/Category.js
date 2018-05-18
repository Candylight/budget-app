const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('Category', CategorySchema);
