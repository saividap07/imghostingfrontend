"use client"

import React, { useEffect } from 'react'
import Navbar from '../../navbar/page';
import { fetchParticularPost } from '@/redux/features/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function detailpage({params}) {

    console.log(params);
    const {detailPost} = useSelector((state)=>state.postsReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchParticularPost(params.user));
    },[])

    console.log(detailPost);
    console.log(detailPost.photopath);
    

  
    return (
        <>
        {/* <Navbar/> */}

            <div class="container mt-4">
            <h3 style={{ marginLeft: "20px" }}>{detailPost.title}</h3>

                <div class="row">

                   
                    <div className='col-md-8'>

                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span><b>{detailPost.username}</b></span> <br />
                                    <span>103,522 Views•21h</span>
                                </li>
                                <li class="list-group-item">
                                {detailPost.photopath ? (
  <img
    src={`http://localhost:8000/img/${JSON.parse(detailPost.photopath)[0]}`}
    alt="Card image cap"
    style={{ width: "100%" }}
  />
) : null}

                                    <span>
                                    <i class="fa fa-thumbs-up" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-comment ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-share ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    
                                </li>
                                
                                <li class="list-group-item">
                                    {detailPost.description}
                                </li>
                            </ul>
                        </div>





                        
            <div className="container bootdey">
  <div className="col-md-12 bootstrap snippets">
    <div className="panel">
      <div className="panel-body">
        <textarea
          className="form-control"
          rows={2}
          placeholder="comment ....."
          defaultValue={""}
        />
        <div className="mar-top clearfix">
          <button className="btn btn-sm btn-primary pull-right" type="submit">
            <i className="fa fa-pencil fa-fw" /> Share
          </button>
          <a
            className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
            href="#"
          />
          <a
            className="btn btn-trans btn-icon fa fa-camera add-tooltip"
            href="#"
          />
          <a
            className="btn btn-trans btn-icon fa fa-file add-tooltip"
            href="#"
          />
        </div>
      </div>
    </div>
    <div className="panel">
      <div className="panel-body">
        {/* Newsfeed Content */}
        {/*===================================================*/}
        <div className="media-block">
          <a className="media-left mx-3" href="#">
            <img
              className="img-circle img-sm"
              alt="Profile Picture"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
            />
          </a>
          <div className="media-body">
            <div className="mar-btm">
              <a
                href="#"
                className="btn-link text-semibold media-heading box-inline"
              >
                Lisa D.
              </a>
              <p className="text-muted text-sm">
                <i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min ago
              </p>
            </div>
            <p>
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <div className="pad-ver">
              <div className="btn-group">
                <a
                  className="btn btn-sm btn-default btn-hover-success"
                  href="#"
                >
                  <i className="fa fa-thumbs-up" />
                </a>
                <a className="btn btn-sm btn-default btn-hover-danger" href="#">
                  <i className="fa fa-thumbs-down" />
                </a>
              </div>
              <a className="btn btn-sm btn-default btn-hover-primary" href="#">
                Comment
              </a>
            </div>
            <hr />
            {/* Comments */}
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
</div>

                    </div>
                  

                </div>




                <div className='row'>

                    
                </div>
            </div>








        </>
    )
}


