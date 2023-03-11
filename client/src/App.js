import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar2 from './components/Navbar2';
import Community from './pages/Community';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Navbar2 />
      
      <Routes>
      <Route path='/community' element={<Community/>}/>
      <Route path='/profile' element={<Profile/>}/>
      

      </Routes>
    </div>
  );
}

export default App;
