import React from 'react';
import HogTile from './HogTile';

function HogsList(props) {
  return (
    <div>
      {props.hogs.map((hog, idx) => {
        return (
          <HogTile
            key={idx}
            hog={hog}
            showDetails={props.showDetails}
            handleHide={props.handleHide}
          />
        );
      })}
    </div>
  );
}

export default HogsList;
