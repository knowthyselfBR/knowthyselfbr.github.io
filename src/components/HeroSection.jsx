import React from 'react';

function HeroSection() {
    return (
        <div className='flex items-center justify-center flex-col py-20'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl mb-3 md:mb-3 py-2 text-indigo-600 dark:text-indigo-500 font-semibold'>
                    Hello World, I'm RD.
                </h1>
                <p className='text-md md:text-xl max-w-md mb-3 py-2 text-gray-600 dark:text-gray-300 text-justify'>
                    Web Developer that loves to build and optimize efficient solutions. 
                </p>    
                <p className='text-md md:text-xl max-w-md mb-3 py-2 text-gray-600 dark:text-gray-300 text-justify'>
                    Besides the knowledge in Skills section. I'm a Blockchain enthusiast.
                </p>
                <a href='#projects' className='inline-block px-8 mt-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
                    Projects Section
                </a>
            </div>
        </div>
    )
};

export default HeroSection;