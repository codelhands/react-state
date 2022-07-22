import {useState} from "react";

function App() {

    const [name,setName] = useState("elif");
    const [age,setAge] = useState(29);
    const [friends,setFriends] = useState(["Ahmet","murat"]);


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

        
        </div>
    );
}

export default App;