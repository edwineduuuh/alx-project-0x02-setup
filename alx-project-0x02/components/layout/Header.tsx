import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">My Application</h1>
        </header>
        <nav className="bg-gray-200 p-4">
            <ul className="flex space-x-4">
            <li><a href="/" className="text-blue-700 hover:underline">Home</a></li>
            <li><a href="/about" className="text-blue-700 hover:underline">About</a></li>
            <li><a href="/contact" className="text-blue-700 hover:underline">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
