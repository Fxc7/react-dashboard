import React from 'react';

const ProfileComponent = () => {
   return (
      <React.Fragment>
         <div className="bg-[url(/background.svg)] bg-cover">
            <div className="h-screen backdrop-blur-[3px] flex justify-center flex-wrap items-center p-5 md:p-0">
               <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-base-100 shadow-lg ring-2 ring-base-content rounded-t-box transform duration-200 easy-in-out">
                  <div className="h-32 overflow-hidden">
                     <img className="w-full rounded-btn bg-cover" src="/eight.svg" alt="" />
                  </div>
                  <div className="border-t-2 border-base-content" />
                  <div className="flex justify-center -mt-10">
                     <img className="h-32 w-32 ring-2 ring-base-content rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                  </div>
                  <div className="flex flex-col">
                     <div className="text-center px-14 pt-3 rounded-btn">
                        <h2 className="text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-sm highlight-variant-20 text-base-content font-luckiest text-3xl font-bold">Mohit Dhiman</h2>
                        <p className="mt-2 font-kanit text-base-content opacity-50 text-sm">Since 01 mei 2019</p>
                        <p className="text-center text-sm mt-5 text-base-content opacity-70 font-bold">Powered By Farhannnn</p>
                     </div>
                     <div className="grid grid-cols-2 gap-[2px] mt-1 border-t-2 border-base-content bg-base-content">
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Email</p>
                           <p className="text-center font-medium text-sm">farhanxcode7@gmail.com</p>
                        </div>
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Purse</p>
                           <p className="text-center font-medium text-sm">Rp 29.000</p>
                        </div>
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Limit</p>
                           <p className="text-center font-medium text-sm">99970292</p>
                        </div>
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Type user</p>
                           <p className="text-center font-medium text-sm">Premium</p>
                        </div>
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Apikey</p>
                           <p className="text-center font-medium text-sm">frhn</p>
                        </div>
                        <div className="flex flex-col p-3 bg-base-100">
                           <p className="text-center font-medium text-sm opacity-50">Expired</p>
                           <p className="text-center font-medium text-sm">24, December 2030</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default ProfileComponent;