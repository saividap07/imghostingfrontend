"use client"

import React, { useEffect } from 'react';
import Navbar from '../navbar/page';
import Category from '../category/page';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/redux/features/slice';

export default function testpage() {
  const { posts } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  const token = localStorage.getItem('uid');
  console.log(token);


  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    console.log("tokendata", token);

    // Include the token in the headers if it's available
    const headers = {
      Authorization: token ? `Bearer ${token}` : '',
    };

    // Use headers when making a request to your server
    dispatch(fetchPosts(headers));
  }, []);

  console.log(posts);

  return (
    <>
      <Navbar />
      <Category />

      <main role="main">
        <section className="mt-4 mb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="card-columns">
                {posts &&
                  posts.map((p) => (
                    <div className="card" key={p.pid}>
                      <a href={'/detail/' + p.pid}>
                        <img
                          className="card-img-top"
                          src={`http://localhost:8000/img/${JSON.parse(p.photopath)[0]}`}
                          alt="Card image cap"
                          style={{ height: "auto" }}
                        />
                      </a>
                      <div
                        className="card-body"
                        style={{ height: "100px", backgroundColor: "#63656B" }}
                      >
                        <div className="mb-5">
                          <p className="card-text text-white" style={{ fontSize: "14px" }}>
                            {p.title}
                          </p>
                          <hr />
                          <span style={{ fontSize: "13px", color: "#fff" }}>
                            <a href="#" id="icon-link">
                              <i className="fa fa-thumbs-up" aria-hidden="true" style={{ fontSize: "14px", color: "#fff" }}></i>
                            </a>
                            <span className="mx-1">2,877</span>
                          </span>
                          <span style={{ fontSize: "13px", color: "#fff" }}>
                            <i className="fa fa-comment ml-4" style={{ color: "#fff" }}></i>
                            <span className="mx-1">2k</span>
                          </span>
                          <span style={{ fontSize: "13px", color: "#fff" }}>
                            <i className="fa fa-eye ml-4" style={{ color: "#fff" }}></i>
                            <span className="mx-1">2,877</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
