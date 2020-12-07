import React from 'react';
import PropTypes from 'prop-types';
import { BooksListShape } from './Shape';

export const BooksList = ({ books }) => (
  <div className="books">
    {books.map(({ volumeInfo, id }) => (
      <div className="book" key={id}>
        <img
          className="book__img"
          src={volumeInfo.imageLinks === undefined
            ? 'https://logodix.com/logo/1338312.png'
            : volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />

        <div>
          <h4>
            {volumeInfo.title}
          </h4>
        </div>

        <div>
          {volumeInfo.authors && volumeInfo.authors.map(author => (
            <div>{author}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(BooksListShape).isRequired,
}.isRequired;
