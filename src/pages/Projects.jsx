import React from "react";


function Projects () {
    return (
        <div id='layout-container'className='font-mono bg-white dark:bg-slate-900 h-screen'>
            <div id='layout-container-inside' className='max-w-5xl mx-auto w-11/12'>
                <div className='flex items-center justify-center flex-col py-20'>
                    <div className='text-center'>
                        <h1 className='text-2xl md:text-4xl mb-3 md:mb-3 py-2 text-indigo-600 dark:text-indigo-500 font-semibold'>
                            All Projects Page
                        </h1>
                        <p className='text-md md:text-xl max-w-md m-7 py-7 text-gray-600 dark:text-gray-300 text-center'>
                            Coming Soon 
                        </p> 
                        <div className="grid place-content-center">
                            <div className="w-12 h-12 rounded-full animate-spin items-center border-8 border-solid border-purple-500 border-t-transparent shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;