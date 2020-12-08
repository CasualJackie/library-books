import React from 'react';
import PropTypes from 'prop-types';
import { BooksListShape } from './Shape';

export const Autocomplete = ({ autocomplete, loadData }) => (
  <div className="form__item ui selection dropdown">
    {autocomplete.map(({ volumeInfo, id }) => (
      <button
        key={id}
        type="button"
        className="autocomplete__item"
        onClick={() => loadData(volumeInfo.title)}
      >
        {volumeInfo.title}
      </button>
    ))}
  </div>
);

Autocomplete.propTypes = {
  loadData: PropTypes.func.isRequired,
  autocomplete: PropTypes.arrayOf(BooksListShape).isRequired,
}.isRequired;
