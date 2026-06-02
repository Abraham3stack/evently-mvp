/**
 * AuthLayout Component
 * Main layout wrapper for auth pages
 * Provides 50/50 split on desktop, centered on mobile
 */

export default function AuthLayout({ children, gradientContent }) {
  return (
    <div 
      className="min-h-screen w-full flex flex-col lg:flex-row bg-white" 
      style={{ 
        backgroundColor: '#ffffff',
        color: '#111827'
      }}
    >
      {/* Left Section - White Background */}
      <div 
        className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-16 md:px-10 lg:px-16 bg-white" 
        style={{ 
          backgroundColor: '#ffffff',
          color: '#111827'
        }}
      >
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>

      {/* Right Section - Gradient Panel (Desktop only) */}
      {gradientContent && (
        <div 
          className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-500 via-pink-400 to-purple-600 flex-col items-center justify-center p-8 md:p-12" 
          style={{ color: '#ffffff' }}
        >
          {gradientContent}
        </div>
      )}
    </div>
  );
}
