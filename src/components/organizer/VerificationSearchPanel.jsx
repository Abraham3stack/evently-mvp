import { useState } from 'react';
import { Search, QrCode } from 'lucide-react';

export default function VerificationSearchPanel({ onSearch, onScan }) {
  const [query, setQuery] = useState('');

  return (
    <div className="verify-search-panel">
      <div className="verify-input">
        <Search size={18} />
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Enter ticket ID, QR ID or phone"
        />
        <button type="button" className="verify-input-btn" aria-label="Search">
          <Search size={16} />
        </button>
      </div>
      <button type="button" className="verify-search-btn" onClick={() => onSearch(query)}>
        Search
      </button>
      <div className="verify-or">OR</div>
      <button type="button" className="verify-scan-btn" onClick={onScan}>
        <QrCode size={18} />
        Scan QR Code Instead
      </button>
    </div>
  );
}
