import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, CheckCircle2 } from 'lucide-react';
import './TicketSelectionPage.css';

const placeholderImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="%23f472b6"/><stop offset="100%" stop-color="%237e22ce"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/><circle cx="70%" cy="35%" r="200" fill="%23ffffff" opacity="0.2"/><circle cx="25%" cy="75%" r="260" fill="%23ffffff" opacity="0.16"/></svg>';

const mockEvents = [
  {
    id: '1',
    title: 'Lagos Lights Concert',
    image: placeholderImage
  },
  {
    id: '2',
    title: 'Design Systems for Emerging Markets',
    image: placeholderImage
  },
  {
    id: '3',
    title: 'AI for Product Leaders',
    image: placeholderImage
  }
];

const ticketOptions = [
  {
    id: 'regular',
    title: 'Regular',
    description: 'Standard concert access',
    price: 'N 50,000',
    features: [
      'Main Hall Entry',
      'Email support',
      'CSV data export',
      'Basic analytics dashboard',
      '1,000 API calls per month'
    ]
  },
  {
    id: 'vip',
    title: 'VIP',
    description: 'Priority entry + premium experience',
    price: 'N 120,000',
    priceNote: '/per user',
    features: [
      'All starter features +',
      'Up to 5 user accounts',
      'Team collaboration tools',
      'Custom dashboards',
      'Multiple data export formats',
      'Basic custom integrations'
    ]
  },
  {
    id: 'vvip',
    title: 'VVIP',
    description: 'Ultimate concert luxury experience',
    price: 'N 300,000',
    priceNote: '/per user',
    features: [
      'All professional features +',
      'Enterprise security suite',
      'Single Sign-On (SSO)',
      'Custom contract terms',
      'Dedicated phone support',
      'Custom integration support',
      'Compliance tools'
    ]
  }
];

export default function TicketSelectionPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = useMemo(
    () => mockEvents.find(item => item.id === eventId) || mockEvents[0],
    [eventId]
  );
  const [selectedTier, setSelectedTier] = useState('vip');
  const [quantity, setQuantity] = useState(2);

  useEffect(() => {
    document.body.classList.add('ticket-select-body');
    return () => document.body.classList.remove('ticket-select-body');
  }, []);

  const handleIncrease = () => setQuantity(current => current + 1);
  const handleDecrease = () => setQuantity(current => Math.max(1, current - 1));

  const handleContinue = tierId => {
    setSelectedTier(tierId);
    navigate(`/events/${eventId}/payment`);
  };

  return (
    <div className="ticket-select-page">
      <div className="ticket-select-grid">
        <aside className="ticket-select-media">
          <img src={event.image || placeholderImage} alt={event.title} />
        </aside>
        <main className="ticket-select-content">
          <div className="ticket-select-top">
            <Link to={`/events/${eventId}`} className="ticket-back">
              <ChevronLeft size={18} />
              {event.title}
            </Link>
            <div className="ticket-quantity">
              <span>Quantity</span>
              <div className="quantity-control">
                <button type="button" onClick={handleDecrease} aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <strong>{String(quantity).padStart(2, '0')}</strong>
                <button type="button" onClick={handleIncrease} aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="ticket-select-header">
            <h1>Select Ticket Type</h1>
            <p>Choose how you want to experience the event</p>
          </div>

          <div className="ticket-card-grid">
            {ticketOptions.map(option => {
              const isSelected = option.id === selectedTier;
              return (
                <article
                  key={option.id}
                  className={`ticket-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedTier(option.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={eventKey => {
                    if (eventKey.key === 'Enter' || eventKey.key === ' ') {
                      setSelectedTier(option.id);
                    }
                  }}
                >
                  <div className="ticket-card-head">
                    <div>
                      <h2>{option.title}</h2>
                      <span>{option.description}</span>
                    </div>
                  </div>
                  <div className="ticket-card-price">
                    <strong>{option.price}</strong>
                    {option.priceNote && <span>{option.priceNote}</span>}
                  </div>
                  <ul>
                    {option.features.map(feature => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="ticket-cta"
                    onClick={eventClick => {
                      eventClick.stopPropagation();
                      handleContinue(option.id);
                    }}
                  >
                    Continue
                  </button>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
