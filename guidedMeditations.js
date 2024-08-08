// src/components/GuidedMeditations.js
import React from 'react';

const GuidedMeditations = () => {
  const meditations = [
    { id: 1, title: '10-Minute Relaxation Meditation', videoUrl: 'https://www.example.com/meditation1' },
    { id: 2, title: 'Mindfulness for New Moms', videoUrl: 'https://www.example.com/meditation2' },
    // Add more meditations
  ];

  return (
    <div className="guided-meditations">
      <h2>Guided Meditations</h2>
      {meditations.map(meditation => (
        <div key={meditation.id} className="meditation">
          <h3>{meditation.title}</h3>
          <iframe src={meditation.videoUrl} title={meditation.title} frameBorder="0"></iframe>
        </div>
      ))}
    </div>
  );
};

export default GuidedMeditations;
