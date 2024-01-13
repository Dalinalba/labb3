// src/app/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Related Links</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        {/* Add more related links as needed */}
      </ul>

      <h2>Popular Articles</h2>
      <ul>
        <li><a href="#">Article 1</a></li>
        <li><a href="#">Article 2</a></li>
        <li><a href="#">Article 3</a></li>
        {/* Add more popular articles as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
