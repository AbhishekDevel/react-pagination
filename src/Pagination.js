import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const totalPage = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    totalPage.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {totalPage.map((page,index) => {
          return(<li key={index} className="page-item"><a onClick={()=> paginate(page)}className="page-link">{page}</a></li>)
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
