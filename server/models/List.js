const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: 'List' }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const List = mongoose.model('List', ListSchema);
module.exports = List;
