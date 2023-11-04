"use client"

import React, { useState } from 'react';

export default function Page() {
  const [isContentVisible, setIsContentVisible] = useState(false); // Initially visible

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <h4 className='text-center mt-5 mb-5'>
        <b>Life is what happens when you're busy making memes. EXPLORE TAGS</b>
      </h4>
     

      <div className='container'>
      <div className='row my-1'>
  <div className='col-md-6'>
    <h5>EXPLORE TAGS</h5>
  </div>
  <div className='col-md-6 text-right'>
    <button
      type="button"
      className="btn btn-sm btn-primary mb-2"
      onClick={toggleContent}
    >
      {isContentVisible ? 'LESS TAGS' : 'MORE TAGS'} <span style={{ color:"#fff",fontSize:"25px" }}>+</span>
    </button>
  </div>
</div>

<div className='row'>
    
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>

 
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>

 
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>
<div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
</div>






</div>


      {isContentVisible && (
        <div className='row g-0'>
        
           
          
           <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>
            <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>
            
           <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>
            <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>
            
           <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>
            <div className='col-md-2'>
              <figure>
                <picture>
                  <img
                    src="../assets/img/cardimg.jpg"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                  />
                </picture>
                <figcaption className='text-center'>
                  <img
                    src="../assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>2023 Halloween contest</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      <b>1,785 Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
            </div>



         
        </div>
 )}
       
      </div>
    </>
  );
}
