import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SignIn, SignUp, Hero, Navbar, Subscription, Footer, Generator, Cards, Faqs } from './components';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div data-theme="luxury" className='justify-center items-center'>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<>
            <FadeInSection>
              <Navbar />
            </FadeInSection>
            <FadeInSection>
              <Hero />
            </FadeInSection>
            <FadeInSection>
              <Cards />
            </FadeInSection>
            <FadeInSection>
              <Subscription />
            </FadeInSection>
            <FadeInSection>
              <Faqs />
            </FadeInSection>
            <FadeInSection>
              <Footer />
            </FadeInSection>
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
