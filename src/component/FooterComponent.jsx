import React from 'react';
import { toast } from 'sonner';

import { regexEmail, subscribe } from '../../configs.js';

const FooterComponent = () => {
   const [loading, setLoading] = React.useState(false);

   const handleOnclick = () => {
      const value = document.querySelector('input[name=email]').value;
      if (value.length === 0) return toast.error('Please input a your email address');
      if (!regexEmail(value)) return toast.error('Please enter a valid email address');
      document.querySelector('input[name=email]').value = '';
      setLoading(true);
      toast.loading('Please wait...');
      return new Promise(() => setTimeout(() => {
         toast.success('Thank you for Subscribe...');
         setLoading(false);
      }, 3000));
   };

   const handleKeypress = (event) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         handleOnclick();
      }
   };

   return (
      <React.Fragment>
         <div className="p-3 min-h-full h-auto bg-base-300 -z-10">
            <div className="bg-base-200 rounded-btn shadow-xl p-2 md:p-3 relative bottom-0 transition-all duration-200 ease-linear">
               <div className="bg-base-100 rounded-btn p-3 mx-auto grid max-w-2xl grid-cols-1 gap-x-9 gap-y-4 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                     <h1 className="animate-pulse text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)/1)] highlight-spread-y-lg highlight-variant-20 font-luckiest font-bold tracking-wide text-base-content text-2xl md:text-3xl">{subscribe.title}</h1>
                     <p className="mt-4 text-sm font-medium leading-5 opacity-75 text-base-content">{subscribe.description}</p>
                     <div className="join mt-6 mb-3 flex max-w-md">
                        <input name="email" type="email" autoComplete="email" required className="join-item input input-bordered outline-none rounded-btn w-full max-w-xs placeholder:text-base-content" placeholder="Enter your email" onKeyPress={handleKeypress} />
                        <button type="button" className="join-item btn rounded-btn bg-primary text-base-100 text-sm transition-all duration-300 ease-linear hover:bg-base-content" onClick={handleOnclick} disabled={loading}>
                           {
                              loading && <span className="loading loading-dots loading-sm">Subscribe</span>
                           }
                           Subscribe
                        </button>
                     </div>
                  </div>
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                     {
                        subscribe.component.map((item, index) => (
                           <div key={index} className="flex flex-col items-start">
                              <div className="rounded-md bg-primary p-2">
                                 <item.icon size={25} className="text-base-100" />
                              </div>
                              <dt className="mt-4 capitalize font-semibold text-base-content">{item.title}</dt>
                              <dd className="font-monospace text-sm mt-2 leading-5 text-base-content opacity-50">{item.description}</dd>
                           </div>
                        ))
                     }
                  </dl>
               </div>
               <div className="relative mt-3">
                  <p className="text-sm font-semibold leading-4 text-base-content opacity-50 bg-base-100 max-w-sm md:max-w-md text-center m-auto py-3 rounded-btn hover:opacity-100 hover:cursor-no-drop hover:select-none transition-all duration-300 ease-linear">&copy; Powered By Farhannnnn <span className="text-primary">{new Date().getFullYear()}</span> Inc, All Right Reserved</p>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default FooterComponent;