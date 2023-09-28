import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { BiSolidQuoteLeft, BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import { testimonials } from '../../configs.js';

const TestimonialComponent = () => {
   return (
      <div className="my-24">
         <div className="bg-base-200 rounded-btn p-2 md:p-3">
            <div data-aos="zoom-in-down" className="bg-base-100 max-w-full rounded-btn p-3 mb-2">
               <h1 className="animate__animated animate__one animate__fadeInUp text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-3xl font-bold text-center text-base-content sm:text-4xl">{testimonials.title}</h1>
               <div className="divider text-primary px-20 md:px-60">
                  <BiSolidQuoteLeft size={50} />
               </div>
               <p className="animate__animated animate__two animate__fadeInDown text-sm text-base-content opacity-60 text-center">{testimonials.description}</p>
            </div>
            <div className="bg-base-100 mt-3 p-3 rounded-btn">
               <Carousel loop autoplay autoplayDelay={5000} transition={{ duration: '2', type: 'spring' }} navigation={({ activeIndex, setActiveIndex, length }) => (
                  <div className="absolute bottom-0 left-2/4 flex -translate-x-2/4 gap-2">
                     {
                        new Array(length).fill("").map((_, i) => (
                           <span key={i} className={`p-1 mt-2 block h-1 cursor-pointer rounded-btn transition-all content-[''] ${activeIndex === i ? "w-8 bg-primary" : "w-4 bg-base-content opacity-50"}`} onClick={() => setActiveIndex(i)} />
                        ))
                     }
                  </div>
               )} prevArrow={({ handlePrev, firstIndex, loop }) => {
                  return (
                     !firstIndex && loop && <BiSkipPrevious size={30} className="absolute bottom-16 left-5 cursor-pointer text-primary transition-all duration-300 ease-linear hover:text-base-content hover:opacity-50" onClick={handlePrev} />
                  );
               }} nextArrow={({ handleNext, lastIndex, loop }) => {
                  return (
                     !lastIndex && loop && <BiSkipNext size={30} className="absolute bottom-16 right-5 text-primary cursor-pointer transition-all duration-300 ease-linear hover:text-base-content hover:opacity-50" onClick={handleNext} />
                  );
               }}>
                  {
                     testimonials.component.map((item, index) => (
                        <div key={index} className="max-w-screen-md mx-auto text-center mb-5">
                           <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                           <blockquote className="py-3 px-2 rounded-3xl mx-sm-3">
                              <p className="text-xs font-kanit italic opacity-60 text-base-content">{item.testimonial}</p>
                           </blockquote>
                           <div className="flex items-center justify-center mt-6 pb-2 space-x-3">
                              <cite className="pr-3 font-medium text-primary">{item.name}</cite>
                              <div className="divider divider-horizontal"></div>
                              <cite className="pl-3 text-sm text-base-content">{item.position}</cite>
                           </div>
                        </div>
                     ))
                  }
               </Carousel>
            </div>
         </div>
      </div>
   );
};

export default TestimonialComponent;