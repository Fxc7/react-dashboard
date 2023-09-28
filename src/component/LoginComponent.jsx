import React, { Fragment, useState } from 'react';
import { toast } from 'sonner';
import { Button, Checkbox } from '@material-tailwind/react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

import { regexEmail, regexPassword, title_api } from '../../configs.js';

const LoginComponent = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isValidEmail, setIsValidEmail] = useState(true);
   const [isValidPassword, setIsValidPassword] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsValidEmail(regexEmail(newEmail));
   };

   const handlePasswordChange = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setIsValidPassword(regexPassword(newPassword));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      return toast.message('successfully submitted...');
   };

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <Fragment>
         <div className="min-h-screen flex items-stretch text-base-content">
            <div className="md:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center bg-[url(/background.svg)]">
               <div className="absolute bg-base-300 opacity-30 inset-0 z-0"></div>
               <div className="w-full px-24 z-10">
                  <h1 className="highlight highlight-[hsl(var(--bc)/1)] highlight-spread-lg highlight-variant-11 font-rubik text-5xl text-center text-base-100 font-medium tracking-wide select-none">Keep it special</h1>
                  <p className="text-3xl my-4 select-none">Capture your personal memory in a unique way, anywhere.</p>
               </div>
               <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                  <Button className="btn rounded-btn bg-base-300 text-primary">
                     <AiFillGithub size={24} />
                  </Button>
                  <Button className="btn rounded-btn bg-base-300 text-primary">
                     <AiFillGoogleCircle size={24} />
                  </Button>
                  <Button className="btn rounded-btn bg-base-300 text-primary">
                     <BsFacebook size={22} />
                  </Button>
               </div>
            </div>
            <div className="bg-base-300 lg:w-1/2 w-full max-h-screen overflow-auto flex items-center justify-center text-center pb-5 md:px-16 px-0 z-0">
               <div className="absolute md:hidden z-10 inset-0 bg-cover bg-scroll bg-[url(/background.svg)] items-center">
                  <div className="absolute bg-base-300 opacity-40 inset-0 z-0"></div>
               </div>
               <div className="w-full h-full flex flex-col justify-center py-6 z-20">
                  <h1 className="highlight md:highlight-transparent highlight-[hsl(var(--bc)/1)] highlight-spread-lg highlight-variant-18 my-6 text-5xl font-rubik uppercase text-base-100 md:text-base-content p-1 md:p-2 w-auto select-none">{title_api}</h1>
                  <div className="mb-6 md:divider px-20 md:px-auto">
                     <h1 className="text-primary text-3xl md:text-2xl text-center font-extrabold select-none">Sign in to your account</h1>
                  </div>
                  <form className="space-y-5 px-16">
                     <div className="space-y-2">
                        <div className="relative z-10">
                           <MdMail size={20} className="absolute text-primary  ml-4 mt-[22px]" />
                        </div>
                        <input type="email" value={email} onChange={handleEmailChange} className={`input ${isValidEmail || email === '' ? 'input-bordered' : 'input-error'} w-full bg-base-300 placeholder:text-base-content text-sm text-base-content bg-opacity-50 md:bg-opacity-20 rounded-btn py-2 px-11 focus:outline-none focus:border-opacity-50`} placeholder="Enter your email" required />
                     </div>
                     <div className="space-y-2">
                        <div className="relative flex justify-end">
                           <div>
                              <FaLock size={18} className="absolute text-primary ml-4 mt-3.5" />
                           </div>
                           {
                              !showPassword ? <PiEyeClosedBold size={20} className="text-primary mt-3.5 mr-4 absolute hover:cursor-pointer" onClick={handleShowPassword} /> :
                                 <PiEyeBold size={20} className="text-primary mt-3.5 mr-4 absolute hover:cursor-pointer" onClick={handleShowPassword} />
                           }
                           <input type={showPassword ? "text" : "password"} onChange={handlePasswordChange} value={password} className={`${isValidPassword || password === '' ? 'input-bordered' : 'input-error'} input w-full bg-base-300 placeholder:text-base-content text-sm text-base-content bg-opacity-50 md:bg-opacity-20 rounded-btn py-2 px-11 focus:outline-none focus:border-opacity-50`} placeholder="Enter your password" required />
                        </div>
                        {!isValidPassword && password && (
                           <p className="text-error font-kanit text-sm text-center">
                              Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.
                           </p>
                        )}
                     </div>
                     <div className="text-sm flex justify-between items-center">
                        <div className="text-base-content">
                           <Checkbox label="Remember me" labelProps={{ className: 'text-base-content' }} color="red" required />
                        </div>
                        <a href="#" className="font-bold hover:underline hover:text-primary">Forgot your password?</a>
                     </div>
                     <div className="flex">
                        <button type="submit" onClick={handleSubmit} className="btn btn-outline w-full bg-primary text-base-100 hover:text-base-content rounded-btn py-2 hover:bg-base-100 transition duration-300 ease-in-out"><BiSolidUser />Sign In</button>
                     </div>
                  </form>
                  <div className="text-sm mt-4 md:mt-6">
                     Don't have an account? <a href="/register" target="_blank" className="text-base-content font-bold hover:underline hover:text-primary">Sign Up</a>
                  </div>
                  <div className="flex md:hidden py-3 justify-center space-x-6">
                     <Button className="btn rounded-btn bg-base-300 text-primary">
                        <AiFillGithub size={24} />
                     </Button>
                     <Button className="btn rounded-btn bg-base-300 text-primary">
                        <AiFillGoogleCircle size={24} />
                     </Button>
                     <Button className="btn rounded-btn bg-base-300 text-primary">
                        <BsFacebook size={22} />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default LoginComponent;