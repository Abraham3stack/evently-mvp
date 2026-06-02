/**
 * AuthLayout Component
 * Main layout wrapper for auth pages
 * Provides 50/50 split on desktop, centered on mobile
 */

export default function AuthLayout({ children, gradientContent }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex-1 w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 md:px-8 lg:px-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Section - Gradient Panel (Desktop only) */}
      {gradientContent && (
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-500 via-pink-400 to-purple-600 flex-col items-center justify-center p-8">
          {gradientContent}
        </div>
      )}
    </div>
  );
}
