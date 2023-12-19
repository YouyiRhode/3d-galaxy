import styles from './Form.module.scss';
import {useEffect, useRef, useState} from "react";
import database from "../../firebaseConfig";
import { ref, push } from 'firebase/database';

const Form = () => {
    const[formData, setFormData]= useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    
    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
          }
      
        const formRef = ref(database, 'form-data');
        push(formRef, formData)
          .then(() => {
            setFormData({ firstName:'',lastName:'',email:'',phone:'',message:'' });
            
            console.log('Data submitted successfully');
          })
          .catch((error) => {
            console.error('Error submitting data:', error);
          });
    };

    return(
        <>
            <form className={styles.myForm}>
                <div className={styles.formBasicName}>
                    <input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} id="firstName" required/>
                    <input placeholder ="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} id="lastName" required />
                </div>

                <div className={styles.formBasicEmailPhone}>
                        <input placeholder = "E-mail" type="email" name="email" value={formData.email} onChange={handleChange} id="email" required/>
                        <input placeholder ="Phone" type="number" name="phone" value={formData.phone} onChange={handleChange} id="phone" required />
                </div>
                <div className={styles.formBasicMessage}>
                    <textarea placeholder = "Message" name="message" value={formData.message} onChange={handleChange} id="message" required  />
                </div>
                <div>
                    <button type="submit" onClick={(e)=>handleSubmit(e)} >submit</button>
                </div>
            </form>
        </>
    )
}
export default Form;

