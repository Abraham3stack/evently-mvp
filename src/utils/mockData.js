/**
 * Mock Event Data
 * Realistic event examples for MVP demonstration
 */

export const mockEvents = [
  {
    id: 'evt-001',
    title: 'React Advanced Workshop 2026',
    description: 'Learn advanced React patterns, hooks, state management, and performance optimization. Perfect for intermediate to advanced React developers.',
    category: 'Technology',
    location: 'San Francisco, CA',
    venue: 'Tech Hub Downtown',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    date: '2026-06-15T09:00:00Z',
    endDate: '2026-06-15T17:00:00Z',
    organizer: {
      id: 'org-001',
      name: 'TechStart Academy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-001',
        name: 'General Admission',
        price: 49.99,
        quantity: 100,
        sold: 45,
        description: 'Standard workshop access'
      },
      {
        id: 'tier-002',
        name: 'VIP + Lunch',
        price: 99.99,
        quantity: 30,
        sold: 12,
        description: 'Includes meals and networking session'
      }
    ],
    capacity: 150,
    attendeeCount: 57,
    tags: ['React', 'JavaScript', 'Web Development', 'Workshop'],
    featured: true,
    priceRange: { min: 49.99, max: 99.99 },
    status: 'upcoming'
  },
  {
    id: 'evt-002',
    title: 'Summer Music Festival 2026',
    description: 'Three days of live music featuring 50+ artists across multiple genres. Food trucks, art installations, and camping available.',
    category: 'Music',
    location: 'Austin, TX',
    venue: 'Zilker Park',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop',
    date: '2026-07-10T12:00:00Z',
    endDate: '2026-07-12T23:59:00Z',
    organizer: {
      id: 'org-002',
      name: 'Live Events Co',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-003',
        name: 'Single Day Pass',
        price: 79.99,
        quantity: 500,
        sold: 324,
        description: 'One day access'
      },
      {
        id: 'tier-004',
        name: '3-Day Festival Pass',
        price: 199.99,
        quantity: 200,
        sold: 145,
        description: 'Full weekend access'
      },
      {
        id: 'tier-005',
        name: 'VIP Festival Pass',
        price: 349.99,
        quantity: 50,
        sold: 28,
        description: 'Premium camping + fast entry'
      }
    ],
    capacity: 5000,
    attendeeCount: 497,
    tags: ['Music', 'Festival', 'Live Entertainment', 'Outdoor'],
    featured: true,
    priceRange: { min: 79.99, max: 349.99 },
    status: 'upcoming'
  },
  {
    id: 'evt-003',
    title: 'Sunday Service - Grace Community Church',
    description: 'Weekly Sunday worship service. Family-friendly, all ages welcome. Coffee and refreshments after service.',
    category: 'Church',
    location: 'Denver, CO',
    venue: 'Grace Community Church',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    date: '2026-06-08T09:30:00Z',
    endDate: '2026-06-08T11:00:00Z',
    organizer: {
      id: 'org-003',
      name: 'Grace Community Church',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-006',
        name: 'General Admission',
        price: 0,
        quantity: 500,
        sold: 150,
        description: 'Free admission'
      }
    ],
    capacity: 500,
    attendeeCount: 150,
    tags: ['Religious', 'Community', 'Family-Friendly', 'Weekly'],
    featured: false,
    priceRange: { min: 0, max: 0 },
    status: 'upcoming'
  },
  {
    id: 'evt-004',
    title: 'Tech Startup Meetup - June 2026',
    description: 'Network with fellow entrepreneurs and founders. Hear pitches from 3 early-stage startups and enjoy networking drinks.',
    category: 'Technology',
    location: 'New York, NY',
    venue: 'WeWork Manhattan',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    date: '2026-06-20T18:00:00Z',
    endDate: '2026-06-20T21:00:00Z',
    organizer: {
      id: 'org-004',
      name: 'NY Startup Community',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-007',
        name: 'Attendee',
        price: 25.00,
        quantity: 80,
        sold: 56,
        description: 'Includes food and drinks'
      },
      {
        id: 'tier-008',
        name: 'Founder/Startup',
        price: 0,
        quantity: 10,
        sold: 3,
        description: 'Complimentary for founders'
      }
    ],
    capacity: 100,
    attendeeCount: 59,
    tags: ['Startup', 'Networking', 'Entrepreneurship', 'Technology'],
    featured: false,
    priceRange: { min: 0, max: 25.00 },
    status: 'upcoming'
  },
  {
    id: 'evt-005',
    title: 'Tech Career Fair 2026',
    description: 'Meet 40+ tech companies hiring: Google, Microsoft, Amazon, and more. Bring your resume and network with recruiters.',
    category: 'Career',
    location: 'Boston, MA',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    date: '2026-07-01T10:00:00Z',
    endDate: '2026-07-01T16:00:00Z',
    organizer: {
      id: 'org-005',
      name: 'Career Connect Events',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-009',
        name: 'Job Seeker',
        price: 15.00,
        quantity: 1000,
        sold: 234,
        description: 'Full day access'
      }
    ],
    capacity: 1500,
    attendeeCount: 234,
    tags: ['Career', 'Jobs', 'Networking', 'Tech'],
    featured: false,
    priceRange: { min: 15.00, max: 15.00 },
    status: 'upcoming'
  },
  {
    id: 'evt-006',
    title: 'Fashion Week Gala 2026',
    description: 'Exclusive fashion showcase featuring emerging designers. Red carpet photography, cocktail reception, and live entertainment.',
    category: 'Fashion',
    location: 'Los Angeles, CA',
    venue: 'Downtown LA Event Space',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=300&fit=crop',
    date: '2026-07-22T19:00:00Z',
    endDate: '2026-07-22T23:00:00Z',
    organizer: {
      id: 'org-006',
      name: 'LA Fashion Collective',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-010',
        name: 'General Admission',
        price: 89.99,
        quantity: 150,
        sold: 98,
        description: 'Show + reception'
      },
      {
        id: 'tier-011',
        name: 'VIP - Front Row',
        price: 249.99,
        quantity: 30,
        sold: 22,
        description: 'Front row + champagne + after party'
      }
    ],
    capacity: 200,
    attendeeCount: 120,
    tags: ['Fashion', 'Design', 'Luxury', 'Gala'],
    featured: true,
    priceRange: { min: 89.99, max: 249.99 },
    status: 'upcoming'
  },
  {
    id: 'evt-007',
    title: 'Community Park Cleanup Day',
    description: 'Volunteer day to clean up and beautify our local park. Tools provided, free pizza for all volunteers afterward.',
    category: 'Community',
    location: 'Seattle, WA',
    venue: 'Green Lake Park',
    image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=500&h=300&fit=crop',
    date: '2026-06-22T08:00:00Z',
    endDate: '2026-06-22T12:00:00Z',
    organizer: {
      id: 'org-007',
      name: 'Seattle Community Volunteers',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-012',
        name: 'Volunteer',
        price: 0,
        quantity: 200,
        sold: 87,
        description: 'Free, includes lunch'
      }
    ],
    capacity: 200,
    attendeeCount: 87,
    tags: ['Community', 'Volunteer', 'Environment', 'Family-Friendly'],
    featured: false,
    priceRange: { min: 0, max: 0 },
    status: 'upcoming'
  },
  {
    id: 'evt-008',
    title: 'Python & Data Science Workshop',
    description: 'Hands-on workshop covering Python fundamentals, pandas, matplotlib, and machine learning basics. Beginner to intermediate level.',
    category: 'Technology',
    location: 'Chicago, IL',
    venue: 'Code Academy Chicago',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    date: '2026-06-25T10:00:00Z',
    endDate: '2026-06-25T16:00:00Z',
    organizer: {
      id: 'org-008',
      name: 'Code Academy Chicago',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
    },
    ticketTiers: [
      {
        id: 'tier-013',
        name: 'Workshop Pass',
        price: 59.99,
        quantity: 50,
        sold: 32,
        description: 'Full day workshop with lunch'
      }
    ],
    capacity: 50,
    attendeeCount: 32,
    tags: ['Python', 'Data Science', 'Workshop', 'Programming'],
    featured: false,
    priceRange: { min: 59.99, max: 59.99 },
    status: 'upcoming'
  }
];

/**
 * Helper to simulate network delay
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Export helper for use in services
 */
export { delay };
