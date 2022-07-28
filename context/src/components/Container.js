import React from 'react'
import Button from './Button'
import Header from './Header'


import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

function Container() {

    const {theme} = useContext(ThemeContext);

    


  return (
    <div className={`app ${theme === 'dark' ? theme : "" }`}>
    <Header></Header>

    <hr></hr>

    <Button></Button>
    
    </div>
  );
}

export default Container;