import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainLayout from './components/layout/MainLayout';
import './App.css';

// Auth pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Main pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/attendee/EventsPage';
import EventDetailPage from './pages/attendee/EventDetailPage';
import TicketSelectionPage from './pages/attendee/TicketSelectionPage';
import PaymentPage from './pages/attendee/PaymentPage';
import TicketPlaceholderPage from './pages/attendee/TicketPlaceholderPage';
import CheckoutPage from './pages/attendee/CheckoutPage';
import MyTicketsPage from './pages/attendee/MyTicketsPage';
import TicketDetailPage from './pages/attendee/TicketDetailPage';
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import ManageEventsPage from './pages/organizer/ManageEventsPage';
import CreateEventPage from './pages/organizer/CreateEventPage';
import ManageEventPage from './pages/organizer/ManageEventPage';
import AttendeeInsightsPage from './pages/organizer/AttendeeInsightsPage';
import OrganizerBookingsPage from './pages/organizer/OrganizerBookingsPage';
import AttendeeListPage from './pages/organizer/AttendeeListPage';
import ValidateTicketPage from './pages/organizer/ValidateTicketPage';
import AnalyticsPage from './pages/organizer/AnalyticsPage';
import VotingPage from './pages/voting/VotingPage';
import VotingResultsPage from './pages/voting/VotingResultsPage';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (was cacheTime)
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Auth Routes - No Layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Main App Routes - With Layout */}
          <Route
            path="*"
            element={
              <MainLayout>
                <Routes>
                  {/* Attendee Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/events/:eventId" element={<EventDetailPage />} />
                  <Route path="/events/:eventId/tickets" element={<TicketSelectionPage />} />
                  <Route path="/events/:eventId/payment" element={<PaymentPage />} />
                  <Route path="/events/:eventId/ticket" element={<TicketPlaceholderPage />} />
                  <Route path="/checkout/:eventId" element={<CheckoutPage />} />
                  <Route path="/my-tickets" element={<MyTicketsPage />} />
                  <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />

                  {/* Organizer Routes */}
                  <Route path="/organizer" element={<OrganizerDashboard />} />
                  <Route path="/organizer/events" element={<ManageEventsPage />} />
                  <Route path="/organizer/create-event" element={<CreateEventPage />} />
                  <Route path="/organizer/bookings" element={<OrganizerBookingsPage />} />
                  <Route path="/organizer/events/:eventId" element={<ManageEventPage />} />
                  <Route path="/organizer/events/:eventId/insights" element={<AttendeeInsightsPage />} />
                  <Route path="/organizer/events/:eventId/attendees" element={<AttendeeListPage />} />
                  <Route path="/organizer/events/:eventId/validate" element={<ValidateTicketPage />} />
                  <Route path="/organizer/events/:eventId/analytics" element={<AnalyticsPage />} />

                  {/* Voting Routes */}
                  <Route path="/voting/:eventId" element={<VotingPage />} />
                  <Route path="/voting/:eventId/results" element={<VotingResultsPage />} />

                  {/* 404 Route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
