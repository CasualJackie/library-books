import PropTypes from 'prop-types';

export const BookShape = {
  book: PropTypes.arrayOf({
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
}.isRequired;
