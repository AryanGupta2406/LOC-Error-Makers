import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar2 from './components/Navbar2';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Courses from './pages/Courses';
import ProfileMain from './pages/ProfileMain';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      {/* <Home/> */}
      <Routes>
      <Route path='/community' element={<Community/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profilemain' element={<ProfileMain/>}/>
      



      </Routes>
    </div>
  );
}

export default App;
