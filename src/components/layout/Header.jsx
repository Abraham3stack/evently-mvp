/**
 * Header Component
 * Top navigation bar
 */

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="font-bold text-xl text-pink-600 no-underline">
            Evently
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <Link to="/#top" className="hover:text-gray-900 no-underline">Home</Link>
            <Link to="/#features" className="hover:text-gray-900 no-underline">Features</Link>
            <Link to="/#how-it-works" className="hover:text-gray-900 no-underline">How It Works</Link>
            <Link to="/#contact" className="hover:text-gray-900 no-underline">Contact Us</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900 no-underline">
              Login
            </Link>
            <Link
              to="/organizer/create-event"
              className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700 no-underline"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" aria-hidden="true" />
    </header>
  );
}
