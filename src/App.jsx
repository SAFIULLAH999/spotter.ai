import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import FleetManagement from './pages/FleetManagement'
import Platform from './pages/Platform'
import Demo from './pages/Demo'
import './App.css'
import './pages/Pages.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/demo" element={<Demo />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
