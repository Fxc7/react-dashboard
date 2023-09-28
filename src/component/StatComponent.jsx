import React from 'react';
import { BiSolidQuoteLeft } from 'react-icons/bi';

import { statistic } from '../../configs.js';

const StatComponent = () => {
   return (
      <React.Fragment>
         <div className="bg-base-200 rounded-btn p-2 md:p-3 my-20">
            <div data-aos="zoom-in-down" className="bg-base-100 rounded-btn p-3">
               <h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{statistic.title}</h1>
               <div className="divider text-primary px-20 md:px-60">
                  <BiSolidQuoteLeft size={50} />
               </div>
               <p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{statistic.description}</p>
            </div>
            <div className="bg-base-100 relative grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-full p-10 rounded-btn mt-5">
               {
                  statistic.components.map((items, index) => (
                     <article data-aos="zoom-in" data-aos-duration={index + 6 + '00'} key={index} className="flex flex-col md:flex-row items-center gap-4 rounded-btn border-2 border-primary bg-base-200 p-5 md:p-10">
                        <span className="rounded-btn ring-2 ring-primary p-3 text-base-content">
                           <items.icon size={30} />
                        </span>
                        <div className="text-center md:text-start">
                           <p className="text-2xl font-bold text-base-content">{items.title}</p>
                           <p className="text-sm text-base-content opacity-50">{items.description}</p>
                        </div>
                     </article>
                  ))
               }
            </div>
         </div>
      </React.Fragment>
   );
};

export default StatComponent;