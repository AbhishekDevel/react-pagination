import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import './style.css';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    getData();
  }, []);
  const indexofLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber)
  }
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}
