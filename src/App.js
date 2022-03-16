import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();

  const handleaddValues =  (value) => {
    setValues((prevValues) =>({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickbutton = () => {
    console.log(values);
  };

  return <div className="App-container">
    <div className='register-container'> 
      <h1 className='register-title' /*translate se traduz ou não*/translate='no'> Scrim Shop </h1>
      <input
       type='text'
       placeholder='name'
       name='name'
       className='register-input'
       onChange={handleaddValues}
       
      />
      <input
       type='text'
       placeholder='Preço'
       name='const'
       className='register-input'
       onChange={handleaddValues}
       
      />
      <input
       type='text'
       placeholder='Categoria'
       name='category'
       className='register-input'
       onChange={handleaddValues}
      />
      <button
        className='register-button' onClick={handleClickbutton}>
          Cadastrar
      </button>
    </div>
  </div>

}

export default App;
