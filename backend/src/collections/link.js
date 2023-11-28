import { any } from 'joi';
import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    link: { type: mongoose.Schema.Types.Array, },
});

const Link = mongoose.model('link', Schema, 'link');

export default Link;
