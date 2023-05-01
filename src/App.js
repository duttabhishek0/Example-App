import './App.css';
import UniversityList from './components/UniversityList';
import Favourites from './components/FavoriteUniversity';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   {/* <UniversityList /> */}
    //   <UniversityList/>
    // </div>
    <Router>
      <Navbar/>
        <Routes>Favourites
          <Route path = '/UniversityList' exact component={UniversityList} />
          <Route path = '/Favourites' exact component={Favourites} />
        </Routes>
    </Router>
  );
}

export default App;
