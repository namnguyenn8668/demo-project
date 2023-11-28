import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  bank_name: { type: String, require: true },
  number: { type: String, require: true },
  name: { type: String, require: true },
});

const Bank = mongoose.model('bank', Schema, 'bank');

export default Bank;
