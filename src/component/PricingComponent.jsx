import React from 'react';

import { BiSolidQuoteLeft } from 'react-icons/bi';

import { stellar } from '../../configs.js';

const PricingComponent = () => {
   return (
      <React.Fragment>
         <div className="bg-base-200 rounded-btn p-2 md:p-3 my-20">
            <div className="max-w-full sm:text-center">
               <div data-aos="zoom-in-down" className="bg-base-100 rounded-btn p-3">
                  <h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{stellar.title}</h1>
                  <div className="divider text-primary px-20 md:px-60">
                     <BiSolidQuoteLeft size={50} />
                  </div>
                  <p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{stellar.description}</p>
               </div>
               <div className="bg-base-100 relative w-full max-w-full p-10 rounded-btn mt-5">
                  <div className="grid max-w-screen gap-10 md:grid-cols-3">
                     {
                        stellar.component.map((items, index) => (
                           <div key={index} className={`flex flex-col ${items.best ? 'animate__animated animate__three animate__fadeInUp' : 'animate__animated animate__four animate__fadeInDown'}`}>
                              <div data-aos={items.best ? 'zoom-in-up' : 'zoom-in-down'} data-aos-duration={index + 6 + '00'} className={`p-8 ${items.best ? 'bg-primary' : 'bg-base-300'} z-50 rounded-btn`}>
                                 {
                                    items.best && (
                                       <div className="relative shadow-md border-s-2 border-e-2 rounded-btn text-center mb-2">
                                          <div className="bg-secondary rounded-btn p-2">
                                             <span className="text-center font-semibold tracking-wide text-base-100">{items.label}</span>
                                          </div>
                                       </div>
                                    )
                                 }
                                 <div className="mb-4 text-center">
                                    <p className={`text-xl font-bold tracking-wide ${items.best ? 'text-base-100' : 'text-base-content'}`}>{items.title}</p>
                                    <div className="flex items-center justify-center">
                                       <p className={`font-rubik mr-2 text-3xl font-semibold ${items.best ? 'text-base-100' : 'text-base-content'} lg:text-4xl`}>{items.price}</p>
                                       <p className={`font-lilita text-lg ${items.best ? 'text-base-100' : 'text-base-content'} opacity-50`}>/ {items.period}</p>
                                    </div>
                                 </div>
                                 <ul className="mb-8 space-y-2">
                                    {
                                       items.obtained.map((item, i) => (
                                          <li key={i} className="flex items-center">
                                             <div className="mr-3">
                                                <item.icon size={20} className={`${items.best ? 'text-base-100' : 'text-base-content'}`} />
                                             </div>
                                             <p className={`font-medium text-sm ${items.best ? 'text-base-100' : 'text-base-content'}`}>{item.text}</p>
                                          </li>
                                       ))
                                    }
                                 </ul>
                                 <button type="button" className={`btn btn-ghost inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide hover:text-base-100 transition-all duration-300 ease-linear rounded-btn shadow-lg ${items.best ? 'bg-secondary text-base-100' : 'bg-base-100 text-base-content'} hover:bg-base-content focus:shadow-outline focus:outline-none`} onClick={() => window.open(items.link, '_blank')}>Get now</button>
                              </div>
                              <div data-aos={items.best ? 'zoom-in-down' : 'zoom-in-up'} data-aos-duration={index + 4 + '00'} className={`w-9/12 h-2 mx-auto ${items.best ? 'bg-secondary' : 'bg-base-200'} rounded-b-box`} />
                              <div data-aos={items.best ? 'zoom-in-down' : 'zoom-in-up'} data-aos-duration={index + 5 + '00'} className={`w-8/12 h-2 mx-auto ${items.best ? 'bg-secondary' : 'bg-base-200'} rounded-b-box opacity-50`} />
                              <div data-aos={items.best ? 'zoom-in-down' : 'zoom-in-up'} data-aos-duration={index + 6 + '00'} className={`w-7/12 h-2 mx-auto ${items.best ? 'bg-secondary' : 'bg-base-200'} rounded-b-box opacity-25`} />
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default PricingComponent;