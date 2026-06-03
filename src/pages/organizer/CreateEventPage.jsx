import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import './CreateEventPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const ticketSchema = z.object({
  price: z.coerce.number().min(0, 'Price must be 0 or more'),
  capacity: z.coerce.number().min(0, 'Capacity must be 0 or more'),
  enabled: z.boolean()
});

const formSchema = z
  .object({
    eventName: z.string().min(1, 'Event name is required'),
    category: z.string().min(1, 'Category is required'),
    description: z.string().min(20, 'Description must be at least 20 characters'),
    banner: z.string().optional(),
    date: z.string().min(1, 'Event date is required'),
    startTime: z.string().min(1, 'Start time is required'),
    endTime: z.string().min(1, 'End time is required'),
    venue: z.string().min(1, 'Venue is required'),
    city: z.string().min(1, 'City is required'),
    address: z.string().min(1, 'Address is required'),
    promoCode: z.string().optional(),
    discount: z.preprocess(
      value => (value === '' ? undefined : Number(value)),
      z.number().min(0, 'Discount must be 0 or more').max(100, 'Max discount is 100').optional()
    ),
    tiers: z.object({
      earlyBird: ticketSchema,
      generalAdmission: ticketSchema,
      vip: ticketSchema
    })
  })
  .superRefine((values, ctx) => {
    const tiers = Object.values(values.tiers);
    const hasTier = tiers.some(tier => tier.enabled && tier.price > 0 && tier.capacity > 0);
    if (!hasTier) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'At least one ticket tier must have price and capacity',
        path: ['tiers']
      });
    }
  });

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tiers: {
        earlyBird: { price: 0, capacity: 0, enabled: true },
        generalAdmission: { price: 0, capacity: 0, enabled: true },
        vip: { price: 0, capacity: 0, enabled: true }
      }
    }
  });

  useEffect(() => {
    document.body.classList.add('organizer-create-event');
    return () => document.body.classList.remove('organizer-create-event');
  }, []);

  const onSubmit = () => {
    setSuccessMessage('Event published successfully. Redirecting...');
    setTimeout(() => navigate('/organizer/events'), 1200);
  };

  const handleSaveDraft = () => {
    setSuccessMessage('Draft saved successfully.');
  };

  return (
    <div className="organizer-create-event">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Manage Events" />
        <main className="org-content">
          <div className="create-event-title">
            <h1>Create New Event</h1>
          </div>

          {successMessage && <div className="success-banner">{successMessage}</div>}

          <form className="create-event-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="create-section">
              <h2>Basic Event Information</h2>
              <div className="create-grid">
                <div className="create-field">
                  <label htmlFor="eventName">Event Name</label>
                  <input id="eventName" {...register('eventName')} placeholder="Event name" />
                  {errors.eventName && <span className="form-error">{errors.eventName.message}</span>}
                </div>
                <div className="create-field">
                  <label htmlFor="category">Category</label>
                  <select id="category" {...register('category')}>
                    <option value="">Select category</option>
                    <option value="Tech">Tech</option>
                    <option value="Music">Music</option>
                    <option value="Business">Business</option>
                  </select>
                  {errors.category && <span className="form-error">{errors.category.message}</span>}
                </div>
                <div className="create-field" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="description">Event Description</label>
                  <textarea id="description" {...register('description')} placeholder="Describe your event" />
                  {errors.description && <span className="form-error">{errors.description.message}</span>}
                </div>
              </div>
              <div className="banner-upload" role="button" tabIndex={0}>
                <UploadCloud size={22} />
                Upload Event Banner
                <span>PNG, JPG up to 10MB</span>
              </div>
            </section>

            <section className="create-section">
              <h2>Date & Location</h2>
              <div className="create-grid">
                <div className="create-field">
                  <label htmlFor="date">Event Date</label>
                  <input id="date" type="date" {...register('date')} />
                  {errors.date && <span className="form-error">{errors.date.message}</span>}
                </div>
                <div className="create-field">
                  <label htmlFor="startTime">Start Time</label>
                  <input id="startTime" type="time" {...register('startTime')} />
                  {errors.startTime && <span className="form-error">{errors.startTime.message}</span>}
                </div>
                <div className="create-field">
                  <label htmlFor="endTime">End Time</label>
                  <input id="endTime" type="time" {...register('endTime')} />
                  {errors.endTime && <span className="form-error">{errors.endTime.message}</span>}
                </div>
                <div className="create-field">
                  <label htmlFor="venue">Venue Name</label>
                  <input id="venue" {...register('venue')} placeholder="Venue" />
                  {errors.venue && <span className="form-error">{errors.venue.message}</span>}
                </div>
                <div className="create-field">
                  <label htmlFor="city">City</label>
                  <input id="city" {...register('city')} placeholder="City" />
                  {errors.city && <span className="form-error">{errors.city.message}</span>}
                </div>
                <div className="create-field" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="address">Address</label>
                  <input id="address" {...register('address')} placeholder="Full address" />
                  {errors.address && <span className="form-error">{errors.address.message}</span>}
                </div>
              </div>
            </section>

            <section className="create-section">
              <h2>Ticket Tiers</h2>
              {errors.tiers && <span className="form-error">{errors.tiers.message}</span>}
              <div className="ticket-tier-grid">
                {[
                  { key: 'earlyBird', label: 'Early Bird' },
                  { key: 'generalAdmission', label: 'General Admission' },
                  { key: 'vip', label: 'VIP' }
                ].map(tier => (
                  <div key={tier.key} className="ticket-tier-card">
                    <div className="ticket-tier-header">
                      <strong>{tier.label}</strong>
                      <label className="tier-toggle">
                        <input type="checkbox" {...register(`tiers.${tier.key}.enabled`)} />
                        Available
                      </label>
                    </div>
                    <div className="create-grid">
                      <div className="create-field">
                        <label>Price</label>
                        <input type="number" min="0" {...register(`tiers.${tier.key}.price`)} />
                      </div>
                      <div className="create-field">
                        <label>Capacity</label>
                        <input type="number" min="0" {...register(`tiers.${tier.key}.capacity`)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="create-section">
              <h2>Promo Code</h2>
              <div className="create-grid">
                <div className="create-field">
                  <label htmlFor="promoCode">Promo Code</label>
                  <input id="promoCode" {...register('promoCode')} placeholder="PROMO2026" />
                </div>
                <div className="create-field">
                  <label htmlFor="discount">Discount (%)</label>
                  <input id="discount" type="number" min="0" max="100" {...register('discount')} />
                  {errors.discount && <span className="form-error">{errors.discount.message}</span>}
                </div>
              </div>
            </section>

            <div className="create-actions">
              <button type="button" className="org-btn org-btn-outline" onClick={handleSaveDraft}>
                Save Draft
              </button>
              <button type="submit" className="org-btn org-btn-primary">
                Publish Event
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
