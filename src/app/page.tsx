import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProjectSpotlight from './components/ProjectSpotlight';
import PeerSignal from './components/PeerSignal';

export default function HomePage() {
  return (
    <main className="relative bg-parchment">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Header />

      {/* Hero — scroll-jacked vignette system */}
      <HeroSection />

      {/* Spacer so page can scroll after hero releases */}
      <div style={{ height: '1px' }} />

      {/* Project Spotlight — alternating 60/40 */}
      <ProjectSpotlight />

      {/* Peer Signal — testimonials + GitHub heatmap */}
      <PeerSignal />

      {/* Footer */}
      <Footer />
    </main>
  );
}
