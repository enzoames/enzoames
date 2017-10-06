import React, {Component} from 'react';

const Loader = ({className}) => {
  return(
    <div className={"spinner " + className}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  )
}

export default Loader;