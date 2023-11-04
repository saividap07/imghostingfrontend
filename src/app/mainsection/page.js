"use client";

// card section

import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Category from "../category/page";
import { useDispatch, useSelector } from "react-redux";
import { addlike, fetchPosts, fetchLikes } from "@/redux/features/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { setSearchQuery } from "@/redux/features/slice";

export default function page() {
  const [isClicked, setIsClicked] = useState(false);

  const localUser = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const { posts, likedPosts } = useSelector((state) => state.postsReducer);


  //start search code 
  const searchQuery = useSelector((state) => state.postsReducer.searchQuery);

  

  // Filter the posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

// end search code



  if (localUser == null) {
    window.location.href = "/login";
  }

  useEffect(() => {
    dispatch(fetchLikes(localUser.id));
    dispatch(fetchPosts());
  }, []);

  const handleClick = (pid) => {
    const data = { postId: pid, userId: localUser.id };
    dispatch(addlike(data));
  };



  return (
    <>
      <Navbar />

      <Category />




      <main role="main">
        <section className="mt-4 mb-5">
          <div className="container-fluid">
           

            <div className="row">
              <div className="card-columns">
                {filteredPosts.map((p) => (
                  <div className="card" key={p.pid}>
                    <a href={"/detail/" + p.pid}>
                      <img
                        className="card-img-top"
                        src={`http://localhost:8000/img/${JSON.parse(
                          p.photopath
                        )[0]}`}
                        alt="Card image cap"
                        style={{ height: "auto" }}
                      />
                    </a>
                    <div
                      className="card-body"
                      style={{ height: "100px", backgroundColor: "#63656B" }}
                    >
                      <div className="mb-5">
                        <p
                          className="card-text text-white"
                          style={{ fontSize: "14px" }}
                        >
                          {p.title}
                        </p>
                        <hr />
                        <span style={{ fontSize: "13px", color: "#fff" }}>
                          <FontAwesomeIcon
                            type="button"
                            icon={faHeart}
                            onClick={() => handleClick(p.pid)}
                            className={
                              likedPosts && likedPosts.includes(p.pid)
                                ? "heart-clicked"
                                : "heart"
                            }
                          />
                          <span className="mx-1">2,877</span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#fff" }}>
                          <i
                            className="fa fa-comment ml-4"
                            style={{ color: "#fff" }}
                          ></i>
                          <span className="mx-1">2k</span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#fff" }}>
                          <i
                            className="fa fa-eye ml-4"
                            style={{ color: "#fff" }}
                          ></i>
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
