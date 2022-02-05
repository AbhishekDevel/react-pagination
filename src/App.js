import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import './style.css';

export default function App() {
  return(
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts />
    </div>
  );
}
