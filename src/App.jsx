import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Products from './components/Products/Products.jsx';
import ShareFriend from './components/ShareFriend/ShareFriend.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Products />
      <ShareFriend />
      <Footer />
    </div>
  )
}

export default App
