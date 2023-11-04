
"use client"
import { useDispatch, useSelector } from 'react-redux';
import { addpost,setTitle,setDescription,setPhoto} from '@/redux/features/slice';

import React, { useState,useEffect } from 'react';
import Navbar from "../navbar/page";
export default function Page() {
  const [cards, setCards] = useState([0]);

  const handleAddCard = () => {
    setCards([...cards, cards.length]);
  };

  const handleDeleteAllPosts = () => {
    if (cards.length > 1) {
      setCards([0]);
    }
  };

  const handleDeleteCard = (index) => {
    if (cards.length > 1) {
      const updatedCards = cards.filter((_, i) => i !== index);
      setCards(updatedCards);
    }
  };

  const handleImageChange = (files)=>{
    const fileList = Array.from(files);
    dispatch(setPhoto(fileList));
  }






  // const {title,description,photopath} = useSelector((state)=>state.post);

  const {title,description,photopath} = useSelector((state)=>state.postsReducer);

  const dispatch = useDispatch();
  

  
  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = {
      title:title,
      description:description,
      photopath:photopath,
   
    };
    dispatch(addpost(data));
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#26333D", color: "#fff", paddingTop: "500px", paddingBottom: "500px" }}>
        <div className="container-fluid" >
          <div className='row' style={{ marginTop: "-500px" }}>
            {cards.map((cardIndex, index) => (
              <div className='col-md-8 mt-5' key={cardIndex} >
              <h6><b>Upload Post</b></h6>

              <form method="post" action="/upload" enctype="multipart/form-data">


                <div className="card">

                  <div className="card-header">

                    <input
                      type="text"
                      name="title"
                      id=""
                      className="form-control"
                      placeholder="Enter card title..."
                      style={{ border: "none" }}
                      onChange={(e)=>dispatch(setTitle(e.target.value))}
                    />
                  </div>
                  <ul className="list-group list-group-flush mt-5" style={{ height: "150px" }}>
                  <input
                      type="file"
                      name="photopath"
                      accept="image/*"
                      id="basic-icon-default-email"
                      multiple
                      onChange={(e)=>handleImageChange(e.target.files)} // Use e.target.files to get selected files
                    />


                  </ul>
                  <div className="card-header">
                    <input
                      type="text"
                      name="description"
                      id=""
                      className="form-control"
                      placeholder="Enter card Description..."
                      style={{ border: "none" }}
                      onChange={(e)=>dispatch(setDescription(e.target.value))}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() => handleDeleteCard(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-light m-1 mt-3">Post</button>
</form>

               
              </div>





            ))}

            <div className='col-md-4 mt-5'>
              <div className="fixed-right">

                <div class="container mt-4">
                  <h6>ADD TAGS</h6>
                  <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">+ TAG
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu p-2">
                      <li><a href="#">Phantom</a></li>
                      <li><a href="#">Cluster</a></li>
                    </ul>
                  </div>

                  <div className='mt-5'>
                    <p><b>IMG TOOLS</b></p>
                    <ul>
                      <li style={{ marginLeft:"-26px" }}><span>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                       <a href='' className='ml-2'>Add more images</a></span>
                      </li>
                    
                    <li style={{ marginLeft:"-26px" }}>
                      <span><i class="fa fa-download"></i>
                        <a href='' className='ml-2'>Download Post</a></span>
                    </li>
                    <li style={{ marginLeft:"-26px" }}> <span><i class="fa fa-trash-o"></i>
                      <a href='' className='ml-2'>Add more images</a></span></li>
                      </ul>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
