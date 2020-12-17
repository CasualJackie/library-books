import React, { memo, useState, useCallback } from 'react';
import './SearchBooks.scss';
import debounce from 'lodash.debounce';
import { loadBooks } from '../../api/loadBooks';
import { SearchBooksShape } from '../../shapes/SearchBooksShape';
import { Autocomplete } from '../Autocomplete/Autocomplete';

export const SearchBooks = memo(({ getBooks, changeErrorStatus }) => {
  const [query, setQuery] = useState('');
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
  const [autocompleteError, setAutocompleteError] = useState(false);
  const [autocompleteStatus, setAutocompleteStatus] = useState(false);

  const handleQuery = useCallback((event) => {
    const { value } = event.target;

    setQuery(value);

    if (value === '') {
      setAutocompleteStatus(false);

      return;
    }

    setAutocompleteStatus(true);
    queryAutocomplete(value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (query === '') {
      setAutocompleteError(true);
      changeErrorStatus(true);

      return;
    }

    getBooks(query);
    setAutocompleteStatus(false);
  }, [query]);

  const loadAutocomplete = useCallback(async(part) => {
    const response = await loadBooks(part);
    const result = response.items;

    if (result === undefined) {
      setAutocompleteError(true);

      return;
    }

    setAutocompleteError(false);
    setAutocompleteSuggestions(response.items);
  }, []);

  const queryAutocomplete = useCallback(debounce(loadAutocomplete, 500), []);

  const clickAutocomplete = useCallback((title) => {
    getBooks(title);
    setQuery(title);
    setAutocompleteStatus(false);
  }, []);

  return (
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
              autocomplete={autocompleteSuggestions}
              clickAutocomplete={clickAutocomplete}
            />
          ))
      }
    </>
  );
});

SearchBooks.propTypes = SearchBooksShape;
