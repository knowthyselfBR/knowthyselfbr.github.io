import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavbarDropdown from './sectionsComponents/NavbarDropdown';

function Navbar () {

    const [theme, setTheme] = useState(null);

        useEffect(() => {
          if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
          }else{
            setTheme('light');
          }
        }, []);
      
        useEffect(() => {
          if(theme === 'dark'){
            document.documentElement.classList.add('dark');
          }else{
            document.documentElement.classList.remove('dark');
          }
        }, [theme])
      
        const handlerThemeSwitcher =() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        };

    return (
        <nav className='bg-slate-300 dark:bg-slate-800'>
            <div className='p-3 flex justify-between'>
                <ul className='flex justify-start gap-4 mr-4 ml-7'>
                    <li>
                        <Link to="/"
                        className='text-xl font-bold text-indigo-500 dark:text-indigo-500 hover:text-indigo-800 md:p-0 dark:hover:text-white'
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <NavbarDropdown />
                    </li>
                </ul>
                <ul className='flex place-content-end mr-7'>
                <li>
                    <button type='button' onClick={handlerThemeSwitcher} className='bg-indigo-500 text-lg p-1 rounded-md'>
                        {theme === 'dark' ? '🌛' : '🌞'}
                    </button>
                </li>
            </ul>
            </div>
        </nav>
    );
};
export default Navbar;