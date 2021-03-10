const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
 
  songTitle: {
    type: String,
    required: true // This must exist
  },
  showUrl: {
    type: String,
    required: true // This must exist
  },
  showDescription: {
    type: String,
    required: true // This must exist
  },
  songArtists: {
    type: String,
    required: true // This must exist
  },
  releaseDate: {
    type: Date,
    required: true,
    get: function (val) {
      return val.toISOString().split('T')[0]
    }
  }
}, {
  timestamps: true,
  toJSON: {
    getters: true
  }
});


module.exports = mongoose.model('Song', SongSchema);