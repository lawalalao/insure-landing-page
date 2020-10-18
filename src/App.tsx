import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Contents from './Content';
import Footer from './Footer';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Footer />
    </main>
  );
}

export default App;
