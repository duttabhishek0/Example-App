import './App.css';
import UniversityList from './components/UniversityList';
import Favourites from './components/FavoriteUniversity';
import ColorSchemesExample from './components/Navbar/Navbar';

import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ColorSchemesExample/>
      <Routes>
        <Route path='/' element={ <UniversityList/>} />
        <Route path='/Favourites' element={ <Favourites/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
