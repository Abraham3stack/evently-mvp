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
    <div className="mb-4 md:mb-5">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-pink-500'
        } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
