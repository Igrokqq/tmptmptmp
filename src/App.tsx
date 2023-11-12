import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import BecomeALearner from './pages/BecomeALearner';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/become-a-learner" element={<BecomeALearner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
