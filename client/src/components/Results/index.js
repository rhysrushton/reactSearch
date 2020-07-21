  
import React from "react";
import Book from "../Book";

export default function Results(props) {
  return (
    <div className="row">
      {props.results.items ? (
        props.results.items.map((book) => (
          <Book book={book.volumeInfo} id={book.id} key={book.id} />
        ))
      ) : (
        <div className="col s12 m8 offset-m2">
          <h4 className="center">{props.empty}</h4>
        </div>
      )}
    </div>
  );
}