/**
 * Card Component
 * Container for content grouping
 */

export default function Card({ title, children, onClick, className = '' }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${
        onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
      } ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="font-semibold text-lg mb-4 text-gray-900">{title}</h3>}
      {children}
    </div>
  );
}
