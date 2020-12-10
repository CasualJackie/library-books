import PropTypes from 'prop-types';
import { BooksListShape } from './BooksListShape';

export const SearchBooksShape = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  autocomplete: PropTypes.arrayOf(BooksListShape).isRequired,
  autocompleteError: PropTypes.bool.isRequired,
  autocompleteStatus: PropTypes.bool.isRequired,
  clickAutocomplete: PropTypes.func.isRequired,
}.isRequired;
