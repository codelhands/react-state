import React from 'react'

function Header({number,increment}) { //
    console.log("header render edildi");
  return (
    <div> 
    
    Header-{number}
    <br></br>
    <br></br>

    <button onClick={(increment)}></button>
    
    </div>
  )
}

export default React.memo(Header);