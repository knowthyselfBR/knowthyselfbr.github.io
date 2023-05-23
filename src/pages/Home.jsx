import React from 'react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import ProjectsPageHome from '../components/ProjectsPageHome';

function Home() {
    return (
        <div id='layout-container' className='font-mono bg-white dark:bg-slate-900'>
            <div id='layout-container-inside' className='max-w-5xl mx-auto w-11/12'>
                <HeroSection />
                <Skills />
                <ProjectsPageHome />
            </div>
        </div>
    );
};

export default Home;