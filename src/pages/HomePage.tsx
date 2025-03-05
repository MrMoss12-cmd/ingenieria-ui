import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesOverview from '../components/Home/ServicesOverview';
import FeaturedProject from '../components/Home/FeaturedProject';
import AboutPreview from '../components/Home/AboutPreview';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProject />
      <AboutPreview />
    </>
  );
};

export default HomePage;