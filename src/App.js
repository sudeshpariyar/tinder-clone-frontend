import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      {/* Header */}
      <TinderCards/>
      {/* TinderCards */}
      <SwipeButton/>
      {/* swipe button */}
    </div>
  );
}

export default App;
