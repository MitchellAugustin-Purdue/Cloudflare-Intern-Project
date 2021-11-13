import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-type': 'application/json'
    }
    const getPosts = async () => {
      const resp = await fetch(
        "https://cloudsocial-internship.cloudsocial-internship-project.workers.dev/posts", headers
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);
  
  return (
    <div>
      <h1>Posts</h1>
      <hr/>
      {posts.reverse().map((post) => (
        <div key={post.id}>
          <img src={post.image} alt="No Image :(" height="80" width="80"></img>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <h3>{post.content}</h3>
          <p>-{post.username}, {new Date(post.published_at * 1).toLocaleString()}</p>
        <hr/>
        </div>
      ))}
    </div>
  )
};

export default Posts;
