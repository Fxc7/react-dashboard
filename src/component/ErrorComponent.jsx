import { Button } from '@material-tailwind/react';
import React from 'react';

const NotFoundComponent = () => {
   return (
      <React.Fragment>
         <div className="relative h-screen overflow-hidden bg-base-200">
            <img src="/eight.svg" className="absolute object-cover w-full h-full" />
            <div className="absolute inset-0 bg-base-100 opacity-25">
            </div>
            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
               <div className="relative z-10 flex flex-col items-center w-full font-mono">
                  <h1 className="mt-4 text-5xl font-luckiest font-extrabold leading-tight text-center text-base-content">
                     Error Page Contact owner to fixed
                  </h1>
                  <Button type="button" className="btn btn-ghost font-acme rounded-btn px-20 mt-10" onClick={() => window.open('/', '_blank')}>Back homepage</Button>
                  <p className="font-extrabold font-luckiest text-base-content text-8xl my-20 animate-bounce">
                     500
                  </p>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default NotFoundComponent;