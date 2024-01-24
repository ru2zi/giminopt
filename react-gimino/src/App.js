import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <section>
          <Sidebar />
          <ChatRoom />
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
