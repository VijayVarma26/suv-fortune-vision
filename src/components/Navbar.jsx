import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">SUV Fortune Vision</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
      </div>
    </nav>
  )
}
