import { useEffect , useState } from "react";


function Counter() {

  const [number,setNumber] = useState(0);
  
  useEffect(() => {
    console.log('state güncellendi');


   const interval = setInterval(() => {
    setNumber((n) => n+1); //n parametresi number değişkeni aslında
   },1000);

    return () => clearInterval(interval);

  },[]);


  useEffect(() => {
    console.log('number state güncellendi, component mount edildi');
  }, [number]); // bu array sayesinde mount edildiği anı yakalarsın



  return (
    <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  )
}

export default Counter;