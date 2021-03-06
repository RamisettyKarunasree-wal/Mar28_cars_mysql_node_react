const mongoose = require('mongoose');
const ForumSchema = mongoose.Schema({
  title: { type: String, required: true, minLength: 10, maxLength: 100 },
  doc: { type: Date, required: true },
  forumBody: { type: String, required: true, minLength: 50, maxLength: 500 },
  author: { type: String, required: true, minLength: 5, maxLength: 50 },
});
module.exports = mongoose.model('Forum', ForumSchema);
