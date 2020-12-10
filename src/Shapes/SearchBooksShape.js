import PropTypes from 'prop-types';
import { BooksListShape } from './BooksListShape';

export const SearchBooksShape = {
  getBooks: PropTypes.func.isRequired,
  autocomplete: PropTypes.arrayOf(BooksListShape).isRequired,
  changeErrorStatus: PropTypes.bool.isRequired,
}.isRequired;
