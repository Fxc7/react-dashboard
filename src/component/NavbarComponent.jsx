import React from 'react';
import { motion } from 'framer-motion';

import ThemeComponent from './ThemeComponent.jsx';
import SidebarComponent from './SidebarComponent.jsx';
import AccountComponent from './AccountComponent.jsx';

import { title_api } from '../../configs.js';

const NavbarComponent = () => {
   return (
      <React.Fragment>
         <motion.nav className="navbar fixed z-[1] px-0 py-0 bg-base-300">
            <motion.div className="navbar bg-base-200 shadow-lg px-1 md:p-3 transition-all duration-200 ease-linear">
               <motion.div className="navbar flex justify-between bg-base-100 rounded-btn">
                  <motion.div className="flex flex-row justify-start gap-4 p-2 bg-base-200 w-auto md:w-[30rem] rounded-btn">
                     <SidebarComponent />
                     <motion.div className="hidden md:block">
                        <motion.div className="relative">
                           <motion.input type="search" placeholder="Type here..." className="animate__animated animate__one animate__fadeIn input input-primary rounded-btn outline-none border-2 text-base-content placeholder:text-base-content placeholder:text-sm text-sm md:w-96" />
                           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="!absolute animate__animated animate__two animate__fadeIn right-1 top-[4px] w-auto h-auto p-2.5 bg-primary text-base-100 text-sm font-bold rounded-btn">Search</motion.button>
                        </motion.div>
                     </motion.div>
                  </motion.div>
                  <motion.div className="hidden sm:block md:block bg-base-200 p-3.5 rounded-btn">
                     <motion.a href="/" className="highlight highlight-[hsl(var(--p)_/_1)] highlight-variant-19 font-luckiest text-center text-base-100 text-shadow-sm shadow-base-content animate-pulse text-2xl md:text-3xl">{title_api}</motion.a>
                  </motion.div>
                  <motion.div className="bg-base-200 w-auto md:w-[30rem] rounded-btn">
                     <motion.div className="flex flex-row gap-2 py-2.5 px-3">
                        <ThemeComponent />
                        <AccountComponent />
                        <motion.div className="animate__animated animate__fadeIn animate__five hidden md:block bg-base-100 border-2 border-primary rounded-btn">
                           <motion.div className="flex items-center gap-2 mr-20 p-1">
                              <motion.img src="/profile.svg" className="h-8 w-8 bg-primary rounded-full object-cover ml-[2px]" />
                              <motion.div className="flex flex-col">
                                 <motion.p className="font-bold text-xs">FarhanXCode7</motion.p>
                                 <motion.p className="text-xs truncate">farhanxcode7@gmail.com</motion.p>
                              </motion.div>
                           </motion.div>
                        </motion.div>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </motion.nav>
      </React.Fragment >
   );
};

export default NavbarComponent;