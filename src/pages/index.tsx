import React from 'react';
import FeaturedExperienceSummary from '@/components/FeaturedExperienceSummary';
import FeaturedProjectSummary from '@/components/FeaturedProjectSummary';
import AboutMe from '@/components/AboutMe';
import FeaturedRecommendationSummary from '@/components/FeaturedRecommendationSummary';

const HomePage: React.FC = () => {
  return (
    <section className="mt-4">
      <AboutMe />
      <FeaturedProjectSummary />
      <FeaturedExperienceSummary />
      <FeaturedRecommendationSummary />
    </section>
  );
};

export default HomePage;