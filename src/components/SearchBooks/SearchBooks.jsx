import React, { memo } from 'react';
import './SearchBooks.scss';
import { SearchBooksShape } from '../../Shapes/SearchBooksShape';
import { Autocomplete } from '../Autocomplete/Autocomplete';

export const SearchBooks = memo(({
  query,
  handleQuery,
  handleSubmit,
  autocomplete,
  autocompleteError,
  autocompleteStatus,
  clickAutocomplete,
}) => (
  <>
    <form className="form">
      <input
        className="form__item ui selection dropdown"
        onChange={handleQuery}
        value={query}
      />

      <button
        className="form__item ui primary button"
        onClick={handleSubmit}
        type="submit"
        disabled={autocompleteError}
      >
        search
      </button>
    </form>

    {
      autocompleteStatus
      && (autocompleteError
        ? <div className="error">No matches</div>
        : (
          <Autocomplete
            clickAutocomplete={clickAutocomplete}
            autocomplete={autocomplete}
          />
        ))
    }
  </>
));

SearchBooks.propTypes = SearchBooksShape;
