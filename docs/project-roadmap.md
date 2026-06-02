# Evently – Event Discovery and Ticketing Platform

## Product Roadmap (MVP)

---

## 1. Product Summary

**Evently** is an event discovery and ticketing platform designed to streamline the event experience for both attendees and organizers. Attendees can discover events, purchase tickets through a frictionless guest checkout flow, receive digital QR tickets, and gain fast entry through QR validation. Organizers can create and manage events, configure tiered pricing, track sales in real-time, view attendee lists, validate tickets (manual and QR-based), and access basic analytics. Optional voting features support nominee-based events.

**MVP Scope:** Frontend-only with mock data, mock API services, and simulated payment flows. Fully responsive, mobile-first, and demo-ready.

---

## 2. Main Problems Evently Solves

### For Attendees

- **Event Discovery**: Simplified search and filtering instead of scattered information across multiple platforms
- **Friction in Checkout**: Guest checkout without forced account creation
- **Slow Event Entry**: QR-based validation eliminates long manual check-in queues
- **Lost Tickets**: Digital QR tickets always accessible via phone

### For Organizers

- **Manual Attendance Tracking**: Real-time attendee validation and analytics
- **Sales Visibility**: Dashboard showing ticket sales, revenue, and tier performance
- **Event Management Complexity**: Centralized ticketing, pricing, and attendee management
- **Entry Bottlenecks**: Fast QR-based validation for quick guest entry

### For Events with Voting

- **Nominee Engagement**: Simple voting mechanism to boost event participation
- **Live Interaction**: Real-time voting display during nominee-based events

---

## 3. MVP Feature Scope

### Attendee Features

- [ ] Event discovery with search, filters (category, date, location, price range)
- [ ] Event detail pages with description, schedule, location, ticket availability
- [ ] Guest checkout (no signup required)
- [ ] Ticket purchase with simulated payment
- [ ] QR ticket generation and download/screenshot
- [ ] My Tickets page (view purchased tickets, access QR)
- [ ] Ticket entry flow (scan/view QR on entry)

### Organizer Features

- [ ] Create event (title, description, date, location, capacity, ticket tiers)
- [ ] Manage ticket tiers (pricing, quantity, availability dates)
- [ ] Event dashboard (sales overview, ticket status, attendee count)
- [ ] Attendee list (view guest names, emails, ticket info)
- [ ] Ticket validation (manual lookup, QR scanner)
- [ ] Basic analytics (revenue, ticket distribution, peak entry times)

### Voting Features (Optional / Nice-to-Have)

- [ ] Create nominee-based event with voting
- [ ] Live voting interface for attendees
- [ ] Real-time vote tallying display

### Admin / Platform Features (Deferred)

- [ ] User account management (organizer registration, profile)
- [ ] Payment integration
- [ ] Email notifications

---

## 4. Out-of-Scope Features

- **Real Payment Processing**: Use simulated/mock payment service
- **User Accounts**: Frontend-only; no auth backend required for MVP
- **Email/SMS Notifications**: Mock notification service only
- **AI Recommendations**: Deferred to post-MVP
- **Livestreaming Integration**: Out of scope
- **Advanced Social Networking**: Out of scope
- **Marketing Automation**: Out of scope
- **Offline QR Sync**: Out of scope
- **Multi-currency / Localization**: Out of scope for MVP
- **Advanced Analytics**: Limited to basic metrics

---

## 5. Recommended Frontend Architecture

### Directory Structure (Modular by Feature)

