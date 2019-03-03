const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true},
    link: { type: String, required: true },
    googleId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Book', bookSchema)