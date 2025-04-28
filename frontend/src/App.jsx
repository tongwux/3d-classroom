import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import IntroductionPage from './components/IntroductionPage';
import ClassroomPage from './components/ClassroomPage';
import MainClassroomPage from './components/MainClassroomPage';
import QuizRoom from './components/QuizRoom';
import DiscussionRoom from './components/DiscussionRoom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        <Route path="/main-classroom" element={<MainClassroomPage />} />
        <Route path="/quiz" element={<QuizRoom />} />
        <Route path="/discussion" element={<DiscussionRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
