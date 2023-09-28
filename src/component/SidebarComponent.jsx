import React from 'react';
import { Input } from '@material-tailwind/react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';

import { title_api, features } from '../../configs.js';

const SidebarComponent = () => {
   return (
      <React.Fragment>
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content ring-2 ring-primary rounded-btn md:ml-1">
            <label htmlFor="my-drawer" className="drawer-button btn btn-active">
               <FaBarsStaggered size={22} className="text-primary" />
            </label>
         </div>
         <div className="drawer-side z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="bg-base-100 border-e-2 border-e-base-content min-h-screen h-auto w-full max-w-[17rem] md:max-w-[18rem] p-4 shadow-xl">
               <div className="flex justify-center py-5">
                  <a href="/" className="text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-variant-19 font-luckiest text-center text-base-content text-2xl md:text-3xl">{title_api}</a>
               </div>
               <div className="sm:mt-5 md:mt-5 p-2 block md:hidden rounded-btn">
                  <Input icon={<BiSearchAlt className="h-5 w-5" />} variant="standard" containerProps={{ className: "text-base-content" }} label="Search" />
               </div>
               <ul className="mt-6 space-y-1">
                  <li className="relative mb-5">
                     <span className="bg-primary absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg" aria-hidden />
                     <a href="/" className="inline-flex w-full p-3 ml-2 bg-primary rounded-md text-sm font-bold text-base-100">Dashboard</a>
                  </li>
                  {Object.keys(features).map((item, index) => {
                     const component = features[item].component;
                     const Icons = features[item].icon;
                     return (
                        <li key={index}>
                           <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-btn px-4 py-2 text-base-content hover:bg-base-200 hover:text-primary transition-all duration-200 ease-linear">
                                 <Icons size={25} className="text-primary" />
                                 <span className="text-xs md:text-sm font-medium w-full">{item}</span>
                                 <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <BsChevronDown size={13} />
                                 </span>
                              </summary>
                              <ul className="mt-2 space-y-[1px] m-4 bg-base-200 rounded-md">
                                 {component.map((items, i) => (
                                    <li key={i}>
                                       <a href={items.path.replaceAll('%baseURL%', window.location.origin)} target="_blank" className="flex gap-5 rounded-lg px-4 py-2 text-xs font-medium hover:bg-base-300 hover:text-primary">
                                          <span className="text-primary">{i + 1}</span>
                                          <span>{items.name}</span>
                                       </a>
                                    </li>
                                 ))}
                              </ul>
                           </details>
                        </li>
                     )
                  })}
               </ul>
               <div className="pt-5" />
            </div>
         </div>
      </React.Fragment>
   );
};

export default SidebarComponent;