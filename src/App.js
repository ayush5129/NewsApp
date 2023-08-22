import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={'3px'}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key='general' pageSize={12} country="in" category="general" />}></Route>
          <Route path="/Business" element={<News setProgress={setProgress} key='business' pageSize={12} country="in" category="business" />}></Route>
          <Route path="/Entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={12} country="in" category="entertainment" />}></Route>
          <Route path="/General" element={<News setProgress={setProgress} key='general' pageSize={12} country="in" category="general" />}></Route>
          <Route path="/Health" element={<News setProgress={setProgress} key='health' pageSize={12} country="in" category="health" />}></Route>
          <Route path="/Science" element={<News setProgress={setProgress} key='science' pageSize={12} country="in" category="science" />}></Route>
          <Route path="/Sports" element={<News setProgress={setProgress} key='sports' pageSize={12} country="in" category="sports" />}></Route>
          <Route path="/Technology" element={<News setProgress={setProgress} key='technology}>' pageSize={12} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;

