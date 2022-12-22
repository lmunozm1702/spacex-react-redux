import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import getMissions from './missions/missionsAPI';
import getRockets from './rockets/getRocketsAPI';
import store from './ConfigStore';
import Navbar from './navbar/Navbar';
import Missions from './missions/Missions';
import MyProfile from './myprofile/MyProfile';
import Rockets from './rockets/Rockets';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(getRockets());
    store.dispatch(getMissions());
  }, []);

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
