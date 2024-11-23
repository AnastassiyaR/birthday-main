import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from './MainPage.js';
import RunningPage from './RunningPage.js';
import SuprisePage from './SuprisePage.js';
import WorkingPage from './WorkingPage.js';
import SupportPage from './SupportPage.js';
import WorryingPage from './WorryingPage.js';
import ProudPage from './ProudPage.js';
import RealPage from './RealPage.js';
import myLogo from './assets/heart_blue.png'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence>
          <header>
            <img src={myLogo} alt="My Logo" className="App-logo" />
          </header>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/running" element={<RunningPage />} />
            <Route path="/suprise" element={<SuprisePage />} />
            <Route path="/working" element={<WorkingPage />} />
            <Route path="/worrying" element={<WorryingPage />} />
            <Route path="/proud" element={<ProudPage />} />
            <Route path="/real" element={<RealPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;