import React from 'react'

function Header({number}) {
    console.log("header render edildi");
  return (
    <div>Header-{number}</div>
  )
}

export default React.memo(Header);