/**
 * AuthLayout Component
 * Main layout wrapper for auth pages
 * Provides 50/50 split on desktop, centered on mobile
 */

export default function AuthLayout({ children, gradientContent, formMaxWidth = 520 }) {
  return (
    <div className="auth-layout" style={{ colorScheme: 'light' }}>
      {/* Left Section - White Background */}
      <div className="auth-panel-left">
        <div className="auth-form" style={{ maxWidth: `${formMaxWidth}px` }}>
          {children}
        </div>
      </div>

      {/* Right Section - Gradient Panel (Desktop only) */}
      {gradientContent && (
        <div className="auth-panel-right">
          {gradientContent}
        </div>
      )}
    </div>
  );
}
