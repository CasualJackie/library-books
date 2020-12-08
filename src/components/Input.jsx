import React, { memo } from 'react';
import { InputShape } from './Shape';
import { Autocomplete } from './Autocomplete';

export const Input = memo(({
  query,
  handleQuery,
  handleSubmit,
  autocomplete,
  autocompleteError,
  autocompleteStatus,
  clickAutocomplete,
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
        : (
          <Autocomplete
            clickAutocomplete={clickAutocomplete}
            autocomplete={autocomplete}
          />
        ))
    }
  </div>
));

Input.propTypes = InputShape;
