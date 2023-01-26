import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CultureSelection from './CultureSelection/CultureSelection';
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage';
import RecommendedBooks from './RecommendedBooks/RecommendedBooks';
import ChooseExperience from './ChooseExperience/ChooseExperience.jsx'
import SearchPage from './search/SearchPage.jsx'
import BookPage from './BookPage/BookPage'

import logo from './attachments/logo.svg'
import logo_title from './attachments/softLanding.svg'
import noDesktop from './attachments/noDesktopPh.svg'
import iphonMock from './attachments/iphoneMock.svg'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="CultureSelection" element={<CultureSelection />} />
            <Route path="ChooseExperience" element={<ChooseExperience />} />
            <Route path="SearchPage" element={<SearchPage />} />
            <Route path="RecommendedBooks" element={<RecommendedBooks />} />
            <Route path="BookPage" element={<BookPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div id='dasktop-bg'>
        <div id='dtop-content'>
          <div className='topPage'>
            <img id='logo' src={logo} alt='logo' />
            <img id='logo_title' src={logo_title} alt='logo_title' />
          </div>
          <img id='noDesktop' src={noDesktop} alt='noDesktop' />
        </div>
          <img id='iphonMock' src={iphonMock} alt='iphonMock' />
      </div>
    </>
  );
}

export default App;
