const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
 
  showTitle: {
    type: String,
    required: true // This must exist
  },
  showTime: {
    type: String,
    required: true // This must exist
  },
  showLocation: {
    type: String,
    required: true // This must exist
  },
  showInformation: {
    type: String,
    required: true // This must exist
  },
  date: {
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


module.exports = mongoose.model('Show', ShowSchema);