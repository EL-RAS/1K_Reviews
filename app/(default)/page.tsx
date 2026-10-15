import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Faq from "@/components/faq";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1K_Reviews',
  // description: 'Page Description',
  icons: {
    icon: '/images/logo-03.svg', // مسار الأيقونة في مجلد public
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Faq />
    </>
  );
}
