import React, { memo } from 'react';
import './Autocomplete.scss';
import PropTypes from 'prop-types';
import { BooksListShape } from '../../Shapes/BooksListShape';

export const Autocomplete = memo(({ autocomplete, clickAutocomplete }) => (
  <div className="form__item ui selection dropdown">
    {autocomplete.map(({ volumeInfo, id }) => (
      <button
        key={id}
        type="button"
        className="autocomplete__item"
        onClick={() => clickAutocomplete(volumeInfo.title)}
      >
        {volumeInfo.title}
      </button>
    ))}
  </div>
));

Autocomplete.propTypes = {
  clickAutocomplete: PropTypes.func.isRequired,
  autocomplete: PropTypes.arrayOf(BooksListShape).isRequired,
}.isRequired;
