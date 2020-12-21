import React, { memo } from 'react';
import './BooksList.scss';
import PropTypes from 'prop-types';
import { Book } from '../Book/Book';
import { BooksListShape } from '../../shapes/BooksListShape';

export const BooksList = memo(({ books }) => (
  <div className="books">
    {books.map(({ volumeInfo, id }) => (
      <Book book={volumeInfo} key={id} />
    ))}
  </div>
));

BooksList.propTypes = {
  books: PropTypes.arrayOf(BooksListShape).isRequired,
}.isRequired;
