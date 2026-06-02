import { useParams } from 'react-router-dom';

export default function CheckoutPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Checkout Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
