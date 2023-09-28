import React from 'react';
import { NavLink } from 'react-router-dom';
import {
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
} from '@material-tailwind/react';

import { BiSolidUser } from 'react-icons/bi';
import { FaUser, FaUserCog, FaUserShield, FaUserPlus } from 'react-icons/fa';

const AccountComponent = () => {
   return (
      <Menu placement="bottom-end" animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
         <MenuHandler>
            <button className="animate__animated animate__four animate__fadeIn flex flex-row gap-2 p-3 shadow-md text-base-100 rounded-btn bg-primary transition-all duration-300 ease-linear">
               <BiSolidUser size={20} />
               <span className="text-sm font-bold">Account</span>
            </button>
         </MenuHandler>
         <MenuList className="font-kanit max-h-72 bg-base-200 outline-none border-2 border-primary shadow-md rounded-btn">
            <NavLink to="/profile" className="text-base-content hover:outline-none">
               <MenuItem className="flex gap-2">
                  <FaUser size={15} />
                  <span className="text-sm">Profile</span>
               </MenuItem>
            </NavLink>
            <NavLink to="/setting" className="text-base-content hover:outline-none">
               <MenuItem className="flex gap-2">
                  <FaUserCog size={17} />
                  <span className="text-sm">Setting</span>
               </MenuItem>
            </NavLink>
            <NavLink to="/login" className="text-base-content hover:outline-none">
               <MenuItem className="flex gap-2">
                  <FaUserShield size={17} />
                  <span className="text-sm">Login</span>
               </MenuItem>
            </NavLink>
            <NavLink to="/register" className="text-base-content hover:outline-none">
               <MenuItem className="flex gap-2">
                  <FaUserPlus size={17} />
                  <span className="text-sm">Signup</span>
               </MenuItem>
            </NavLink>
         </MenuList>
      </Menu>
   );
};

export default AccountComponent;