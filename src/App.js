// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './components/Error';
import Registration from './components/Registration';
import Score from './components/Score';

import Video1 from './components/Videos/Video1.js';
import Video2 from './components/Videos/Video2.js';
import Video3 from './components/Videos/Video3.js';
import Video4 from './components/Videos/Video4.js';


import Question1 from './components/Questions/Question1.js';
import Question2 from './components/Questions/Question2.js';
import Question3 from './components/Questions/Question3.js';
import Question4 from './components/Questions/Question4.js';

import Instructions from './components/Instructions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route path="/Instructions" element={<Instructions />} />
            
            <Route path="/Video1" element={<Video1/>} />
            <Route path="/Video2" element={<Video2/>} />
            <Route path="/Video3" element={<Video3/>} />
            <Route path="/Video4" element={<Video4/>} />

            <Route path="/Question1" element={<Question1/>} />
            <Route path="/Question2" element={<Question2/>} />
            <Route path="/Question3" element={<Question3/>} />
            <Route path="/Question4" element={<Question4/>} />

            <Route path="/score" element={<Score />} />
            
            <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
