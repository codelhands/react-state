import {useState,useEffect} from 'react'


function Form({addContact,contacts}) {

  const initialFormValues = {full_name:"",phone_number:""};

  useEffect(()=> {
    setForm(initialFormValues); //input girip add yaptıktan sonra inputu boşlamak için
  },[contacts])

  const [form,setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault(); //sayfa yenilenmeden ilgi logu consolda görmek için
    
    if(form.full_name === '' || form.phone_number === ''){
      return false;
    }

    addContact([...contacts,form]);

    

  }

  return (
    <form onSubmit={onSubmit}>
        <div>
    <input
     name="full_name" 
     placeholder='Full Name' 
     value={form.full_name}
     onChange={onChangeInput}
     />
        </div>
        <div>
    <input
     name="phone_number"
     placeholder='Number'
     value={form.phone_number}
     onChange={onChangeInput}
     /> 
         </div>
    
        <div>
          <button>Add</button>
        </div>
    </form>
  )
}

export default Form