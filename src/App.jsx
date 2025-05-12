import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 text-center text-xl">Welcome to SUV Fortune Vision</main>
      <Footer />
    </div>
  )
}

export default App
