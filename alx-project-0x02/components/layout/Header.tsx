import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className="bg-black-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>
      <nav className="bg-gray-700 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-white-700 hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white-700 hover:underline">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white-700 hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