```
src/
├── components/
│   ├── common/              # Shared UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Input.jsx
│   │   ├── Badge.jsx
│   │   ├── Spinner.jsx
│   │   └── ...
│   ├── layout/              # Layout components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   └── MainLayout.jsx
│   ├── attendee/            # Attendee-specific components
│   │   ├── EventCard.jsx
│   │   ├── EventFilter.jsx
│   │   ├── TicketCard.jsx
│   │   └── QRDisplay.jsx
│   ├── organizer/           # Organizer-specific components
│   │   ├── EventForm.jsx
│   │   ├── TicketTierForm.jsx
│   │   ├── AttendeeTable.jsx
│   │   ├── TicketValidator.jsx
│   │   └── AnalyticsDashboard.jsx
│   └── voting/              # Voting components (if included)
│       ├── VotingCard.jsx
│       └── VotingResults.jsx
├── pages/                   # Page components (feature-based)
│   ├── attendee/
│   │   ├── EventsPage.jsx
│   │   ├── EventDetailPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── MyTicketsPage.jsx
│   │   └── TicketEntryPage.jsx
│   ├── organizer/
│   │   ├── OrganizerDashboard.jsx
│   │   ├── CreateEventPage.jsx
│   │   ├── ManageEventPage.jsx
│   │   ├── AttendeeListPage.jsx
│   │   ├── ValidateTicketPage.jsx
│   │   └── AnalyticsPage.jsx
│   ├── voting/
│   │   ├── VotingPage.jsx
│   │   └── VotingResultsPage.jsx
│   ├── NotFoundPage.jsx
│   └── HomePage.jsx
├── services/                # Mock API / data services
│   ├── eventService.js
│   ├── ticketService.js
│   ├── orderService.js
│   ├── paymentService.js    # Mock payment
│   ├── validationService.js
│   ├── analyticsService.js
│   └── votingService.js
├── stores/                  # Zustand stores
│   ├── eventStore.js
│   ├── cartStore.js
│   ├── authStore.js         # Guest session
│   ├── organizerStore.js
│   ├── uiStore.js           # UI state (modals, toasts)
│   └── votingStore.js
├── hooks/                   # Custom React hooks
│   ├── useEvents.js
│   ├── useTickets.js
│   ├── useOrders.js
│   ├── useOrganizer.js
│   ├── useVoting.js
│   └── useLocalStorage.js
├── queries/                 # TanStack Query hooks (if needed)
│   ├── eventQueries.js
│   ├── ticketQueries.js
│   └── organizerQueries.js
├── utils/                   # Utility functions
│   ├── formatters.js        # Date, currency formatting
│   ├── validators.js        # Form validation helpers
│   ├── qrGenerator.js       # QR code generation
│   ├── mockData.js          # Mock seed data
│   └── constants.js         # App constants, routes
├── types/                   # JSDoc or TypeScript types (optional)
│   └── index.js
├── styles/                  # Global styles
│   └── index.css
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

### Architecture Principles

- **Feature-based organization**: Code grouped by feature domain, not by file type
- **Single Responsibility**: Each component/service has one clear purpose
- **Reusable Components**: Common UI components in `/components/common`
- **Mock Services Layer**: Abstracted data layer makes migration to real API easy
- **Centralized State**: Zustand stores for app-wide state, local state in components
- **Separation of Concerns**: UI (pages/components), logic (services/stores), styling (Tailwind + local CSS)

---

## 6. Pages/Routes to Build

### Attendee Routes

- **`/`** – Home page (event discovery landing)
- **`/events`** – Events listing page (search, filter, pagination)
- **`/events/:eventId`** – Event detail page
- **`/checkout/:eventId`** – Guest checkout flow
- **`/my-tickets`** – My purchased tickets
- **`/tickets/:ticketId`** – Ticket detail with QR display
- **`/entry/:eventId`** – Event entry (QR validation, manual lookup)

### Organizer Routes

- **`/organizer`** – Organizer dashboard (events overview)
- **`/organizer/create-event`** – Create new event form
- **`/organizer/events/:eventId`** – Manage event details
- **`/organizer/events/:eventId/attendees`** – View attendee list
- **`/organizer/events/:eventId/validate`** – Validate tickets at entry
- **`/organizer/events/:eventId/analytics`** – Event analytics dashboard

### Voting Routes (Optional)

- **`/voting/:eventId`** – Live voting interface
- **`/voting/:eventId/results`** – Vote results page

### Utility Routes

- **`/404`** – Not found page
- **`/demo`** – Demo/onboarding page (optional)

---

## 7. Reusable Components Needed

### Common UI Components

| Component         | Purpose                            | Props                                       |
| ----------------- | ---------------------------------- | ------------------------------------------- |
| `Button`          | Primary, secondary, danger buttons | `variant`, `size`, `loading`, `onClick`     |
| `Card`            | Container for content grouping     | `title`, `children`, `onClick`              |
| `Input`           | Text input field                   | `label`, `error`, `placeholder`, `onChange` |
| `Select`          | Dropdown select                    | `options`, `value`, `onChange`              |
| `Modal`           | Dialog overlay                     | `isOpen`, `title`, `onClose`, `children`    |
| `Spinner`         | Loading indicator                  | `size`                                      |
| `Badge`           | Status indicator                   | `variant`, `text`                           |
| `Tabs`            | Tab navigation                     | `tabs`, `activeTab`, `onChange`             |
| `Pagination`      | Page navigation                    | `total`, `page`, `onPageChange`             |
| `Toast` / `Alert` | Notification                       | `type`, `message`, `onClose`                |
| `Header`          | Top navigation bar                 | `user`, `onLogout`                          |
| `Footer`          | Bottom footer                      | Links                                       |
| `Tag` / `Chip`    | Small labeled element              | `label`, `onRemove`                         |

### Feature-Specific Components

| Component            | Purpose                      |
| -------------------- | ---------------------------- |
| `EventCard`          | Event preview in list        |
| `EventFilter`        | Search and filter UI         |
| `TicketCard`         | Ticket display in My Tickets |
| `QRDisplay`          | QR code viewer               |
| `TicketTierForm`     | Create/edit ticket tier      |
| `AttendeeTable`      | Paginated attendee list      |
| `TicketValidator`    | QR scanner or manual lookup  |
| `AnalyticsDashboard` | Sales and attendance charts  |
| `VotingCard`         | Nominee voting option        |

### Form Components (with React Hook Form)

- `FormField` – Wrapper for field with validation
- `FormError` – Error message display
- `CheckboxField` – Checkbox with label
- `RadioField` – Radio button with label

---

## 8. Mock Service/Data Strategy

### Mock Data Structure

Create `/src/utils/mockData.js` with seed data:

```javascript
const mockEvents = [
  {
    id: "evt-001",
    title: "React Conference 2026",
    description: "...",
    date: "2026-06-15T09:00:00Z",
    location: "San Francisco, CA",
    capacity: 500,
    ticketsSold: 342,
    imageUrl: "...",
    category: "Technology",
    ticketTiers: [
      {
        id: "tier-001",
        name: "General Admission",
        price: 49.99,
        quantity: 400,
        sold: 342,
      },
      { id: "tier-002", name: "VIP", price: 99.99, quantity: 100, sold: 50 },
    ],
  },
  // ... more events
];

