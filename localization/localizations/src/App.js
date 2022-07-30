import './App.css';
import { useState,useEffect } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  'tr-TR' : {
    title:'merhaba dünya'
  },
  'en-US' : {
    title:'hello world'
  }
}


function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language; 

  const [locale,setLocale] = useState(defaultLocale);

  
  useEffect(() => {
    localStorage.setItem("locale",locale)
  },[locale ])


  return (
    <div className="App">
    <IntlProvider locale= {locale} messages={messages[locale]}>
    
    


    <FormattedMessage
          id="title"
        />

    <button onClick={() => setLocale('tr-TR')}>TR</button>
    <button onClick={() => setLocale ('en-US')}>EN</button>

    </IntlProvider>

    </div>
  );
}

export default App;
