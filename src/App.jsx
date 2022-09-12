import { useState } from 'react'
import ShareFriend from './components/ShareFriend/ShareFriend';
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
