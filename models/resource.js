const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const resourceSchema = new Schema({
  title: { type: String, required: false },
  author: { type: Array, required: false },
  url: { type: String, required: true, unique: true },
  duration: { type: String, required: false },
  description: { type: String, required: false },
  upvotes: { type: Number, required: true },
  views: { type: Number, required: true },
  notes: [{
    note: { type: String, required: false },
    upvote: { type: String, required: false }
  }],
  media: { type: String, required: false },
  mediaType: { type: String, required: false },
  institution: { type: String, required: false },
  categories: { type: Array, required: false, default: ['philosophy']},
  level:{ type: String, required: false },
  path: { type: Array, required: false },
  position:{ type: Number, required: false },
  pathPosition: [{
    path: { type: String, required: false },
    position: { type: Number, required: false }
  }],
  date: { type: Date, default: Date.now }

});

resourceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Resource', resourceSchema);
