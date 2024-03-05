import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SignIn, SignUp, Hero, Navbar, Subscription, Footer, Generator, Cards, Faqs, Dashboard, Viewplan, Contact, AdminLogin, Admin, Message } from './components';
import { useInView } from 'react-intersection-observer';
import { Flight } from './components/canvas';

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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/view/:id' element={<Viewplan />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/view/message/:id' element={<Message />} />
          <Route path="/" element={<>
            <FadeInSection>
              <Navbar />
            </FadeInSection>

            <div className='grid grid-cols-2'>
              <FadeInSection>
                <Flight />
              </FadeInSection>
              <FadeInSection>
                <Hero />
              </FadeInSection>
            </div>

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
              <Contact />
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
