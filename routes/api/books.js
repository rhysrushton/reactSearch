const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:title"
router
  .route("/:bookId")
  .get(booksController.find)
  .delete(booksController.remove);

module.exports = router;