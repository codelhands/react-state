import './App.css'; 

import { init,subscribe } from './socketApi';

import { useEffect,useState} from 'react';

import Palatte from './components/Palatte';

function App() {

  const [activeColor,setActiveColor] = useState("#282c34") 

  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  },[]);


  return (
    <div className="App" style={{backgroundColor : activeColor}}>
     <Palatte activeColor={activeColor}></Palatte>
    </div>
  );
}

export default App;
