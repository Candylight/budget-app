const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  priority: { type: Number, default: 0 },
});

module.exports = mongoose.model('Category', CategorySchema);
