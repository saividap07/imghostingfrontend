
"use client"

import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addregister,setUsername,setEmail,setPassword,setConfirm,setContact } from '@/redux/features/registerslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  const { username, email, password, contact, confirm_password } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    contact: '',
  });

  const clearForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      contact: '',
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
    } else if (!/^[A-Za-z]+$/.test(formData.username)) {
      errors.username = 'Username should only contain letters';
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Valid email address is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }
    if (!formData.contact || !/^\d{10}$/.test(formData.contact)) {
      errors.contact = 'Valid 10-digit contact number is required';
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        contact: formData.contact,
      };
      try {
        await dispatch(addregister(data));
        setErrorMessages({});
        toast.success('Data added');
        clearForm(); // Clear the form after successful submission
      } catch (error) {
        toast.error('Data could not be added');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error('Please fill in all required fields correctly');
    }
  };

  return (
    <div >
      <section className='bgsection'>
        <div className="container">
          <div className='row justify-content-center align-items-center'>
            <div className="col-md-4 col-sm-12"> {/* Use col-md-6 for medium screens */}
              <div className="card  " style={{border:"none"}}>
                <div className="card-body " style={{border:"none"}}>
                  <img src="../assets/img/logo2.png" className="img-fluid rounded-top mb-2" alt="" /><br/>

                        {/* <div className='row'>
                        <b >Sign In With</b>
                        </div> */}
                  <div className="card justify-content-center align-items-center" style={{border:"none"}}>
                    <div className="card-body login" style={{border:"none"}}>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-google"></a>
                      <a href="#" className="fa fa-youtube"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
                  <div className='px-4'>
                  <input type="text" class="form-control" name="username" id="" 
                  placeholder=" username "
 className={`form-control ${errorMessages.username ? 'is-invalid' : ''}`}
 value={formData.username}
 onChange={(e) => setFormData({ ...formData, username: e.target.value })}


                  />
             {errorMessages.username && <div className='invalid-feedback'>{errorMessages.username}</div>}

         <input type="text"
         
         className={`form-control mt-2 ${errorMessages.email ? 'is-invalid' : ''}`}

         
         name="email" id="" aria-describedby="helpId" placeholder=" email "
         value={email}
         onChange={(e) => dispatch(setEmail(e.target.value))}

         />
                 {errorMessages.email && <div className='invalid-feedback'>{errorMessages.email}</div>}

         <input type="password" 
          className={`form-control mt-2 ${errorMessages.password ? 'is-invalid' : ''}`}
         name="password" id="" aria-describedby="helpId" placeholder=" password "
         value={password}
         onChange={(e) => dispatch(setPassword(e.target.value))}

         />
       {errorMessages.password && <div className='invalid-feedback'>{errorMessages.password}</div>}

         <input type="password" class="form-control mt-2 mb-3" name="password" id="" 
          className={`form-control ${errorMessages.confirm_password ? 'is-invalid' : ''}`}
         aria-describedby="helpId" placeholder=" Retype password "
         value={confirm_password}
         onChange={(e) => dispatch(setConfirm(e.target.value))}
         />
                {errorMessages.confirm_password && <div className='invalid-feedback'>{errorMessages.confirm_password}</div>}

           <input type="text"
           
           className={`form-control mt-2 mb-3 ${errorMessages.contact ? 'is-invalid' : ''}`}name="contact" id="" aria-describedby="helpId" placeholder="contact "
 onChange={(e)=>dispatch(setContact(e.target.value))}

         />
                {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>}

         <span style={{fontSize:"15px"}}><a href='/login'> Already have an account ?</a></span>  
         
         <button
          type='submit'
          onClick={handleSubmit}
          className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </button>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
