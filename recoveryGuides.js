// src/components/RecoveryGuides.js
import React from 'react';

const RecoveryGuides = () => {
  const guides = [
    { id: 1, title: 'Postpartum Recovery Basics', content: 'Your body needs time to recover after giving birth...' },
    { id: 2, title: 'Pelvic Floor Exercises', content: 'Strengthen your pelvic muscles with these exercises...' },
    // Add more guides as needed
  ];

  return (
    <div className="recovery-guides">
      <h2>Recovery Guides</h2>
      {guides.map(guide => (
        <div key={guide.id} className="guide">
          <h3>{guide.title}</h3>
          <p>{guide.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RecoveryGuides;
