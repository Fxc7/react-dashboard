import React from 'react';

const LoadingComponent = () => {
   return (
      <React.Fragment>
         <div className="bg-[url(eight.svg)] brightness-50 bg-cover min-h-screen" />
         <div className="fixed z-10 top-0 right-0 left-0 backdrop-blur-sm flex justify-center items-center gap-5 min-h-screen">
            <div className="w-16 h-16 border-4 border-warning border-dashed rounded-full animate-spin" />
            <h2 className="font-luckiest text-5xl animate-bounce">Loading...</h2>
         </div>
      </React.Fragment>
   );
};

export default LoadingComponent;
