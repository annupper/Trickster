const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const noteSchema = new Schema({
  title: {type: String},
  noteText: {type: String},
  sketch: {type: String},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  sharedBy: {type: Schema.Types.ObjectId, ref: 'User'},
  imgName: {
    type: String,
    default: 'defaultProfile.png',
  },
  imgName:[{
    type: String
  }],
  imgPath:{type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;