import React ,{useState}from 'react'
// import logo from './logo.svg';
import './App.css';
import If from './If';
import Select from 'react-select';

function App() {


  return (
    <div className="App">

      <If hours={18} minutes={0} seconds={0} />
      
    </div>
  );
}


export default App;
