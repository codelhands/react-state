import React from 'react'
import { useState } from 'react'
import styles from "./styles.module.css"
import {sendMessage} from "../socketApi"
import {useChat} from "../context/ChatContext"

function ChatForm() {

  const [message,setMessage] = useState("");


  const {setMessages} = useChat();


  const handleSubmit = (e) => {
    e.preventDefault(); // mesaj yazdıkça sayfa yenilenmesin kodu 
    console.log(message);

    setMessages((prevState) => [...prevState],{message});

    sendMessage(message);

    setMessages(""); //mesaj kutusu boşalsın diye
  };

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
      <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)}/>
    </form>

    </div>
  )
}

export default ChatForm