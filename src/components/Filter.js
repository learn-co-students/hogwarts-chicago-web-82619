import React from 'react';

function Filter(props) {
  return (
    <div>
      <button onClick={props.toggleGreased}>
        {!props.onlyGreased ? 'Show Only Greased' : 'Show All'}
      </button>
      <select onChange={(e) => props.handleSort(e)}>
        <option value="noSort">No Sort</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Filter;
