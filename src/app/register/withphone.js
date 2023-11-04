
"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addregister, setUsername, setEmail, setPassword, setConfirm, setContact } from '@/redux/features/registerslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

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
      // Update the regular expression for phone number validation
      if (!value || !/^\+[0-9]{1,4}[0-9]{10}$/.test(value)) {
        errors.contact = 'Valid contact number is required';
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
      alert('Please fill in all required fields');
      return;
    }

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
        toast.success('Data added'); // Use toast for success message
        clearForm();
      } catch (error) {
        toast.error('Data could not be added'); // Use toast for error message
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <div className='px-4'>
        <input
          type='text'
          className={`form-control ${errorMessages.username ? 'is-invalid' : ''}`}
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
          className={`form-control ${errorMessages.email ? 'is-invalid' : ''}`}
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
          className={`form-control ${errorMessages.password ? 'is-invalid' : ''}`}
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
          className={`form-control ${errorMessages.confirm_password ? 'is-invalid' : ''}`}
          name='confirm_password'
          id=''
          aria-describedby='helpId'
          placeholder='Retype password'
          value={formData.confirm_password}
          onChange={(e) => handleFieldChange('confirm_password', e.target.value)}
        />
        {errorMessages.confirm_password && <div className='invalid-feedback'>{errorMessages.confirm_password}</div>}

        <PhoneInput
          country={'in'}
          placeholder="Contact No"
          name="contact"
          value={formData.contact}
          inputProps={{
            className: `form-control ${errorMessages.contact ? 'is-invalid' : ''}`,
          }}
          onChange={(value) => handleFieldChange('contact', value)}
        />
        {errorMessages.contact && <div className='invalid-feedback'>{errorMessages.contact}</div>}

        <button
          type='submit'
          onClick={handleSubmit}
          className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </button>
      </div>
    </div>
  );
}
