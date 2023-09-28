import React from 'react';
import { motion, useScroll } from 'framer-motion';

const NavbarComponent = React.lazy(() => import('./navbarComponent.jsx'));
const HeaderComponent = React.lazy(() => import('./HeaderComponent.jsx'));
const StatComponent = React.lazy(() => import('./StatComponent.jsx'));
const FeatureComponent = React.lazy(() => import('./FeatureComponent.jsx'));
const TestimonialComponent = React.lazy(() => import('./TestimonialComponent.jsx'));
const FaqComponent = React.lazy(() => import('./FaqComponent.jsx'));
const DialComponent = React.lazy(() => import('./DialComponent.jsx'));
const FooterComponent = React.lazy(() => import('./FooterComponent.jsx'));
const ApikeyComponent = React.lazy(() => import('./ApikeyComponent.jsx'));
const PricingComponent = React.lazy(() => import('./PricingComponent.jsx'));

const Suspense = ({ Element }) => (
   <React.Suspense><Element /></React.Suspense>
);

const MainComponent = () => {
   const { scrollYProgress } = useScroll();
   return (
      <React.Fragment>
         <Suspense Element={NavbarComponent} />
         <main className="p-3 min-h-screen h-auto pt-44 shadow-lg bg-base-300 -z-10">
            <motion.progress className="fixed progress progress-error top-0 left-0 right-0 h-2 md:h-2.5 rounded-sm origin-[0%] bg-primary z-10" style={{ scaleX: scrollYProgress }} />
            <Suspense Element={HeaderComponent} />
            <Suspense Element={StatComponent} />
            <Suspense Element={ApikeyComponent} />
            <Suspense Element={DialComponent} />
            <Suspense Element={FeatureComponent} />
            <Suspense Element={PricingComponent} />
            <Suspense Element={TestimonialComponent} />
            <Suspense Element={FaqComponent} />
         </main>
         <Suspense Element={FooterComponent} />
      </React.Fragment>
   );
};

export default MainComponent;