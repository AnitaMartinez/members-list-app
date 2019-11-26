import React from 'react'
import MembersListConnected from './connectedComponents/MembersListConnected'
import './App.scss'
import Logo from './assets/images/logo.png'

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="content-header">
          <img src={Logo} alt="Logo Mediasmart" className="logo"></img>
          <h1 className="title">Members</h1>
        </div>
      </header>
      <main className="Main">
        <MembersListConnected/>
      </main>
    </div>
  )
}

export default App
