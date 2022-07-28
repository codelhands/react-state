import { useContext } from 'react'


import React from 'react'
import Button from './Button'
import Header from './Header'


import ThemeContext from '../context/ThemeContext'
import Profile from './Profile'

function Container() {

    const {theme} = useContext(ThemeContext);

    


  return (
    <div className={`app ${theme === 'dark' ? theme : "" }`}>
    <Header></Header>

    <hr></hr>

    <Button></Button>

    <hr></hr>

    <Profile></Profile>
    
    </div>
  );
}

export default Container;