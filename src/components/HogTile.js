import React from 'react';

function HogTile(props) {
  const {
    name,
    specialty,
    greased,
    weight,
    'highes medal achieved': medal,
    showDetails,
  } = props.hog;

  const imgName = name.toLowerCase().split(' ').join('_');
  const imgSrc = require(`../hog-imgs/${imgName}.jpg`);

  return (
    <div className="pigTile" onClick={() => props.showDetails(name)}>
      <h1>{name}</h1>
      <img src={imgSrc} alt={name} />
      <br />
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.handleHide(name);
        }}
      >
        Hide
      </button>
      {showDetails && (
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>{greased ? 'Greased' : 'Not Greased'}</p>
          <p>Highest Medal Achieved: {medal}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;
