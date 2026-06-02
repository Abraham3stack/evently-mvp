/**
 * AuthLogo Component
 * Consistent branding for all auth pages
 */

export default function AuthLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span
        style={{
          fontSize: '28px',
          fontWeight: 700,
          background: 'linear-gradient(90deg, #ec4899 0%, #7e22ce 100%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        Evently
      </span>
    </div>
  );
}
