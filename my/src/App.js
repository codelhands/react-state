import {useState} from "react";

function App() {

    const [name,setName] = useState("elif");
    const [age,setAge] = useState(29);
    const [friends,setFriends] = useState(["Ahmet","murat"]);
    const [address,setAdress] = useState({title:"Istanbul",zip:5858})

    return ( 
        <div className = "App" >

        <h1>Merhaba {name}</h1>
        <h2>{age}</h2>
        
        <button onClick={() => setName("Ahmet")}>Click</button>
        <button onClick={() => setAge(25)}>change age</button>
        
        <hr></hr>
        <br></br>

        <h2>Friends</h2>

       {friends.map((friend,index) => (
            <div key={index}>{friend}</div>
       ))}
        
        <button onClick={() => setFriends([...friends,"Ayşe"])}>add new friend</button>

        <hr></hr>
        <br></br>

        <h2>Adresses</h2>
        <div>{address.title} {address.zip}</div>

        <br></br>

        <button onClick={() => setAdress({title: "ankara",zip:44444})}>change the adresses</button> 
         {/* ...adresses,zip (adres kalsın zip değiştir) */}


        </div>
    );
}

export default App;