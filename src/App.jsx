import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import FleetManagement from './pages/FleetManagement'
import Platform from './pages/Platform'
import Demo from './pages/Demo'
import Lens from './pages/Lens'
import TMS from './pages/TMS'
import Sentinel from './pages/Sentinel'
import Extension from './pages/Extension'
import SpotterApp from './pages/SpotterApp'
import LoanCalculators from './pages/LoanCalculators'
import Insights from './pages/Insights'
import './App.css'
import './pages/Pages.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lens" element={<Lens />} />
          <Route path="/tms" element={<TMS />} />
          <Route path="/sentinel" element={<Sentinel />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/spotter-app" element={<SpotterApp />} />
          <Route path="/loan-calculators" element={<LoanCalculators />} />
          <Route path="/insights" element={<Insights />} />
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
