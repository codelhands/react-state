import React from 'react'

function Header({number,data}) { //
    console.log("header render edildi");
  return (
    <div>
    
    Header-{number}
    <br></br>
    <br></br>

    <code>{JSON.stringify(data)}</code>
    
    </div>
  )
}

export default React.memo(Header);