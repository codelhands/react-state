import './App.css';
 
import {useState,useMemo,useCallback} from 'react'

import Header from './components/header';

function App() {

  const [number,setNumber] = useState(0);
  const [text,setText] = useState("");

  return (
    <div className="App">
    <Header increment ={() => setNumber(number+1)}></Header>

    <hr></hr>

    <h1>{number}</h1>

    <br></br>
    
    <input value={text} onChange={({target}) => setText(target.value)}/>
    </div>
  );
}

export default App;
