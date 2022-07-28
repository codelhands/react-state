import { useContext } from 'react'

import UserContext  from '../context/UserContext'

import React from 'react'
import { useState } from 'react';

function Profile() {

    const {user,setUser} = useContext(UserContext);

    const [loading,setLoading] = useState(false)

    const handleLogin = () =>  {
        setLoading(true);
        setTimeout(() => {
            setUser({ id:1,username:'even',bio:'lorem ipsum' });
            setLoading(false);
        }, 1500);
    };


  return (
    <div>

    {!user && (<button onClick={handleLogin}>{loading ? 'loading...' : 'login'}</button>)}

     

   

    
    <code>{JSON.stringify(user)}</code>
    
    </div>
  )
}

export default Profile