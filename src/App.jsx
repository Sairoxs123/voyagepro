import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SignIn, SignUp, Hero, Navbar, Subscription, Footer, Generator } from './components';

function App() {

  return (
    <div data-theme="luxury" className='justify-center items-center h-screen'>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<>
            <Navbar />
            <Hero />
            <Subscription />
            <Footer />
          </>} />
          <Route path='/generator' element={<>
          <div className=''>
            <Navbar />
            <Generator />
          </div>
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
