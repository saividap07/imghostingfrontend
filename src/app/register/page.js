"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addregister, setUsername, setEmail, setPassword, setConfirm, setContact } from '@/redux/features/registerslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Page() {
  const { username, email, password, contact, confirm_password } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    contact: '',
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      contact: '',
    });
    setErrorMessages({});
  };

  const validateField = (fieldName, value) => {
    let errors = { ...errorMessages };


    if (fieldName === 'username') {
      if (!value) {
        errors.username = 'Username is required';
      } else if (!/^[A-Za-z]+$/.test(value)) {
        errors.username = 'Username should only contain letters';
      } else {
        delete errors.username;
      }
    }

    if (fieldName === 'email') {
      if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
        errors.email = 'Valid email address is required';
      } else {
        delete errors.email;
      }
    }

    if (fieldName === 'password') {
      if (!value) {
        errors.password = 'Password is required';
      } else {
        delete errors.password;
      }
    }

    if (fieldName === 'confirm_password') {
      if (value !== formData.password) {
        errors.confirm_password = 'Passwords do not match';
      } else {
        delete errors.confirm_password;
      }
    }

    if (fieldName === 'contact') {
      if (!value || !/^(\+[0-9]{1,4})?[0-9]{10}$/.test(value)) {
        errors.contact = 'Valid 10-digit contact number is required';
      } else {
        delete errors.contact;
      }
    }

    setErrorMessages(errors);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    validateField(fieldName, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['username', 'email', 'password', 'confirm_password', 'contact'];
    const isAllFieldsFilled = requiredFields.every((field) => formData[field]);

    if (!isAllFieldsFilled) {
      // Show an alert message indicating that all fields are required.
      alert('Please fill in all required fields');
      return; // Do not proceed with form submission.
    }

    // The rest of your form submission logic for valid data.
    const isFormValid = Object.keys(errorMessages).length === 0;

    if (isFormValid) {
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
       // alert('Data added'); // You can also use alert here for success message.
        clearForm();
      } catch (error) {
        alert('Data could not be added'); // You can also use alert here for error message.
      } finally {
        setIsLoading(false);
      }
    }
  };


  return (

    <>

      <section className='bgsection'>
        <div className="container">
          <div className='row justify-content-center align-items-center'>
            <div className="col-md-4 col-sm-12"> {/* Use col-md-6 for medium screens */}
              <div className="card  " style={{ border: "none" }}>
                <div className="card-body " style={{ border: "none" }}>
                  <img src="../assets/img/logo2.png" className="img-fluid rounded-top mb-2" alt="" /><br />

                  {/* <div className='row'>
                        <b >Sign In With</b>
                        </div> */}
                  <div className="card justify-content-center align-items-center" style={{ border: "none" }}>
                    <div className="card-body login" style={{ border: "none" }}>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-google"></a>
                      <a href="#" className="fa fa-youtube"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
            



                              

      <div>
        <div className='px-4'>
          <input
            type='text'
            className={`form-control mb-2 ${errorMessages.username ? 'is-invalid' : ''}`}
            name='username'
            id=''
            aria-describedby='helpId'
            placeholder='Username'
            value={formData.username}
            onChange={(e) => handleFieldChange('username', e.target.value)}
          />
          {errorMessages.username && <div className='invalid-feedback'>{errorMessages.username}</div>}

          <input
            type='text'
            className={`form-control mb-2 ${errorMessages.email ? 'is-invalid' : ''}`}
            name='email'
            id=''
            aria-describedby='helpId'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          {errorMessages.email && <div className='invalid-feedback'>{errorMessages.email}</div>}

          <input
            type='password'
            className={`form-control mb-2 ${errorMessages.password ? 'is-invalid' : ''}`}
            name='password'
            id=''
            aria-describedby='helpId'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => handleFieldChange('password', e.target.value)}
          />
          {errorMessages.password && <div className='invalid-feedback'>{errorMessages.password}</div>}

          <input
            type='password'
            className={`form-control mb-2 ${errorMessages.confirm_password ? 'is-invalid' : ''}`}
            name='confirm_password'
            id=''
            aria-describedby='helpId'
            placeholder='Retype password'
            value={formData.confirm_password}
            onChange={(e) => handleFieldChange('confirm_password', e.target.value)}
          />
          {errorMessages.confirm_password && <div className='invalid-feedback'>{errorMessages.confirm_password}</div>}

          <input
            type='text'
            className={`form-control my-2 ${errorMessages.contact ? 'is-invalid' : ''}`}
            name='contact'
            id=''
            aria-describedby='helpId'
            placeholder='Contact'
            value={formData.contact}
            onChange={(e) => handleFieldChange('contact', e.target.value)}
          />
          {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>}
          <span style={{ fontSize: "15px" }}><a href="/login">Login  an account?</a></span>


          {/* <PhoneInput
          country={'in'}
          placeholder="Contact No"
          name="contact"
          value={formData.contact}
          inputProps={{
            className: `form-control ${errorMessages.contact ? 'is-invalid' : ''}`,
          }}
          onChange={(value) => handleFieldChange('contact', value)}
        />
        {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>} */}


          <button
            type='submit'
            onClick={handleSubmit}
            className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign Up'}
          </button>
        </div>
      </div>




                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

























    </>
  );
}
