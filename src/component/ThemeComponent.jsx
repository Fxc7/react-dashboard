import React from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import {
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
} from '@material-tailwind/react';

import { Themes, defaultTheme } from '../../configs.js';

const ThemeComponent = () => {
   const [theme, setTheme] = React.useState(localStorage.getItem('theme'));
   return (
      <Menu placement="bottom-end" animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
         <MenuHandler>
            <button className="animate__animated animate__three animate__fadeIn flex flex-row gap-2 text-base-100 shadow-md rounded-btn bg-primary p-3 transition-all duration-300 ease-linear">
               <MdDashboardCustomize size={20} />
               <span className="text-sm font-bold">Theme</span>
            </button>
         </MenuHandler>
         <MenuList className="max-h-72 bg-base-200 outline-none border-2 border-primary shadow-md rounded-btn">
            <MenuItem disabled className="border-b-2 mb-3 text-center font-kanit font-bold bg-base-100 text-primary">
               {theme || defaultTheme}
            </MenuItem>
            {
               Themes.filter((item) => item !== theme).map((items, index) => (
                  <MenuItem key={index} className="font-kanit text-xs text-base-content" onClick={() => {
                     document.documentElement.setAttribute('data-theme', items);
                     setTheme(items);
                     typeof window !== 'undefined' && window.localStorage.setItem('theme', items);
                  }}>{items}</MenuItem>
               ))
            }
         </MenuList>
      </Menu>
   );
};

export default ThemeComponent;