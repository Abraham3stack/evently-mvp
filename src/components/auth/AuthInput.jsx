/**
 * AuthInput Component
 * Reusable form input with error handling
 */

export default function AuthInput({
  label,
  type = 'text',
  placeholder,
  error,
  disabled = false,
  ...props
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        <span className="text-red-500">*</span>{label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{ backgroundColor: '#ffffff', color: '#111827' }}
        className={`w-full px-4 py-3 border rounded-lg text-base text-gray-900 placeholder-gray-400 transition-all duration-200 ${
          error
            ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500'
            : 'border-gray-300 focus:ring-2 focus:ring-pink-200 focus:border-pink-500'
        } focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-500`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>
      )}
    </div>
  );
}
