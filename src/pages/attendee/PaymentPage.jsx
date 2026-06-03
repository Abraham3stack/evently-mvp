import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Copy, Clock, CheckCircle2 } from 'lucide-react';
import './PaymentPage.css';

const placeholderImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="%23f472b6"/><stop offset="100%" stop-color="%237e22ce"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/><circle cx="70%" cy="35%" r="200" fill="%23ffffff" opacity="0.2"/><circle cx="25%" cy="75%" r="260" fill="%23ffffff" opacity="0.16"/></svg>';

const mockEvents = [
  { id: '1', title: 'Lagos Lights Concert', image: placeholderImage },
  { id: '2', title: 'Design Systems for Emerging Markets', image: placeholderImage },
  { id: '3', title: 'AI for Product Leaders', image: placeholderImage }
];

const transferDetails = {
  amount: '₦120,000',
  bankName: 'Wema Bank',
  accountNumber: '7820024511',
  accountName: 'Evently Tech Services'
};

export default function PaymentPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = useMemo(
    () => mockEvents.find(item => item.id === eventId) || mockEvents[0],
    [eventId]
  );
  const [timeLeft, setTimeLeft] = useState(300);
  const [copiedField, setCopiedField] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    document.body.classList.add('payment-body');
    return () => document.body.classList.remove('payment-body');
  }, []);

  useEffect(() => {
    // Countdown timer for account expiry
    if (timeLeft <= 0) {
      return undefined;
    }
    const timer = setInterval(() => {
      setTimeLeft(current => Math.max(0, current - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(1, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const handleCopy = async (value, field) => {
    // Copy-to-clipboard feedback
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 1500);
    } catch (error) {
      setCopiedField('');
    }
  };

  const handleVerify = () => {
    // Mock payment verification delay
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      navigate(`/events/${eventId}/ticket`);
    }, 1200);
  };

  return (
    <div className="payment-page">
      <div className="payment-grid">
        <aside className="payment-media">
          <img src={event.image || placeholderImage} alt={event.title} />
        </aside>
        <main className="payment-content">
          <div className="payment-top">
            <Link to={`/events/${eventId}/tickets`} className="payment-back">
              <ChevronLeft size={18} />
              Bank Transfer
            </Link>
          </div>

          <div className="payment-amount">
            <span>Amount to Transfer</span>
            <strong>{transferDetails.amount}</strong>
          </div>

          <div className="payment-timer">
            <div className="timer-icon">
              <Clock size={16} />
            </div>
            <div>
              <p>Account active for the next</p>
              <strong>{minutes}:{seconds}</strong>
            </div>
          </div>

          <section className="payment-card">
            <h2>TRANSFER TO THIS ACCOUNT</h2>
            <div className="payment-field">
              <span>Bank Name</span>
              <strong>{transferDetails.bankName}</strong>
            </div>
            <div className="payment-field highlight">
              <span>Account Number</span>
              <div className="payment-inline">
                <strong>{transferDetails.accountNumber}</strong>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(transferDetails.accountNumber, 'number')}
                >
                  <Copy size={14} />
                  {copiedField === 'number' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="payment-field">
              <span>Account Name</span>
              <div className="payment-inline">
                <strong>{transferDetails.accountName}</strong>
                <button
                  type="button"
                  className="copy-icon"
                  aria-label="Copy account name"
                  onClick={() => handleCopy(transferDetails.accountName, 'name')}
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </section>

          <section className="payment-how">
            <div className="how-header">
              <span className="how-dot">i</span>
              <strong>How it works:</strong>
            </div>
            <ol>
              <li>Copy the account number above</li>
              <li>Make a transfer of exactly {transferDetails.amount} from your bank app</li>
              <li>Return here and click "I have paid"</li>
            </ol>
          </section>

          <div className="payment-footer">
            <button
              type="button"
              className="payment-cta"
              onClick={handleVerify}
              disabled={isVerifying}
            >
              {isVerifying ? 'Verifying...' : (
                <>
                  <CheckCircle2 size={18} />
                  I have made this transfer
                </>
              )}
            </button>
            <p>Clicking this will verify your payment automatically</p>
          </div>
        </main>
      </div>
    </div>
  );
}
