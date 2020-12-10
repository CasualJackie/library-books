import React, { useState, useCallback } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { loadBooks } from './api/loadBooks';
import { BooksList } from './components/BooksList/BooksList';
import { SearchBooks } from './components/SearchBooks/SearchBooks';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [statusError, setStatusError] = useState(false);

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
              className="container__image"
              src="./images/not_found.png"
              alt="not found"
            />
          )
          : <BooksList books={books} />}
      </div>

      <div className="container__right">
        <SearchBooks getBooks={loadData} changeErrorStatus={setStatusError} />
      </div>
    </div>
  );
};
