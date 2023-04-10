import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Signup/Signup';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Education from './components/Sections/Education';
import Personal from './components/Sections/Personal';
import Teaching from './components/Sections/Teaching';
import Research from './components/Sections/Research';
import Conference from './components/Sections/Conference';
import General from './components/Sections/General';
import Applied from './components/Sections/Applied';
import PhdDetails from './components/Sections/PhdDetails';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user.js';
import { ProtectedRoute } from 'protected-route-react';
import FinalSubmit from './components/FinalSubmit/FinalSubmit';
import NotFound from './Layout/NotFound/NotFound';
import Loader from './components/Loader/Loader';
import Congratulations from './components/congratulations/Congratulations';


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


  const { isAuthenticated, user, message, error } = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <Router>
      {
          <>
            <Navbar />
            <Routes>
              <Route exact path="/login" element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/"
                >
                  <Login />
                </ProtectedRoute>} />
              <Route exact path="/signup" element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/"
                >
                  <Signup />
                </ProtectedRoute>} />
              <Route exact path="/" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Home user={user} />
                </ProtectedRoute>
              } />
              <Route exact path='/personal' element={
                <Personal />
              } />
              <Route exact path='/applied' element={<Applied />} />
              <Route exact path='/education' element={<Education />} />
              <Route exact path='/teaching' element={<Teaching />} />
              <Route exact path='/research' element={<Research />} />
              <Route exact path='/conference' element={<Conference />} />
              <Route exact path='/general' element={<General />} />
              <Route exact path='/phddetails' element={<PhdDetails />} />
              <Route exact path='/finalsubmit' element={<FinalSubmit />} />
              <Route exact path='/loader' element={<Loader/>} />
              <Route exact path='/congratulations' element={<Congratulations/>} />
              <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />
            <Toaster />
          </>
      }
    </Router>
  );
}

export default App;
