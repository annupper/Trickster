const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const noteSchema = new Schema({
  note: {type: String},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;