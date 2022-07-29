import './App.css'; 

import { init } from './socketApi';

import { useEffect } from 'react';

import Palatte from './components/Palatte';

function App() {

  useEffect(() => {
    init();
  },[]);


  return (
    <div className="App">
     <Palatte></Palatte>
    </div>
  );
}

export default App;
