// src/components/MentalHealthSupport.js
import React from 'react';

const MentalHealthSupport = () => {
  const resources = [
    { id: 1, title: 'Dealing with Postpartum Depression', content: 'Understand the signs and how to seek help...' },
    { id: 2, title: 'Managing Anxiety as a New Mom', content: 'Tips and strategies to cope with anxiety...' },
    // Add more resources
  ];

  return (
    <div className="mental-health-support">
      <h2>Mental Health Support</h2>
      {resources.map(resource => (
        <div key={resource.id} className="resource">
          <h3>{resource.title}</h3>
          <p>{resource.content}</p>
        </div>
      ))}
      <div className="support-contacts">
        <h3>Support Contacts</h3>
        <p>Hotline: 1-800-123-4567</p>
        <p>Email: support@mamamorph.com</p>
      </div>
    </div>
  );
};

export default MentalHealthSupport;
