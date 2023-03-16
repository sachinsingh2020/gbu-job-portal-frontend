import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/Login';
import Signup from './auth/Signup/Signup';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Education from './Sections/Education';
import Personal from './Sections/Personal';
import Teaching from './Sections/Teaching';
import Research from './Sections/Research';
import Conference from './Sections/Conference';
import General from './Sections/General';
import Applied from './Sections/Applied';
import PhdDetails from './Sections/PhdDetails';

const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  border: 'none',
  height: '100%',
  color: 'rgb(133,50,92)',
  backgroundColor: 'white',
  fontWeight: '500',
};

export const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

function App() {
  // const isAuthenticated = true;


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path='/personal' element={<Personal />} />
        <Route exact path='/applied' element={<Applied />} />
        <Route exact path='/education' element={<Education />} />
        <Route exact path='/teaching' element={<Teaching />} />
        <Route exact path='/research' element={<Research />} />
        <Route exact path='/conference' element={<Conference />} />
        <Route exact path='/general' element={<General />} />
        <Route exact path='/phddetails' element={<PhdDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
