import React from 'react'
import MembersConnected from './MembersConnected';
import './App.scss'
import Logo from './assets/images/logo.png'

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={Logo} alt="Logo Mediasmart" className="logo"></img>
        <h1 className="title">Members</h1>
      </header>
      <main className="Main">
        <MembersConnected/>
      </main>
    </div>
  );
}

export default App
