import React from 'react';
import { motion } from 'framer-motion';
import { BiSolidQuoteLeft } from 'react-icons/bi';

import { features_description } from '../../configs.js';

const FeatureComponent = () => {
   const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            delayChildren: 1.8,
            staggerChildren: 0.4
         }
      }
   };
   const items = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1
      }
   };
   return (
      <motion.div className="bg-base-200 rounded-btn mt-20 mb-4 p-2 md:p-3">
         <motion.div data-aos="zoom-in-down" className="bg-base-100 max-w-full rounded-btn p-3 mb-2">
            <motion.h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{features_description.title}</motion.h1>
            <motion.div className="divider text-primary px-20 md:px-60">
               <BiSolidQuoteLeft size={50} />
            </motion.div>
            <motion.p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{features_description.description}</motion.p>
         </motion.div>
         <motion.div variants={container} initial="hidden" animate="visible" className="w-full grid grid-cols-1 gap-2 pt-3">
            {
               features_description.component.map((item, index) => (
                  <motion.div variants={items} key={index} className="bg-base-100 rounded-btn p-6">
                     <motion.div data-aos="zoom-in" data-aos-duration={index + 6 + '00'} className="space-x-6 mb-4">
                        <motion.div className="flex flex-col justify-center items-center">
                           <item.icon size={40} className="text-secondary mb-3" />
                           <motion.h1 className="font-lilita text-3xl text-center text-base-content font-bold mb-3">{item.title}</motion.h1>
                           <motion.p className="text-base-content text-sm leading-5 opacity-75 font-medium text-center">{item.description}</motion.p>
                        </motion.div>
                     </motion.div>
                  </motion.div>
               ))
            }
         </motion.div>
      </motion.div>
   );
};

export default FeatureComponent;