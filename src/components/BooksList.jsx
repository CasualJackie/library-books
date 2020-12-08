import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BooksListShape } from './Shape';
import LogoBook from '../images/logo_book.png';

export const BooksList = memo(({ books }) => (
  <div className="books">
    {books.map(({ volumeInfo, id }) => (
      <div className="book" key={id}>
        <img
          className="book__img"
          src={volumeInfo.imageLinks === undefined
            ? LogoBook
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
            <div key={author}>{author}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
));

BooksList.propTypes = {
  books: PropTypes.arrayOf(BooksListShape).isRequired,
}.isRequired;
