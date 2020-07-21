const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  authors: { type: Array, required: true },
  image: String,
  link: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;