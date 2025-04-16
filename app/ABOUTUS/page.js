import React from 'react'
import dynamic from 'next/dynamic';

// export const metadata = {
//   title: 'Aboutus - Khales',
//   description: 'Welcome to projects.',
// };

export const metadata = {
  title: 'About Us - Khales',
  description: 'Welcome to projects.',
  keywords: 'about us, khales, mission, vision, company info',
  openGraph: {
    title: 'About Us - Khales',
    description: 'Welcome to projects.',
    url: 'https://yourdomain.com/aboutus',
    siteName: 'Khales',
    locale: 'en_US',
    type: 'website'
  },
};

// Lazy load to avoid hydration mismatch
const AboutusPage = dynamic(() => import('@/pages/AboutsusPage'));

const AboutUs = () => {
  return (
    <AboutusPage />
  )
}

export default AboutUs