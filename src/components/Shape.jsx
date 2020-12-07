import PropTypes from 'prop-types';

export const BooksListShape = {
  id: PropTypes.string.isRequired,
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}.isRequired;

export const InputShape = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  autocomplete: PropTypes.arrayOf(BooksListShape).isRequired,
  autocompleteError: PropTypes.bool.isRequired,
  autocompleteStatus: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
}.isRequired;
