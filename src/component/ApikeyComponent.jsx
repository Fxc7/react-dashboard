import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { BiSolidQuoteLeft } from 'react-icons/bi';

import { apikeys } from '../../configs.js';

const ApikeyComponent = () => {
   const [apikey, setApikey] = useState('');
   const [result, setResult] = useState('');
   const [resultSuccess, setResultSuccess] = useState({});
   const [execute, setExecute] = useState(false);

   const handleClear = () => {
      setResult('');
      setResultSuccess({});
   };

   const parseCount = (number, ends) => {
      return `${(number ? number.toString() : '0').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${ends !== undefined ? ' ' + ends : ''}`;
   };

   const onChange = (event) => {
      setApikey(event.target.value);
   };

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         if (apikey) {
            toast.loading('Checking apikey...');
            setExecute(true);
         } else {
            toast.message('Please enter a valid apikey...');
         }
      }
   };

   const handleSubmit = () => {
      if (apikey) {
         toast.loading('Checking apikey...');
         setExecute(true);
      } else {
         toast.error('Please enter a valid apikey...');
      }
   };

   const fetchApikey = async () => {
      try {
         const response = await fetch(`https://api-fxc7.cloud.okteto.net/api/cekkey?apikey=${apikey}`);
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setApikey('');
         setExecute(false);
         toast.success('Successfully...');
         if (typeof data.result === 'string') {
            setResult(data.result);
         } else {
            setResult(data.message);
            setResultSuccess(data.result);
         }
      } catch (error) {
         setExecute(false);
         toast.error('Failed to get data apikey...');
      }
   };

   useEffect(() => {
      if (execute) {
         handleClear();
         fetchApikey();
      }
   }, [execute]);

   return (
      <div className="bg-base-200 rounded-btn p-2 md:p-3 my-20">
         <div data-aos="zoom-in-down" className="bg-base-100 max-w-full rounded-btn p-3 mb-2">
            <h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)/1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{apikeys.title}</h1>
            <div className="divider text-primary px-20 md:px-60">
               <BiSolidQuoteLeft size={50} />
            </div>
            <p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{apikeys.description}</p>
         </div>
         <div data-aos="zoom-in-up" className="bg-base-100 relative w-full max-w-full p-10 rounded-btn mt-5">
            <div className="flex">
               <input type="text" placeholder="Your Apikey..." value={apikey} onChange={onChange} onKeyDown={handleEnter} className="animate__animated animate__three animate__fadeInLeft input input-primary border-2 tracking-widest w-full pr-20 text-sm font-kanit font-bold rounded-btn placeholder:text-base-content" />
               <motion.button onClick={handleSubmit} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="!absolute animate__animated animate__four animate__fadeIn rounded-btn w-auto h-auto bg-primary text-base-100 right-[2.75rem] top-[2.75rem] md:top-[2.75rem] p-2.5 md:p-2 text-sm md:text-base" disabled={!execute}>Submit</motion.button>
            </div>
            <div className={result || Object.keys(resultSuccess).length > 0 ? 'block mt-5' : 'hidden'}>
               <p className="text-center font-bold font-kanit">
                  {result}
               </p>
               {Object.keys(resultSuccess).length > 0 && (
                  <div className="grid grid-cols-2 mt-5">
                     <p className="text-center text-sm font-bold tracking-wider">
                        <span className="block">Limit</span>
                        {parseCount(resultSuccess.limit)}
                     </p>
                     <p className="text-center text-sm font-bold">
                        <span className="block">Expired</span>
                        {resultSuccess.expired}
                     </p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default ApikeyComponent;