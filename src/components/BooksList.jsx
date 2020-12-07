import React from 'react';
import PropTypes from 'prop-types';

export const BooksList = ({ books }) => (
  <div>
    {books.map(({ volumeInfo, id }) => (
      <div key={id}>
        <img
          src={volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />
        <div>{volumeInfo.title}</div>

        {volumeInfo.authors && volumeInfo.authors.map(author => (
          <div>{author}</div>
        ))}
      </div>
    ))}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      authors: PropTypes.array.isRequired,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}.isRequired;
