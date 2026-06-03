/**
 * Main Layout Component
 * Wraps pages with header and footer
 */

import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const hideFooter = pathname.startsWith('/voting/');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
