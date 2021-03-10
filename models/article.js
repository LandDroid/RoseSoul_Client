const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
 
  articleTitle: {
    type: String,
    required: true // This must exist
  },
  articleDescription: {
    type: String,
    required: true // This must exist
  },
}, {
  timestamps: true,
  toJSON: {
    getters: true
  }
});


module.exports = mongoose.model('Article', ArticleSchema);