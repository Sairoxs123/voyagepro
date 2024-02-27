import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SignIn, SignUp, Hero, Navbar, Subscription, Footer, Generator } from './components';

function App() {
  const [theme, setTheme] = useState('cupcake');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'cupcake' ? 'luxury' : 'cupcake');
  };

  return (
    <div data-theme={theme} className='justify-center items-center'>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<>
            <Navbar toggleTheme={toggleTheme} />
            <Hero />
            <Subscription />
            <Footer />
          </>} />
          <Route path='/generator' element={<Generator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