const mockOrders = [
  {
    id: "order-001",
    eventId: "evt-001",
    ticketTierId: "tier-001",
    guestEmail: "attendee@example.com",
    guestName: "John Doe",
    quantity: 2,
    totalPrice: 99.98,
    qrCode: "QR_CODE_STRING",
    status: "completed",
    createdAt: "2026-06-01T10:30:00Z",
  },
  // ... more orders
];

// Similar structures for voting, validation logs, etc.
```

### Mock Service Pattern

Each service file (e.g., `eventService.js`) implements:

```javascript
// Mock delay to simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const eventService = {
  getEvents: async (filters) => {
    await delay(500);
    // Filter and return mockEvents
    return filtered;
  },

  getEventById: async (id) => {
    await delay(300);
    return mockEvents.find((e) => e.id === id);
  },

  createEvent: async (eventData) => {
    await delay(1000);
    // Generate ID, add to mock data, return
    return newEvent;
  },
};
```

### Advantages

- **No backend dependency** – Develop frontend independently
- **Consistent API interface** – Easy to swap with real API later
- **Realistic delays** – Build UI for loading states
- **Repeatable data** – Deterministic testing and demos

---

## 9. State Management Plan Using Zustand

### Store Design

#### `eventStore.js` – Event catalog state

```javascript
export const useEventStore = create((set) => ({
  events: [],
  selectedEvent: null,
  setEvents: (events) => set({ events }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
}));
```

#### `cartStore.js` – Shopping cart (guest session)

```javascript
export const useCartStore = create((set) => ({
  items: [],
  addItem: (ticket, quantity) =>
    set((state) => ({
      items: [...state.items, { ticket, quantity }],
    })),
  removeItem: (ticketId) =>
    set((state) => ({
      items: state.items.filter((i) => i.ticket.id !== ticketId),
    })),
  clear: () => set({ items: [] }),
  total: (state) =>
    state.items.reduce((sum, i) => sum + i.ticket.price * i.quantity, 0),
}));
```

#### `authStore.js` – Guest session state

```javascript
export const useAuthStore = create((set) => ({
  guestSession: { email: "", name: "" },
  setGuestSession: (email, name) => set({ guestSession: { email, name } }),
}));
```

#### `organizerStore.js` – Organizer-specific state

```javascript
export const useOrganizerStore = create((set) => ({
  organizerEvents: [],
  selectedEventForManagement: null,
  setOrganizerEvents: (events) => set({ organizerEvents: events }),
  setSelectedEventForManagement: (event) =>
    set({ selectedEventForManagement: event }),
}));
```

#### `uiStore.js` – Global UI state

```javascript
export const useUiStore = create((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: Date.now() }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
  modals: {}, // Track open modals
  openModal: (name) =>
    set((state) => ({
      modals: { ...state.modals, [name]: true },
    })),
  closeModal: (name) =>
    set((state) => ({
      modals: { ...state.modals, [name]: false },
    })),
}));
```

#### `votingStore.js` – Voting state (if included)

```javascript
export const useVotingStore = create((set) => ({
  votes: {}, // { nomineeId: voteCount }
  userVote: null,
  castVote: (nomineeId) =>
    set((state) => ({
      votes: { ...state.votes, [nomineeId]: (state.votes[nomineeId] || 0) + 1 },
      userVote: nomineeId,
    })),
}));
```

### Benefits

- **Lightweight**: Zustand has minimal boilerplate
- **Granular**: Each store is independent, can be used selectively
- **Easy debugging**: Devtools integration available
- **Modular**: Stores don't depend on each other (loose coupling)

---

## 10. API/Data-Fetching Plan Using TanStack Query

### Query Hooks Strategy

#### `eventQueries.js`

```javascript
import { useQuery } from "@tanstack/react-query";
import { eventService } from "@/services/eventService";

