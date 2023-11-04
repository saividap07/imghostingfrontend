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
        toast.success('Data added');
        clearForm();
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
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
        />
        {errorMessages.confirm_password && <div className='invalid-feedback'>{errorMessages.confirm_password}</div>}

        <input
          type='text'
          className={`form-control ${errorMessages.contact ? 'is-invalid' : ''}`}
          name='contact'
          id=''
          aria-describedby='helpId'
          placeholder='Contact'
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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
