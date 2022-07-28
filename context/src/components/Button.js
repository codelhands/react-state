import {useContext} from 'react'

import ThemeContext from '../context/ThemeContext';


function Button() {

    const data = useContext(ThemeContext);

    console.log(data);

  return (
    <div>Button</div>
  )
}

export default Button