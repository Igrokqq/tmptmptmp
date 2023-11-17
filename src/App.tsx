import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import BecomeALearner from './pages/become-a-learner/BecomeALearner';
import BecomeAnExpert from "./pages/become-an-expert/BecomeAnExpert";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/become-a-learner/*" element={<BecomeALearner />} />
                    <Route path="/become-an-expert/*" element={<BecomeAnExpert />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
