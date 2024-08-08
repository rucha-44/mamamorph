import React from 'react';
import RecoveryGuides from './recoveryGuides';
import MentalHealthSupport from './mentalHealth';
import NutritionAdvice from './nutritionAdvice';
import ExpertResources from './expertResources';
import CommunityForum from './communityForum';
import TailoredWorkouts from './tailoredWorkouts';
import GuidedMeditations from './guidedMeditations';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          
          <h1>MamaMorph Postpartum Care</h1>
        </div>
      </header>
      <main className="App-main">
        <RecoveryGuides />
        <MentalHealthSupport />
        <NutritionAdvice />
        <ExpertResources />
        <CommunityForum />
        <TailoredWorkouts />
        <GuidedMeditations />
      </main>
    </div>
  );
}

export default App;
