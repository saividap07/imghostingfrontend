
"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addlogin,setEmail,setPassword } from '@/redux/features/loginslice';

export default function Page() {
  const {email,password} = useSelector((state)=>state.login);
  const dispatch = useDispatch();
  
  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = {
      email:email,
      password:password
    };
    dispatch(addlogin(data));
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
                    <input type="text" className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Enter username or email" 
                     onChange={(e)=>dispatch(setEmail(e.target.value))}

                    />
                    <input type="password" className="form-control mt-2 mb-3" name="password" id="" aria-describedby="helpId" placeholder="Enter password"
                     onChange={(e)=>dispatch(setPassword(e.target.value))}

                    />
                    <span style={{ fontSize: "15px" }}><a href='/register'>Need an account?</a></span>
                    <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-sm float-right">Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
