import {useState} from 'react'

import {send} from "../socketApi";

function Palatte() {

  const [color,setColor] = useState('');

  return (
    <div className='palatte'>


    <input 
    type="color" 
    value={color} 
    onChange={(e) => setColor(e.target.value)}/>

    <button onClick={() => send(color)}>Click</button>
    
    
    
    </div>
  )
}

export default Palatte