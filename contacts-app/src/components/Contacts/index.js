import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'

import "./style.css";

function Contacts() {

  const[contacts,setContacts ]= useState([
    {
      full_name:'mehmet',
      phone_number:"123123"
    },{
      full_name:"ayşe",
      phone_number:"45435"
    }
  ]);

  useEffect( () => {

    console.log(contacts);

  },[contacts])

  return (
    <div id='container'>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/> 
    </div>
  )
}

export default Contacts