import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Rockets from './rockets/Rockets';
import Missions from './missions/Missions';
import MyProfile from './myprofile/MyProfile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
