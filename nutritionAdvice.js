// src/components/NutritionAdvice.js
import React from 'react';

const NutritionAdvice = () => {
  const nutritionTips = [
    { id: 1, title: 'Foods to Boost Energy', content: 'Include these superfoods in your diet to stay energized...' },
    { id: 2, title: 'Healthy Snacks for Busy Moms', content: 'Quick and nutritious snacks you can prepare...' },
    // Add more tips
  ];

  return (
    <div className="nutrition-advice">
      <h2>Nutrition Advice</h2>
      {nutritionTips.map(tip => (
        <div key={tip.id} className="tip">
          <h3>{tip.title}</h3>
          <p>{tip.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NutritionAdvice;
