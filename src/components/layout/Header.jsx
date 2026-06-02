/**
 * Header Component
 * Top navigation bar
 */

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-blue-600">
            Evently
          </Link>
          <div className="flex gap-4">
            <Link to="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            <Link to="/my-tickets" className="text-gray-600 hover:text-gray-900">
              My Tickets
            </Link>
            <Link to="/organizer" className="text-gray-600 hover:text-gray-900">
              Organizer
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
