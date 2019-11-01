import React from 'react';
import PigCard from './PigCard'


const HiddenPigs = (props) => {
  const hogsList = props.hogs.map(hog => {
    return (
      <div>< PigCard hog={hog} /></div>
    )
  })
  return(
    <div className='indexWrapper'>{ hogsList }</div>
  );

}


export default HiddenPigs;