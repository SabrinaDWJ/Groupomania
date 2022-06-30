const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postId: { type: String, required: true },
  message: { type: String, maxlength: 500, },
  picture: { type: String, },
  likes: { type: [String], required: true, }
},
);


module.exports = mongoose.model('post', postSchema);