import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainLayout from './components/layout/MainLayout';
import './App.css';

// Page imports
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/attendee/EventsPage';
import EventDetailPage from './pages/attendee/EventDetailPage';
import CheckoutPage from './pages/attendee/CheckoutPage';
import MyTicketsPage from './pages/attendee/MyTicketsPage';
import TicketDetailPage from './pages/attendee/TicketDetailPage';
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import CreateEventPage from './pages/organizer/CreateEventPage';
import ManageEventPage from './pages/organizer/ManageEventPage';
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
        <MainLayout>
          <Routes>
            {/* Attendee Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/checkout/:eventId" element={<CheckoutPage />} />
            <Route path="/my-tickets" element={<MyTicketsPage />} />
            <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />

            {/* Organizer Routes */}
            <Route path="/organizer" element={<OrganizerDashboard />} />
            <Route path="/organizer/create-event" element={<CreateEventPage />} />
            <Route path="/organizer/events/:eventId" element={<ManageEventPage />} />
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
      </Router>
    </QueryClientProvider>
  );
}

export default App;
