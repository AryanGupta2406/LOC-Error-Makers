import './App.css';
import { Route, Routes } from 'react-router-dom'

import Community from './pages/Community';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Courses from './pages/Courses'
import ProfileMain from './pages/ProfileMain'
import Gallery from './pages/Gallery'
import Quest from './pages/Quest'
import Overview from './pages/Overview'

function App() {
  return (
    <div className="App">
      {/* <Navbar2 /> */}

      <Routes>

        <Route path='/community' element={<Community />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/home' element={<Home />} />
        <Route path='' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/profilemain' element={<ProfileMain />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/quest' element={<Quest />} />
        <Route path='/overview' element={<Overview />} />


      </Routes>
    </div>
  );
}
export default App;
