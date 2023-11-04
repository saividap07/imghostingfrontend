"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts } from '@/redux/features/slice';
import Navbar from "../../navbar/page";

export default function Page({ params }) {
    console.log(params);
  const dispatch = useDispatch();
  const {getPostsForUser} = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(fetchUserPosts(params.user));
  }, [params.user]);

  console.log("getuser",getPostsForUser)
  return (
   <>
   
   <Navbar/>

   <main role="main">
  <div
    className="jumbotron border-round-0 min-50vh"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1522204657746-fccce0824cfd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84b5e9bea51f72c63862a0544f76e0a3&auto=format&fit=crop&w=1500&q=80)"
    }}
  ></div>
  <div className="container mb-4">
    <img
      src="assets/img/av.png"
      className="mt-neg100 mb-4 rounded-circle"
      width={128}
    />
    <h1 className="font-weight-bold title">Abhishek Gouda</h1>
  </div>



  <div className="container-fluid mb-5">
    <div className="row">




    <ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">POSTS</a>
	</li>
	
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="tabs-1" role="tabpanel" style={{ marginTop:"100px"}}>
  
                <div className='row'>

                <div className='col-md-3'>

                {getPostsForUser.posts && getPostsForUser.posts.map((post) => (
            <div className="card card-pin">
          <img
            className="card-img"
            src={`http://localhost:8000/img/${JSON.parse(
                post.photopath
              )[0]}`}
            alt="Card image"
            style={{ width:"1200px",height:"400px"}}
          />
          <div className="overlay">
            <h2 className="card-title title">{post.title}</h2>
            <div className="more">
              <a href="post.html">
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                More
              </a>
            </div>
          </div>
        </div>
 ))}

        
               </div>
          
                </div>
       
       
	</div>
	
</div>









    </div>
  </div>
</main>




   </>
  )
}
