import './App.css';
 
import {useState} from 'react'

import Header from './components/header';

function App() {

  const [number,setNumber] = useState(0);


  return (
    <div className="App">
    <Header number={number < 5 ? 0 : number}></Header>
    <hr></hr>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
