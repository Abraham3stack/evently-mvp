/**
 * AuthGradientPanel Component
 * Right-side gradient panel for desktop auth layouts
 * Hidden on mobile/tablet
 */

export default function AuthGradientPanel({ children }) {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-500 via-pink-400 to-purple-600 flex-col items-center justify-center p-8">
      {children}
    </div>
  );
}
