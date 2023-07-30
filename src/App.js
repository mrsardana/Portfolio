import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar';
import ContactMe from './ContactMe';
// import Profile from './Profile';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return <>
    <Router>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/profile' element={<Profile />} /> */}
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<ContactMe />} />
          <Route exact path='*' element={<Home />} />
        </Routes>
        <Footer />
      </section>
    </Router>


  </>
}

export default App;
