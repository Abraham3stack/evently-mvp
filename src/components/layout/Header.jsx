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
          <Link to="/" className="font-bold text-xl text-pink-600">
            Evently
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <Link to="/#top" className="hover:text-gray-900">Home</Link>
            <Link to="/#features" className="hover:text-gray-900">Features</Link>
            <Link to="/#how-it-works" className="hover:text-gray-900">How It Works</Link>
            <Link to="/#contact" className="hover:text-gray-900">Contact Us</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link
              to="/organizer/create-event"
              className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