export const useEvents = (filters) => {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: () => eventService.getEvents(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useEventById = (eventId) => {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: () => eventService.getEventById(eventId),
    enabled: !!eventId,
  });
};
```

#### `ticketQueries.js`

```javascript
export const useTickets = (orderId) => {
  return useQuery({
    queryKey: ["tickets", orderId],
    queryFn: () => ticketService.getTickets(orderId),
  });
};
```

### Mutation Hooks

```javascript
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderData) => orderService.createOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};
```

### Query Configuration

- **Stale Time**: Set appropriately (5–10 min for event data)
- **Cache Time**: Default 5 min (sufficient for MVP)
- **Refetch on Window Focus**: Enabled for data freshness
- **Retry**: 1–2 retries for failed requests

### Advantages

- **Automatic caching**: Reduces redundant API calls
- **Optimistic updates**: Show UI changes before server confirms
- **Automatic refetch**: Background synchronization
- **Easy integration**: Works seamlessly with mock services
- **Dev tools**: Inspect query state in browser DevTools

---

## 11. Form Handling Plan Using React Hook Form and Zod

### Schema Definition Example (`/src/types/schemas.js`)

```javascript
import { z } from "zod";

export const checkoutSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  guestEmail: z.string().email("Invalid email address"),
  quantity: z
    .number()
    .min(1, "Must buy at least 1 ticket")
    .max(10, "Max 10 tickets"),
  acceptTerms: z.boolean().refine((val) => val === true, "Must accept terms"),
});

