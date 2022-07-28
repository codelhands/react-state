import React from "react";
import {useFormik} from 'formik';
import '../App.css';
import validations from "./validation";

export default function Signup() {
    const {handleSubmit, values, handleChange} = useFormik({
            initialValues: {
                email: '',
                password: "",
                passwordConfirm: "",
                /*firstName: '',
                lastName: '',
                gender: 'male',
                hobies: '[]',
                country: "",*/
            },
            onSubmit: values => {
                console.log(values);
            },
        validationSchema:validations,
        })
    ;
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" value={values.email} placeholder="utkucoskun@windowslive.com"
                       onChange={handleChange}/>

                <br/><br/>

                <label>Password</label>
                <input name="password" value={values.password} placeholder="Password"
                       onChange={handleChange}/>

                <br/><br/>

                <label>Password Confirm</label>
                <input name="passwordConfirm" value={values.passwordConfirm} placeholder="Confirm Password"
                       onChange={handleChange}/>

                <br/><br/>
               
                <button type="submit">Submit</button>
                <br/><br/>
                <code>{JSON.stringify(values)}</code>
            </form>
            
        </div>
    )
}