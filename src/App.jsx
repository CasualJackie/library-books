import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import './App.scss';
import { loadBooks } from './api/library';
import { Input } from './components/Input';
import { BooksList } from './components/BooksList';
import NotFound from './images/not_found.png';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [statusError, setStatusError] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);
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
      setStatusError(true);

      return;
    }

    loadData(query);
    setAutocompleteStatus(false);
  }, [query]);

  const clickAutocomplete = useCallback((title) => {
    loadData(title);
    setQuery(title);
    setAutocompleteStatus(false);
  }, []);

  const loadAutocomplete = useCallback(async(part) => {
    const response = await loadBooks(part);
    const result = response.items;

    if (result === undefined) {
      setAutocompleteError(true);

      return;
    }

    setAutocompleteError(false);
    setAutocomplete(response.items);
  }, []);

  const queryAutocomplete = useCallback(debounce(loadAutocomplete, 500), []);

  const loadData = useCallback(async(title) => {
    const response = await loadBooks(title);

    if (response.totalItems === 0) {
      setStatusError(true);
    } else {
      setStatusError(false);
      setBooks(response.items);
    }
  }, []);

  return (
    <div className="container">
      <div className="container__left">
        {statusError
          ? (
            <img
              className="container__img"
              src={NotFound}
              alt="not found"
            />
          )
          : <BooksList books={books} />}
      </div>

      <Input
        query={query}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
        autocomplete={autocomplete}
        autocompleteError={autocompleteError}
        autocompleteStatus={autocompleteStatus}
        clickAutocomplete={clickAutocomplete}
      />
    </div>
  );
};
