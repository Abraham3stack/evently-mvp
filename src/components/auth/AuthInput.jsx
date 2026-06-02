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
  const inputStyle = {
    height: '56px',
    width: '100%',
    padding: '0 16px',
    borderRadius: '10px',
    border: `1px solid ${error ? '#ef4444' : '#9CA8BC'}`,
    backgroundColor: '#ffffff',
    color: '#111827',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          ...inputStyle,
          backgroundColor: disabled ? '#F9FAFB' : '#ffffff',
          color: disabled ? '#6B7280' : '#111827'
        }}
        {...props}
      />
      {error && (
        <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', fontWeight: 600 }}>{error}</p>
      )}
    </div>
  );
}
