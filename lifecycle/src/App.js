import { useEffect } from "react";
import {useState} from "react";

function App() {

  // if(true){
  //   console.lof("selam");

  //   const [number,setNumber] = useState(0); 

  //   hook yapısı (const yapısı) kullanırken if bloklarının içinde kullanmamak gerekli 
  // }

  const [number,setNumber] = useState(0);
  const [name,setName] = useState(0);

  useEffect(() => {
    console.log('state güncellendi');
  });


  useEffect(() => {
    console.log('number state güncellendi, component mount edildi');
  }, [number]); // bu array sayesinde mount edildiği anı yakalarsın



  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>


      <hr></hr>

      <h1>{name}</h1>
      <button onClick={() => setName("mete")}>Click</button>





    </div>
  );
}

export default App;
