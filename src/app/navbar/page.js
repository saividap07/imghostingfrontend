'use client'

import React from 'react'
import Mainsection from '../mainsection/page'
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/features/slice";

export default function page() {

  const handleLogout = ()=>{
    localStorage.clear();
    window.location.href="/login"
  }



  //search data start
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsReducer);


  const searchQuery = useSelector((state) => state.postsReducer.searchQuery);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  //search data end


  return (

   
  
    <>
      <div className='bgmain'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{backgroundColor:"#171544" }}>
        <a className="navbar-brand font-weight-bolder mr-3" href="/">
          <img src="assets/img/logo2.png" className='nav-logo' />
        </a>
        <button
          className="navbar-light navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsDefault"
          aria-controls="navbarsDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>





        <div className="collapse navbar-collapse" id="navbarsDefault">
          <ul className="navbar-nav mr-auto align-items-center">
            
      <button type="submit" class="btn btn-primary btn-sm" >
      <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/plus-key.png" alt="plus-key"/>      
      
      <a href='/newpost' style={{color:"white" }}>New Post</a>        
      </button>


          <div className='row'>
          <form className="bd-search hidden-sm-down ml-5" style={{ width:"500px"}}>
          <input
            className="form-control bg-graylight border-0 font-weight-bold"          
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <div
                className="dropdown-menu bd-search-results"
                id="search-results"
              ></div>
            </form>
          </div>


            
          </ul>
         

          <ul className="navbar-nav ml-auto align-items-center">
            
            <li className="nav-item">
              <a className="nav-link active" href="/login">
                <button type="button" class="btn btn-primary btn-sm">Sign In</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/register">
                <button type="button" class="btn btn-primary btn-sm">Sign Up</button>
              </a>
            </li>



            {/* <li className="nav-item">
              <a className="nav-link active" href="/">
              <img width="25" height="25" src="https://img.icons8.com/ios/50/comments--v1.png" alt="comments--v1"/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
              <img width="45" height="45" src="https://img.icons8.com/carbon-copy/100/bell--v2.png" alt="bell--v2"/>              </a>
            </li> */}


            {/* <li className="nav-item">
              <a className="nav-link" href="/post">
                Post
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/author">
                <img
                  className="rounded-circle mr-2"
                  src="assets/img/av.png"
                  width={30}
                />
                <span className="align-middle">abhishek1611</span>
              </a>
            </li>
            
            <li className="nav-item dropdown">
         
              <a
                className="nav-link"
                href="#"
                id="dropdown02"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  style={{ marginTop: 10 }}
                  className="_3DJPT"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width={21}
                  height={21}
                  aria-hidden="false"
                  data-reactid={71}
                >
                  <path
                    d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"
                    data-reactid={22}
                  />
                </svg>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow-lg"
                aria-labelledby="dropdown02"
              >

                <div className="dropdown-divider"></div>
                <span className="dropdown-item">
                 
                    <ul style={{ listStyle:"none"}}>
                    <li>
                      
                      
                       
                      
                      <a href=''>Post</a> </li>
                    <li>   <a href=''>Favourite</a> </li>
                    <li>  <a href=''>Comments</a></li>
                    <li>
                       <a href=''>About</a>
                    </li>
                    <li><button onClick={handleLogout}>Logout</button></li>

                    <li>               <a href=''>Images</a>
                    </li>
                    </ul>

                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>












</div>



    </>
  )
}
