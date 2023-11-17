import React from 'react';
import { Link } from 'react-router-dom';


function NoPage () {
    return (
        <main className="bg-slate-300 dark:bg-slate-800 h-full flex justify-center">
            <div className="max-w-2xl mx-auto flex flex-col justify-center items-center">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#4d2dff] text-white px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                  <a
                    className="relative inline-block text-sm font-medium text-[#4d2dff] group active:text-white focus:outline-none focus:ring"
                  >
                    <span
                      className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#4d2dff] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-slate-300 dark:bg-slate-800 border border-current">
                      <Link to="/" className='dark:text-white'>Go Home</Link>
                    </span>
                  </a>
                </button>
            </div>
        </main>
    );
};

export default NoPage;