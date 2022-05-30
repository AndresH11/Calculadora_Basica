import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const  [input,setInput] = useState('');
  
  const inputValue = value =>{
    setInput(input + value);
  }

  const calcResultado = () =>{
    
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favor digite un valor para ser evaluado');
    }
  }

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla 
          input = {input}
        />
        <div className='fila'>
          <Boton manejarClick = {inputValue}>1</Boton>
          <Boton manejarClick = {inputValue}>2</Boton>
          <Boton manejarClick = {inputValue}>3</Boton>
          <Boton manejarClick = {inputValue}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {inputValue}>4</Boton>
          <Boton manejarClick = {inputValue}>5</Boton>
          <Boton manejarClick = {inputValue}>6</Boton>
          <Boton manejarClick = {inputValue}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {inputValue}>7</Boton>
          <Boton manejarClick = {inputValue}>8</Boton>
          <Boton manejarClick = {inputValue}>9</Boton>
          <Boton manejarClick = {inputValue}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {calcResultado}>=</Boton>
          <Boton manejarClick = {inputValue}>0</Boton>
          <Boton manejarClick = {inputValue}>.</Boton>
          <Boton manejarClick = {inputValue}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear 
            manejarClick = {()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
