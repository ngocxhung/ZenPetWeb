import React from 'react';
import BannerSection from '../components/homepage/BannerSection';
import FeaturedProductsSection from '../components/homepage/FeaturedProductsSection';
import AboutSection from '../components/homepage/AboutSection';
import PartnersSection from '../components/homepage/PartnersSection';
import NewsSection from '../components/homepage/NewsSection';

export default function Home() {
  return (
    <div>
      <BannerSection />
      <FeaturedProductsSection />
      <AboutSection />
      <PartnersSection />
      <NewsSection />
    </div>
  );
} 