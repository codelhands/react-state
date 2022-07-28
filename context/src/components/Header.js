import {useContext} from "react";


import ThemeContext from '../context/ThemeContext'

function Header() {

    const {theme, setTheme} = useContext(ThemeContext);


  return <div>Active Theme : {theme}</div>
}

export default Header