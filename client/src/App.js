import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar2 from './components/Navbar2';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import ProfileMain from './pages/ProfileMain'
import Gallery from './pages/Gallery';
import Popular from './pages/Popular';
function App() {
  return (
    <div className="App">
                  {/* <Navbar2 /> */}

      {/* <PhoneIcon /> */}
      {/* 
      
      */}
      <Routes>

      <Route path='/community' element={<Community/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/profilemain' element={<ProfileMain/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/popular' element={<Popular/>}/>

      </Routes>
    </div>
  );
}
export default App;
