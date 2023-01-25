import './App.css';
import CultureSelection from './CultureSelection/CultureSelection';
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage';
import RecommendedBooks from './RecommendedBooks/RecommendedBooks';

function App() {
  return (
    <div className="App">
      {/* <CultureSelection /> */}
      {/* <ChooseExperience /> */}
      <RecommendedBooks />
    </div>
  );
}

export default App;
