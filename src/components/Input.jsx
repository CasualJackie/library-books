import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ query, handleQuery, handleSubmit }) => (
  <form>
    <input onChange={handleQuery} value={query} />
    <button onClick={handleSubmit} type="submit">search</button>
  </form>
);

Input.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}.isRequired;
