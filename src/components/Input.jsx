import React from 'react';
import { InputShape } from './Shape';
import { Autocomplete } from './Autocomplete';

export const Input = ({
  query,
  handleQuery,
  handleSubmit,
  autocomplete,
  autocompleteError,
  autocompleteStatus,
  loadData,
}) => (
  <div className="container__right">
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
        : <Autocomplete loadData={loadData} autocomplete={autocomplete} />)
    }
  </div>
);

Input.propTypes = InputShape;
