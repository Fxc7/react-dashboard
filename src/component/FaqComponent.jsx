import React from 'react';
import { motion } from 'framer-motion';

import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';

import { faq } from '../../configs.js';

const FaqComponent = () => {
   const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            delayChildren: 2,
            staggerChildren: 0.5
         }
      }
   };
   const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1
      }
   };
   return (
      <React.Fragment>
         <motion.div className="bg-base-200 rounded-btn p-2 md:p-3 mb-20">
            <motion.div data-aos="zoom-in-down" className="bg-base-100 max-w-full rounded-btn p-3 mb-2">
               <motion.h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{faq.title}</motion.h1>
               <motion.div className="divider text-primary px-20 md:px-60">
                  <BiSolidQuoteLeft size={50} />
               </motion.div>
               <motion.p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{faq.description}</motion.p>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate="visible" className="bg-base-100 mt-3 p-3 grid gap-3 rounded-btn">
               {
                  faq.component.map((items, index) => (
                     <motion.div variants={item} key={index}>
                        <motion.details data-aos="fade-in" data-aos-duration={index + 5 + '00'} className="group border-s-4 border-secondary rounded-btn bg-base-200 p-5 [&_summary::-webkit-details-marker]:hidden">
                           <motion.summary className="flex cursor-pointer items-center justify-between gap-10">
                              <motion.h2 className="text-base-content">{items.question}</motion.h2>
                              <motion.span className="shrink-0 rounded-btn bg-base-300 p-1.5 text-base-content sm:p-3">
                                 <BsPlusCircle className="h-5 w-5 text-secondary shrink-0 transition duration-300 group-open:-rotate-45" />
                              </motion.span>
                           </motion.summary>
                           <motion.div className="border-t border-secondary mt-2" />
                           <motion.p className="mt-4 text-sm leading-relaxed text-base-content opacity-75">{items.answer}</motion.p>
                        </motion.details>
                     </motion.div>
                  ))
               }
            </motion.div>
         </motion.div>
      </React.Fragment>
   );
}

export default FaqComponent;