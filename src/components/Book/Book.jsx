import React from 'react';
import './Book.scss';
import { BookShape } from '../../shapes/BookShape';

export const Book = ({ book }) => (
  <div className="book">
    <img
      className="book__img"
      src={book.imageLinks === undefined
        ? './images/logo_book.png'
        : book.imageLinks.smallThumbnail}
      alt={book.title}
    />

    <div>
      <h4>
        {book.title}
      </h4>
    </div>

    <div>
      {book.authors && book.authors.map(author => (
        <div key={author}>{author}</div>
      ))}
    </div>
  </div>
);

Book.propTypes = BookShape;
