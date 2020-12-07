import React, { useState } from 'react';
import './App.scss';
import { loadBooks } from './api/library';
import { Input } from './components/Input';
import { BooksList } from './components/BooksList';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setSearch] = useState('');

  const handleQuery = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loadData();
  };

  const loadData = async() => {
    const response = await loadBooks(query);

    setBooks(response.items);
  };

  return (
    <div>
      <Input
        query={query}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
      />

      <BooksList books={books} />
    </div>
  );
};
