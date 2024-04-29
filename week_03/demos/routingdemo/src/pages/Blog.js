import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link to={`${ROUTES.blog.path}/${post.id}`} key={`post-${post.id}`}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
}
