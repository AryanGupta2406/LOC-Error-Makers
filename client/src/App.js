import './App.css';
import {Route,Routes} from 'react-router-dom'

import Community from './pages/Community';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Courses from './pages/Courses'
import ProfileMain from './pages/ProfileMain'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'

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
      <Route path=' ' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/profilemain' element={<ProfileMain/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

      




      </Routes>
    </div>
  );
}
export default App;
