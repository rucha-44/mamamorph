// src/components/TailoredWorkouts.js
import React from 'react';

const TailoredWorkouts = () => {
  const workouts = [
    { id: 1, title: 'Gentle Yoga for New Moms', content: 'Start with these gentle yoga poses...' },
    { id: 2, title: 'Postpartum Core Strengthening', content: 'Rebuild your core strength safely...' },
    // Add more workouts
  ];

  return (
    <div className="tailored-workouts">
      <h2>Tailored Workouts</h2>
      {workouts.map(workout => (
        <div key={workout.id} className="workout">
          <h3>{workout.title}</h3>
          <p>{workout.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TailoredWorkouts;
