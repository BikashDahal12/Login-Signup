import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Calendar</li>
        <li>Task Time</li>
        <li>Task Graph</li>
        <li>New Task List</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
