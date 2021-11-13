import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-type': 'application/json'
    }
    const getPost = async () => {
      const resp = await fetch(
        `https://cloudsocial-internship.cloudsocial-internship-project.workers.dev/posts/${id}`, headers
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  console.log(post.published_at * 1)
  console.log(new Date(post.published_at * 1).toLocaleString("en-US"))
  return (
    <div>
      <img src={post.imageurl} alt="No Image :(" height="80" width="80"></img>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
      <p>{post.content}</p>
      <p>
        <em>Published by {post.username} at {new Date(post.published_at * 1).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
