import React from 'react'
import { useState } from 'react'
import styles from "./styles.module.css"

function ChatForm() {

  const [message,setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // mesaj yazdıkça sayfa yenilenmesin kodu 
    console.log(message);

    setMessages(""); //mesaj kutusu boşalsın diye
  };

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
      <input className={styles.textInput} value={message} onChange={(e) => setMessages(e.target.value)}/>
    </form>

    </div>
  )
}

export default ChatForm