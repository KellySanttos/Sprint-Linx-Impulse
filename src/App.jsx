import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ShareFriend from './components/ShareFriend/ShareFriend.jsx'
import './App.css'

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
