import React, { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <>
    <ul className="list-group mb-4">
      {posts &&
        posts.map((post) => {
          return(
            <li key={post.id} className="list-group-item">{post.title}</li>
          );
        })}
    </ul>
    </>
  );
}
