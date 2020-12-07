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
    <form>
      <input
        className="ui selection dropdown"
        onChange={handleQuery}
        value={query}
      />

      <button
        className="ui primary button"
        onClick={handleSubmit}
        type="submit"
      >
        search
      </button>
    </form>

    {
      autocompleteStatus
      && (autocompleteError
        ? <div>No matches</div>
        : <Autocomplete loadData={loadData} autocomplete={autocomplete} />)
    }
  </div>
);

Input.propTypes = InputShape;
