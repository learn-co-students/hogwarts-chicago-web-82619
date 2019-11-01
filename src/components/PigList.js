import React from 'react'
import PigCard from './PigCard'


const PigList = (props) => {
  const hogsList = props.hogs.map(hog => {
    return (
      <div>< PigCard hog={hog} handleHide={props.handleHide}/></div>
    )
  })
  return(
    <div className='indexWrapper'>{ hogsList }</div>
  );

}


export default PigList;