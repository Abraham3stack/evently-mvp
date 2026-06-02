/**
 * Application Routes
 */

export const ROUTES = {
  HOME: '/',
  EVENTS: '/events',
  EVENT_DETAIL: '/events/:eventId',
  CHECKOUT: '/checkout/:eventId',
  MY_TICKETS: '/my-tickets',
  TICKET_DETAIL: '/tickets/:ticketId',
  ORGANIZER: '/organizer',
  CREATE_EVENT: '/organizer/create-event',
  MANAGE_EVENT: '/organizer/events/:eventId',
  ATTENDEE_LIST: '/organizer/events/:eventId/attendees',
  VALIDATE_TICKET: '/organizer/events/:eventId/validate',
  ANALYTICS: '/organizer/events/:eventId/analytics',
  VOTING: '/voting/:eventId',
  VOTING_RESULTS: '/voting/:eventId/results',
  NOT_FOUND: '*'
};
