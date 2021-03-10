const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
 
  videoTitle: {
    type: String,
    required: true // This must exist
  },
  videoUrl: {
    type: String,
    required: true // This must exist
  },
}, {
  timestamps: true,
  toJSON: {
    getters: true
  }
});


module.exports = mongoose.model('Video', VideoSchema);