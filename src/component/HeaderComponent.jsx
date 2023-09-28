import React from 'react';
import { motion } from 'framer-motion';

import { BiSolidQuoteLeft } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';

import { header_description } from '../../configs.js';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
   return (
      <motion.header className="min-h-full rounded-btn mx-auto max-w-full">
         <motion.div className="relative isolate overflow-hidden rounded-btn bg-base-200 p-2 md:p-3 transition-all duration-200 ease-linear">
            <motion.div className="bg-base-100 rounded-btn md:flex">
               <motion.div className="hero">
                  <motion.div className="hero-content flex-col md:flex-row-reverse">
                     <motion.img src="/hero.svg" className="animate__animated animate__four animate__fadeIn w-[100%] h-[400px] md:w-[35rem] md:h-[auto] md:left-24 max-w-screen-md transition-all duration-200 ease-linear" />
                     <motion.div className="flex flex-col gap-0 md:gap-3">
                        <motion.h1 className="animate__animated animate__one animate__fadeInUp font-luckiest text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)/1)] highlight-spread-lg highlight-variant-15 text-4xl md:text-3xl text-center font-bold tracking-wide transition-all duration-200 ease-linear">Boost your productivity.<br />Start using our xcoders api.</motion.h1>
                        <motion.div className="divider text-primary"><BiSolidQuoteLeft size={50} /></motion.div>
                        <motion.p className="animate__animated animate__two animate__fadeInDown mt-6 text-sm leading-5 md:leading-6 text-center md:text-left text-base-content font-kanit opacity-75">{header_description}</motion.p>
                        <motion.div className="group flex justify-center mx-0 px-0 items-center overflow-hidden mt-16 mb-5">
                           <NavLink className="animate__animated animate__three animate__fadeInLeft flex items-center rounded-btn border border-primary bg-primary px-4 py-3 cursor-pointer transition-all duration-300 ease-linear group-hover:bg-transparent focus:outline-none focus:ring" to="/login">
                              <motion.span className="transition-all ps-8 group-hover:ps-0 group-hover:me-8 font-medium text-base-100 group-hover:text-primary group-active:text-base-content">
                                 Find out more
                              </motion.span>
                              <motion.span className="start-1.5 absolute transition-all group-hover:start-[120px] shrink-0 rounded-full border border-current bg-base-100 p-2 text-primary group-hover:text-base-100 group-hover:bg-primary group-active:text-base-content">
                                 <FaArrowRightLong className="h-5 w-5 rtl:rotate-180" />
                              </motion.span>
                           </NavLink>
                        </motion.div>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.header>
   );
};

export default HeaderComponent;