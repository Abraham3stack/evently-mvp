import { Check } from 'lucide-react';

export default function NomineeCard({ nominee, isSelected, onSelect }) {
  return (
    <article className={`nominee-card ${isSelected ? 'selected' : ''}`}>
      <div className="nominee-avatar" aria-hidden="true">
        <span>{nominee.name.split(' ').map(word => word[0]).join('')}</span>
      </div>
      <div className="nominee-details">
        <div className="nominee-header">
          <h3>{nominee.name}</h3>
          <span className="nominee-category">{nominee.category}</span>
        </div>
        <p>{nominee.description}</p>
      </div>
      <div className="nominee-meta">
        <span className="nominee-votes">{nominee.votes.toLocaleString()} votes</span>
        <button type="button" className="nominee-vote-btn" onClick={() => onSelect(nominee.id)}>
          Vote
        </button>
      </div>
      {isSelected && (
        <div className="nominee-selected">
          <Check size={16} /> Selected
        </div>
      )}
    </article>
  );
}
