import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css'

import { Home } from './views/home';
import Studentdetail from './views/Studentdetail';

function StudentDetailWrapper() {
  const { stuId } = useParams(); // Extract stuId from URL parameters
  return <Studentdetail stuId={stuId} />; // Pass stuId as a prop to Studentdetail component
}

function App() {
  return (
    // <BrowserRouter> {/* Wrap your application with BrowserRouter */}
    // <Home />
    // <h1>Hello</h1>
    // </BrowserRouter>

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/account/accomplishments/verify/:stuId" element={<StudentDetailWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
