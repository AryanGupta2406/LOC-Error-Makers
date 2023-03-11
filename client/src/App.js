import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar2 from './components/Navbar2';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Quest from './pages/Quest';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      {/* <Home/> */}
      <Routes>
      <Route path='/community' element={<Community/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/quest' element={<Quest/>}/>
      <Route path='/home' element={<Home/>}/>


      </Routes>
    </div>
  );
}

export default App;
