import React from 'react';
import '../stylesheet/BotonClear.css';

const BotonClear = (props) => {
  return(
    <div 
      className='contenedor-botonClear'
      onClick={props.manejarClick}
    >
      {props.children}
    </div>
  );
};

export default BotonClear;