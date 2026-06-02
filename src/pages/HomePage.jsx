import { useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import EventPreviewSection from '@/components/home/EventPreviewSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import AttendeeSteps from '@/components/home/AttendeeSteps';
import OrganizerSteps from '@/components/home/OrganizerSteps';
import PricingSection from '@/components/home/PricingSection';
import ContactSection from '@/components/home/ContactSection';
import './HomePage.css';

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add('home-page-body');
    return () => document.body.classList.remove('home-page-body');
  }, []);

  return (
    <div className="home-root">
      <Navbar />
      <HeroSection />
      <EventPreviewSection />
      <ExperienceSection />
      <AttendeeSteps />
      <OrganizerSteps />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
