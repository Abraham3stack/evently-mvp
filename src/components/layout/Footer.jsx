/**
 * Footer Component
 * Bottom footer
 */

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              Evently - Event Discovery and Ticketing Platform
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-gray-600">support@evently.com</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Evently. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
