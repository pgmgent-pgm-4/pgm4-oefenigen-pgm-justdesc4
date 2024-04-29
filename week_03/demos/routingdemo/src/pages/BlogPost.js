import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      {post && (
        <>
          <h2>{post?.title}</h2>
          <p>{post?.tags.join(" - ")}</p>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
}
