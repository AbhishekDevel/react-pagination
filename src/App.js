import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import './style.css';

export default function App() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}