export const createEventSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  date: z
    .string()
    .refine(
      (val) => new Date(val) > new Date(),
      "Event date must be in future",
    ),
  location: z.string().min(5, "Location is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  ticketTiers: z
    .array(
      z.object({
        name: z.string(),
        price: z.number().min(0),
        quantity: z.number().min(1),
      }),
    )
    .min(1, "Must have at least 1 ticket tier"),
});
```

### Form Component Pattern

```javascript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function CheckoutForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("guestName")} placeholder="Full Name" />
      {errors.guestName && <p>{errors.guestName.message}</p>}

      <button type="submit">Proceed to Payment</button>
    </form>
  );
}
```

### Key Features

- **Type-safe validation**: Zod ensures data shape correctness
- **Real-time feedback**: Show errors as users type
- **Reusable schemas**: Define once, use in multiple components
- **Minimal re-renders**: React Hook Form optimizes for performance
- **Custom rules**: Easy to add business logic (e.g., "future dates only")

---

## 12. Implementation Phases

### Phase 1: Foundation & Layout (Days 1–2)

- [ ] Setup Vite, install all dependencies, configure TailwindCSS
- [ ] Create modular folder structure (`/src/components`, `/src/pages`, `/src/services`, etc.)
- [ ] Build common UI components (Button, Card, Input, Modal, etc.)
- [ ] Create base Layout component (Header, Footer, navigation)
- [ ] Setup Zustand stores (event, cart, auth, ui)
- [ ] Setup React Router routes skeleton

**Deliverable**: Layout works, routes render, UI library ready

### Phase 2: Attendee Flow – Events Discovery (Days 3–4)

- [ ] Create `/src/utils/mockData.js` with seed events
- [ ] Build `eventService.js` mock service
- [ ] Create `EventCard` and `EventFilter` components
- [ ] Build `/events` page (search, filter, pagination)
- [ ] Build `/events/:eventId` detail page
- [ ] Integrate TanStack Query for event fetching
- [ ] Style with TailwindCSS, ensure mobile-responsive

**Deliverable**: Attendees can browse and search events

### Phase 3: Attendee Flow – Checkout & Tickets (Days 5–6)

- [ ] Build checkout form (`CheckoutPage`) with React Hook Form + Zod
- [ ] Create `orderService.js` mock service
- [ ] Implement cart logic in `cartStore`
- [ ] Create simulated payment success page
- [ ] Build QR code generation (library: `qrcode.react`)
- [ ] Build `/my-tickets` page (list of purchased tickets)
- [ ] Build `/tickets/:ticketId` detail page with QR display

**Deliverable**: Complete guest checkout flow with QR tickets

### Phase 4: Organizer Flow – Event Management (Days 7–8)

- [ ] Build event creation form (`CreateEventPage`)
- [ ] Build ticket tier management UI
- [ ] Create organizer dashboard (`/organizer`)
- [ ] Build event management page (`/organizer/events/:eventId`)
- [ ] Implement `organizerStore` for organizer state
- [ ] Create mock `organizerService` for event CRUD

**Deliverable**: Organizers can create and manage events

### Phase 5: Organizer Flow – Attendee & Analytics (Days 9–10)

- [ ] Build attendee list page with table
- [ ] Build ticket validator (manual lookup + QR scanner integration)
- [ ] Build basic analytics dashboard (sales, attendance, charts)
- [ ] Create `analyticsService` for mock analytics data
- [ ] Implement entry/validation flow

**Deliverable**: Full organizer dashboard functionality

### Phase 6: Voting Feature (Optional, Days 11–12)

- [ ] Setup `votingStore` and `votingService`
- [ ] Build voting interface component
- [ ] Build voting results page
- [ ] Implement real-time vote tally (mock with Zustand)
- [ ] Test voting flow end-to-end

**Deliverable**: Complete voting feature (if included in scope)

### Phase 7: Polish & Testing (Days 13–14)

- [ ] Cross-browser/device testing (mobile, tablet, desktop)
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Error handling and edge cases
- [ ] Loading states and skeleton screens
- [ ] Toast notifications for user feedback
- [ ] Accessibility review (a11y)
- [ ] Demo preparation

**Deliverable**: Production-ready, polished MVP

---

## 13. Testing and Polish Checklist

### Functional Testing

- [ ] Event search/filter works correctly
- [ ] Checkout flow is smooth and validates correctly
- [ ] QR codes generate and display properly
- [ ] Organizer can create events with multiple ticket tiers
- [ ] Ticket validation (manual + QR) works
- [ ] Analytics display correct data
- [ ] Voting feature works end-to-end (if included)
- [ ] Edge cases handled (empty states, errors, etc.)

### UI/UX Polish

- [ ] All pages are fully responsive (mobile, tablet, desktop)
- [ ] Consistent spacing, typography, color scheme
- [ ] Loading indicators on all async operations
- [ ] Skeleton screens for content placeholders
- [ ] Smooth transitions and animations (Framer Motion)
- [ ] Form validation error messages are clear
- [ ] Toast notifications appear for user actions
- [ ] No layout shifts or janky scrolling

### Performance

- [ ] Code splitting implemented for route-based chunks
- [ ] Images optimized and lazy-loaded
- [ ] Unnecessary re-renders minimized (React profiler check)
- [ ] Bundle size analyzed and optimized
- [ ] No console errors or warnings

### Accessibility (a11y)

- [ ] Semantic HTML used throughout
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Color contrast meets WCAG AA standard
- [ ] Form labels associated with inputs
- [ ] Screen reader tested (VoiceOver or NVDA)

### Browser & Device Testing

- [ ] Chrome, Firefox, Safari (latest versions)
- [ ] iOS Safari and Chrome Mobile
- [ ] Android Chrome
- [ ] Tablet landscape/portrait orientations

### Documentation

- [ ] README updated with setup instructions
- [ ] Component storybook or inline examples (optional)
- [ ] Code comments on complex logic
- [ ] Environment setup documented

---

## 14. Demo Preparation Checklist

### Pre-Demo Setup

- [ ] Seed mock data with realistic, compelling examples
- [ ] Test all happy-path flows with realistic data
- [ ] Ensure no console errors or warnings
- [ ] Test on demo device (exact screen size if known)
- [ ] Verify responsive design on all target devices

### Demo Flows to Prepare

- [ ] **Attendee Flow**: Search event → View details → Add to cart → Checkout → Receive QR ticket → View ticket
- [ ] **Organizer Flow**: Create event with 2+ ticket tiers → View dashboard → Check attendee list → Validate ticket
- [ ] **Voting Flow** (if included): Cast vote → View live results
- [ ] **Error Handling**: Show graceful error states and recovery

### Demo Talking Points

- **Problem Solved**: Event discovery pain, checkout friction, slow entry
- **Technology Highlights**: React + Vite for performance, Zustand for simple state, TanStack Query for data fetching, Zod for validation
- **MVP Scope**: Frontend-only, mock payment, mobile-first, modern UI
- **Future Roadmap**: Real payment integration, user accounts, email notifications, advanced analytics

### Demo Assets

- [ ] Pre-populated mock data (events, tickets, orders)
- [ ] Sample organizer profile and multiple events
- [ ] Pre-generated QR codes for testing
- [ ] Screenshots/video of key flows for fallback
- [ ] Demo notes/script for consistent messaging

### Day-Of Checklist

- [ ] Run on demo device, test internet connectivity
- [ ] Clear browser cache/local storage if needed
- [ ] Have backup network (hotspot) ready
- [ ] Test all user interactions once more
- [ ] Have slides or talking points ready
- [ ] Know how to navigate to each demo flow quickly

---

## Next Steps

1. **Review this roadmap** – Validate architecture, feature scope, and timeline
2. **Adjust phases** – Redistribute work based on team size and capacity
3. **Begin Phase 1** – Setup foundation and layout
4. **Iterate** – After each phase, gather feedback and refine

---

**Document Version**: 1.0  
**Last Updated**: June 2, 2026  
**Status**: Ready for Implementation
