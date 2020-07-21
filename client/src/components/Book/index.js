import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function Book({ book, id }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    checkAdded();
  }, []);

  function checkAdded() {
    API.getBook(id)
      .then((data) => {
        if (data.data) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      })
      .catch((err) => console.log(err));
  }

  const bookData = {
    bookId: id,
    title: book.title,
    authors: book.authors,
    description: book.description,
    image: book.imageLinks.thumbnail,
    link: book.previewLink,
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (added) {
      API.deleteBook(bookData.bookId).then((data) => setAdded(false));
    } else {
      API.saveBook(bookData).then((data) => setAdded(true));
    }
  };

  return (
    <div className="col s12 m8 offset-m2">
      <div className="card horizontal hoverable">
        <div className="card-image">
          <img src={book.imageLinks.thumbnail} alt="Book cover" />
        </div>
        <div className="card-stacked">
          <div
            className="card-content"
            style={{ height: 60, overflow: "hidden" }}
          >
            <span className="card-title">{book.title}</span>
            <p>{book.description}</p>
          </div>
          <div className="card-action">
            <a
              target="_blank"
              href={book.previewLink}
              rel="noopener noreferrer"
            >
              Book preview
            </a>

            {added ? (
              <a href="/" onClick={handleAddToFavorites}>
                <i className="material-icons right red-text">favorite</i>
              </a>
            ) : (
              <a href="/" onClick={handleAddToFavorites}>
                <i className="material-icons right red-text">favorite_border</i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}