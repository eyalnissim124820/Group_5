import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CultureSelection from './CultureSelection/CultureSelection';
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage';
import RecommendedBooks from './RecommendedBooks/RecommendedBooks';
import ChooseExperience from './ChooseExperience/ChooseExperience.jsx'
import SearchPage from './search/SearchPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="CultureSelection" element={<CultureSelection />} />
          <Route path="ChooseExperience" element={<ChooseExperience />} />
          <Route path="SearchPage" element={<SearchPage />} />
          <Route path="RecommendedBooks" element={<RecommendedBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
