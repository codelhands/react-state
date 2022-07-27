import {useState} from 'react'

function List({contacts}) {
  const [filterText,setFilterText] = useState("");
//filtreleme işlemi
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase().includes(filterText.toLocaleLowerCase())
    );
  });


  return (
    <div>
    
    <input placeholder="Filter contact" value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>


    <ul className='list'>
    {
      filtered.map((contact,i)=> ( <li key={i}>{contact.full_name}</li>))
    }
    </ul>

    </div>
  )
}

export default List