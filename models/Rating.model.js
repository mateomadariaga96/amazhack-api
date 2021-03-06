const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  score: {
	  type: Number,
	  enum: [1, 2, 3, 4, 5]
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;