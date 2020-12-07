import React, { useState } from 'react';
import './App.scss';
import { loadBooks } from './api/library';
import { Input } from './components/Input';
import { BooksList } from './components/BooksList';
import { InputError } from './components/InputError';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setSearch] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);

  const handleQuery = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loadData();
  };

  const loadData = async() => {
    const response = await loadBooks(query);

    if (response.totalItems === 0) {
      setErrorStatus(true);
    } else {
      setErrorStatus(false);
      setBooks(response.items);
    }
  };

  return (
    <div>
      <Input
        query={query}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
      />

      {errorStatus
        ? <InputError />
        : <BooksList books={books} />}
    </div>
  );
};
