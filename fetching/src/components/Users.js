import {useEffect,useState} from 'react'


function Users() {

    const [users,setUsers] = useState([]);
    const[isLoading,setIsLoading] =useState(true)

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setIsLoading(false);
        })
        .catch(e =>console.log(e));
    }, [])



  return (
    <div>
    
        <h1>Users</h1>

        {isLoading && <div>Loading...</div>}


        {
            users.map((user) => (<div key={user.di}>{user.name}</div>))
        }
    
    </div>
  )
}

export default Users