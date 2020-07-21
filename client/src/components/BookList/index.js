  
import React from "react";
import SavedBook from "../SavedBook/";

export default function BooksList(props) {
  return (
    <div className="row">
      {props.results.length ? (
        props.results.map((book) => (
          <SavedBook
            book={book}
            id={book.bookId}
            key={book.bookId}
            handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          />
        ))
      ) : (
        <div className="col s12 m8 offset-m2">
          <h4 className="center">{"Your favorites list is empty!"}</h4>
        </div>
      )}
    </div>
  );
}