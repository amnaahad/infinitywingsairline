import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GroupTravelRequirements from '../components/GroupTravelRequirements';
import GroupTravelBenefits from '../components/GroupTravelBenefits';
import GroupTravelForm from '../components/GroupTravelForm';
import Hero2 from '../components/Hero2';
import gtImage from '../assets/gt.jpeg'; // Import the image

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const GroupTravelRequestPage = () => {
  const [isVisible, setIsVisible] = useState({ requirements: false, benefits: false, form: false });

  const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Elements to check visibility
    const elements = {
      requirements: document.querySelector('.requirements'),
      benefits: document.querySelector('.benefits'),
      form: document.querySelector('.form')
    };

    // Check visibility for each element
    for (const key in elements) {
      const element = elements[key];
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;

      if (scrollY + windowHeight > elementTop + 100 && scrollY < elementTop + rect.height) {
        setIsVisible(prev => ({ ...prev, [key]: true }));
      } else {
        setIsVisible(prev => ({ ...prev, [key]: false }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className="page-container">
      <Hero2 
        pageName="Group Travel" 
        image={gtImage} // Use the imported image
      />
      <div className="requirements">
        <GroupTravelRequirements />
      </div>
      <motion.div
        className="animate-on-scroll benefits"
        initial="hidden"
        animate={isVisible.benefits ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GroupTravelBenefits />
      </motion.div>
      <motion.div
        className="animate-on-scroll form"
        initial="hidden"
        animate={isVisible.form ? 'visible' : 'hidden'}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GroupTravelForm />
      </motion.div>
    </div>
  );
};

export default GroupTravelRequestPage;
