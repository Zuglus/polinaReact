import React from "react";

import Header from './components/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Portfolio />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
